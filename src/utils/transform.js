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
