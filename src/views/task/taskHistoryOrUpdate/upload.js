/**
 * Created by hejiahui on 2018/5/5.
 */

/*
* lrz upload images to tecent cloud server
* **/
//引入 tecent SDK
//import CosCloud from "@/assets/js/cos-js-sdk-v4.js"
import CosCloud from 'cos-js-sdk-v5'
// api
import { Cos } from '@/services'

var myFolderName = function () {
  var now = new Date();
  var nowYear = now.getFullYear();
  var nowMonth = now.getMonth() + 1;
  if(nowMonth < 10) {
    nowMonth = '0' + nowMonth;
  } else {
    nowMonth = String(nowMonth);
  }
  return '/image/' + nowYear + '-' + nowMonth + '/'
//    return '/image/' + nowYear + '-' + "05" + '/'
};

export default {
  data(){
    return {
      imagesFiles:[] , // e.target.files
      previewImages : [] , // window.uril.createOBjUrl
      submitImages: [] ,

      cosData: {
        bucket: 'webstatic',
        sid: '',
        skey: '',
        region: 'gz',
        myFolder: myFolderName(),
        fileName: function () {
          var guid = "";
          for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
              guid += "-";
          }
          return guid;
        },
        periodSign: '',
        onceSign: '',
        cosObject: null,
      },
      cosConfigObj : {},
      // 腾讯云上传实例
      cosInstance: null
    }
  },
  methods:{
    //获取cos签名与cos对象
    initCos(){
      this.cosInstance = new CosCloud({
        getAuthorization: function (options, callback) {

           //Cos.getTecentCos().then(res=>{
           Cos.getTecentCos().then(res=>{
            const { data } = res
             const { tempKeys } = data
            this.cosConfigObj = data
            callback({
              TmpSecretId: tempKeys.credentials && tempKeys.credentials.tmpSecretId,
              TmpSecretKey: tempKeys.credentials && tempKeys.credentials.tmpSecretKey,
              XCosSecurityToken: tempKeys.credentials && tempKeys.credentials.sessionToken,
              ExpiredTime: tempKeys.expiredTime
            });
          })
        }
      });
    },
    initCos2(){
      Cos.getStaticCos().then(res=>{
        const { data } = res
        this.cosConfigObj = data
          this.cosInstance = new CosCloud({
            SecretId: data.SecretId,
            SecretKey: data.SecretKey,
          })
      })
    },
    uploadToCloud( blob, name ){
      return new Promise((resolve, reject)=>{

        const Region= 'ap-guangzhou', Bucket = 'task-1256472463'
        console.log( {
          Bucket: Bucket,
          Region: Region,
          Key: name,
          Body: blob,
        })

        // 分片上传文件
        this.cosInstance.sliceUploadFile({
          Bucket: Bucket,
          Region: Region,
          Key: name,
          Body: blob,
          onHashProgress: function (progressData) {
            console.log('校验中', JSON.stringify(progressData));
          },
          onProgress: function (progressData) {
            console.log('上传中', JSON.stringify(progressData));
          },
        }, function (err, data) {
          console.log(err, data);
          if( typeof data == 'object' && 'Location' in data ){
            resolve(data.Location)
          }

        });
      })
    },
    //上传到腾讯云
    uploadImageToCos(){
      var _self = this;
      console.warn("===上传文件到腾讯云===");

      for (var i in this.data.tempList) {
        var fileName = _self.cosData.fileName();
        // alert(fileName);
        this.cosData.cosObject.uploadFile(
          _self.successCallBack,
          _self.errorCallBack,
          _self.progressCallBack,
          _self.cosData.bucket,
          _self.cosData.myFolder + fileName + ".jpg",
          _self.data.tempList[i].file,
          1
        );
      }

    },
    async selectImages(e){
      const files = e.target.files
      const isPass = this.imageFilter(files)
      if ( isPass == false) {
        return false;
      }
      this.previewImages = this.previewImage(files)  // 预览 转url
      // 存放 files 数组
      //this.imagesFiles.push.apply(this.imagesFiles, Array.prototype.map.call(files,(file)=>file ))
      const imageBlob = await this.mapImages(files)

      this.imagesFiles = imageBlob
    },
    // 取消某一张的上传
    giveUpANIamge(index){
      this.previewImages.splice(index, 1)
      this.imagesFiles.splice(index, 1)
    },
    // 上传后的图片预览展示
    previewImage(files){
      const FILES = files
      // e.target.files 不是数组 不能用map，只能用for 直接便利
      return this.previewImages.concat(Array.prototype.map.call(FILES,(image, key)=>
      {
        let url = this.getObjectURL(image)
        console.log(`>>>第 ${key} 张图：${url} `)
        const img = new Image()
        img.onload = ()=>{
          this.revokeObjectURL(url)
        }
        return url
      }))
    },
    // 释放内存中指定的文件对象
    revokeObjectURL(file){
      window.URL.revokeObjectURL(objectURL);
    },
    // 获取 url 在内存的片段url
    getObjectURL(file){
      let url = null
      // URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL
      if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL ) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url
    },
     imageFilter(files){
      // 是否符合的图片格式和大小
      let isMatch = true
      const chinese = ['一','二','三','四']
      if( files.length > 4 || (files.length + this.imagesFiles.length ) >4){
        this.$toast.show('最多只能上传4张图片', 2000)
        return false
      }
      for (var i = 0, file; file = files[i]; i++) {
        //console.log(file)
        //console.log(file.type)
        if (file.type.indexOf("image") == 0) {
          if (file.size >=  5 * 1024 * 1024) { // 2MB
            this.$toast.show('您上传的第'+ chinese[i] +'张图片大小过大，应小于5M，请重新上传', 3000)
            isMatch = false
          }
        } else {
          this.$toast.show('文件"' + file.name + '"不是图片。请重新上传', 2000)
          isMatch = false
        }
      }
      return isMatch
    },
    async mapImages(files){

        let image = []
        for (let i = 0, file; file = files[i]; i++) {
          const name = file.name
          if (file.type.indexOf("image") == 0) {
            const a = await this.readerAndCompress(file)
            const b = await this.compress(a.img, a.w, a.h)
            const blob = await this.dataURLtoBlob(b)
            image.push({blob, name})
          }
        }
        return this.imagesFiles.concat( image )
    },
    readerAndCompress(file){
      var self = this
      console.log( file.size )
      return new Promise((resolve, reject)=>{
        const reader = new FileReader(), img = new Image()
        reader.readAsDataURL(file);
        // 读文件成功的回调
        reader.onload = function(e) {
          // e.target.result就是图片的base64地址信息
          img.src = e.target.result;
          //self.previewImages.push(e.target.result)
        };
        img.onload = function(){
          resolve({img, w:this.width, h:this.height  })
        }
      })
    },
    dataURLtoBlob( dataUrl ){
      return  new Promise((resolve, reject)=>{
      //  var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      //    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      //  while(n--){
      //    u8arr[n] = bstr.charCodeAt(n);
      //  }
      //  var b = new Blob([u8arr], {type:mime})
      //  console.log( b.size)

      var mimeString =  dataUrl.split(',')[0].split(':')[1].split(';')[0]; // mime类型
      var byteString = atob(dataUrl.split(',')[1]); //base64 解码
      var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
      var intArray = new Uint8Array(arrayBuffer); //创建视图
      for ( let i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
      }

      var blob = new Blob([intArray], { type:  mimeString }); //转成blob
      //return blob
      resolve(blob)


      })

    },
    compress(img , width , height ){
      return  new Promise((resolve, reject)=>{
        // 缩放图片需要的canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        // 图片原始尺寸
        var originWidth = width;
        var originHeight = height;
        // 最大尺寸限制，可通过国设置宽高来实现图片压缩程度
        var maxWidth = 500,
          maxHeight = 500
        // 目标尺寸
        var targetWidth = originWidth,
          targetHeight = originHeight;

        // 图片尺寸超过400x400的限制
        if(originWidth > maxWidth || originHeight > maxHeight) {
          if(originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        /*第一个参数是创建的img对象；第二个参数是左上角坐标，后面两个是画布区域宽高*/
        //压缩后的图片base64 url
        /*canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/jpeg';
         * qualityArgument表示导出的图片质量，只要导出为jpg和webp格式的时候此参数才有效果，默认值是0.92*/
        const newUrl = canvas.toDataURL('image/jpeg', 0.92);//base64 格式
        resolve(newUrl)

      })
    }


  }
}
