/**
 * Created by hejiahui on 2018/4/23.
 */


export const numberTransformChinese = (value)=>{
  var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
  var chnUnitSection = ["","万","亿","万亿","亿亿"];
  var chnUnitChar = ["","十","百","千"];

  function SectionToChinese(section){
    var strIns = '', chnStr = '';
    var unitPos = 0;
    var zero = true;
    while(section > 0){
      var v = section % 10;
      if(v === 0){
        if(!zero){
          zero = true;
          chnStr = chnNumChar[v] + chnStr;
        }
      }else{
        zero = false;
        strIns = chnNumChar[v];
        strIns += chnUnitChar[unitPos];
        chnStr = strIns + chnStr;
      }
      unitPos++;
      section = Math.floor(section / 10);
    }
    if( value < 20 && value > 10  ){
      return chnStr.substring(1,3)
    }
    return chnStr;
  }
  return SectionToChinese(value)
}


export const dateFormat = function (date, format = 'yyyy-MM-dd hh:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

export const dateFormatInChinese = function (dateStr) {
  const date = new Date(Number(dateStr))
  const month = date.getMonth() + 1
  function addZero(num){
    return num < 10 ? '0' + num : num
  }
  return date.getFullYear() + '年' + addZero(month) + '月' + addZero(date.getDate()) + '日  ' + addZero(date.getHours()) + ':' +  addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())
}
