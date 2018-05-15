import YBDateExtension from '../Extension/YBDateExtension'

// 必须继承才能使用
class RedPacket {

  constructor () {
    if (new.target === RedPacket) {
      throw new Error('本类不能实例化');
    }
  }

  // 设置时间
  static formatDate (dateNum, f = 'yyyy.MM.dd hh:mm') {
    const date = new Date(Number(dateNum))
    return YBDateExtension.dateFormat(date, f)
  }

  // 设置数据
  setData (json) {
    for (let p in json){
      this[p] = json[p]
    }
  }

  // 根据数据设置对象并获取
  static creatModelWithJson(json) {
    const model = new this()
    model.setData(json)
    return model
  }

  // 根据json数组获取数组对象
  static getModelsWithArr(dataArr) {
    return dataArr.map((item) =>{
      let model = this.creatModelWithJson(item)
      return model
    })
  }
}

export default RedPacket
