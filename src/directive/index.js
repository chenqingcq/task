/**
 * Created by hejiahui on 2018/4/24.
 */
import InfiniteScroll from './scroll';

const install = function(Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);
};

if (window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;
