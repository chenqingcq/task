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
     selectImages(e){
      const files = e.target.files
      const isPass = this.imageFilter(files)
      if ( isPass == false) {
        return false;
      }
      //this.previewImages = this.previewImage(files)  // 预览 转url
      // 存放 files 数组
      //this.imagesFiles.push.apply(this.imagesFiles, Array.prototype.map.call(files,(file)=>file ))
      const filesArray =  Array.prototype.map.call(files,(file)=>file )

       this.mapImages(filesArray)

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
    mapImages(files){
      const self  = this
      var image = []
      var len = files.length
        //for (let i = 0, file; file = files[i]; i++) {

      var flag = 0
      async function mapIt(flag){
          if(flag == len){
            return
          }
          const file = files[flag]
          const name = file.name
          if (file.type.indexOf("image") == 0) {
            var result = await self.imgReady(file)
            self.imagesFiles.push({
              blob: result.bigPic ,
              name :name
            })
            if( flag == len -1  ){
              if( self.$refs && self.$refs.fileinput ){
                self.$refs.fileinput.value = ''
              }
              return
            }
            else{
              flag+=1
              mapIt(flag)
            }
          }
        }
      mapIt(flag)
    },
    readerAndCompress(file){
      var self = this
      console.log( file.size )
      let reader = new FileReader(), img = new Image()
      reader.readAsDataURL(file);
      return new Promise((resolve, reject)=>{


        // 读文件成功的回调
        reader.onload = function(e) {
          // e.target.result就是图片的base64地址信息
          img.src = e.target.result;
          //self.previewImages.push(e.target.result)
        };
        img.onload = async function(){
          var data =  await self.compress(img,this.width, this.height  )
          console.log(data)
          resolve(data)
        }

      })
    },
  //  dataURLtoBlob(dataurl){
  //  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  //    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  //  while (n--) {
  //    u8arr[n] = bstr.charCodeAt(n);
  //  }
  //  return new Blob([u8arr], { type: mime });
  //},
    dataURLtoBlob( dataUrl ){
      var mimeString =  dataUrl.split(',')[0].split(':')[1].split(';')[0]; // mime类型
      var byteString = atob(dataUrl.split(',')[1]); //base64 解码
      var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
      var intArray = new Uint8Array(arrayBuffer); //创建视图
      for ( let i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([intArray], { type:  mimeString }); //转成blob
      return blob
    },
    rotateImg (img, direction, canvas, fileType, compressRate = 600) {
      let min_step = 0;
      let max_step = 3;
      if (img == null) return;
      //img的高度和宽度不能在img元素隐藏后获取，否则会出错
      let height = img.height;
      let width = img.width;
      //分辨比率压缩
      if (width > compressRate  || height > compressRate * 2) {
        let picRate = parseInt(width / compressRate);
        width /= picRate;
        height /= picRate;
      }
      let step = 2;
      if (step == null) {
        step = min_step;
      }
      if (direction == 'right') {
        step++;
        //旋转到原位置，即超过最大值
        step > max_step && (step = min_step);
      }else if(direction == ''){
        step = 0;
      }else if(direction == 'bottomRight'){
        step = 2;
      } else {
        step--;
        step < min_step && (step = max_step);
      }
      let degree = step * 90 * Math.PI / 180;
      let ctx = canvas.getContext('2d');
      switch (step) {
        case 0:
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          break;
        case 1:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(degree);
          ctx.drawImage(img, 0, -height, width, height);
          break;
        case 2:
          canvas.width = width;
          canvas.height = height;
          ctx.rotate(degree);
          ctx.drawImage(img, -width, -height, width, height);
          break;
        case 3:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(degree);
          ctx.drawImage(img, -width, 0, width, height);
          break;
      }
      return canvas.toDataURL(fileType, 0.8);
    },
    imgReady(obj) {
      let self = this
      let reader = new FileReader();
      reader.readAsDataURL(obj);
      return new Promise((resolve, reject) => {
        reader.onload = function (f) {
          let res = this.result;
          let img = new Image();
          img.onload = async () => {
              let compressedData = await self.compress2(img, obj.type);
              let bigFile = self.dataURLtoBlob(compressedData.bigPic);
              let smallFile = self.dataURLtoBlob(compressedData.smallPic);
              self.previewImages.push(compressedData.smallPic)
              console.log(bigFile, smallFile)
              resolve({ bigPic: bigFile, smallPic: smallFile });
              img = null;
          };
          img.src = res;
        }
      });
    },
     compress2 (img, fileType){
      let canvas = document.createElement("canvas");
      let rotateshow, smallshow;
      const rotateImg = this.rotateImg
      return new Promise((resolve, reject) => {
        // 判断照片 横竖屏
        EXIF.getData(img, () => {
          EXIF.getAllTags(img);
          let Orientation = EXIF.getTag(img, 'Orientation');
          switch (Orientation) {
              case 6:
                rotateshow = rotateImg(img, 'left', canvas, fileType);
                smallshow = rotateImg(img, 'left', canvas, fileType, 250);
                break;
              case 8:
                rotateshow = rotateImg(img, 'right', canvas, fileType);
                smallshow = rotateImg(img, 'right', canvas, fileType, 250);
                break;
              case 3:
                rotateImg(img, 'bottomRight', canvas, fileType);
                rotateshow = rotateImg(img, 'bottomRight', canvas, fileType);
                smallshow = rotateImg(img, 'bottomRight', canvas, fileType, 250);
                break;
              default:
                rotateshow = rotateImg(img, '', canvas, fileType);//img.src;
                smallshow = rotateImg(img, '', canvas, fileType, 250);
          }
          resolve({ bigPic: rotateshow, smallPic: smallshow });
        });
      });
    }
  }
}
