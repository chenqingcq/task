/**
 * Created by hejiahui on 2018/4/23.
 */

/**
 * 过滤器
 * */
import Vue from 'vue'
import { numberTransformChinese } from '@/utils/transform'

// 阿拉伯数字转中文
Vue.filter('numToChinese', function (value) {
  return numberTransformChinese(value)
})
