function moneyFormat(num) {
  const numStr = String(num)
  const pattern = /(?=((?!\b)\d{3})+$)/g;
  let str = numStr.replace(pattern, ',')
  const arr = str.split('.')
  if (arr.length == 2) {
    if (arr[1].length == 1) {
      return str + '0'
    }
  } else if (arr.length == 1) {
    return str + '.00'
  }
  return str
}

export default {
  moneyFormat
}
