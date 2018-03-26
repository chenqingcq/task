import LoadingComponent from "./loading.vue";
const Loading = {};
Loading.install = function(Vue) {
  const LoadingConstructor = Vue.extend(LoadingComponent);
  const instance = new LoadingConstructor();

  Vue.prototype.$loading = options => {
      console.log(Object.prototype.toString.call(options).slice(8, -1).toLowerCase())
    if (Object.prototype.toString.call(options).slice(8, -1).toLowerCase() !== "object") {
        options = {};
    }
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    instance.show = true;
    instance.title = options.title || "正在载入...";
  };
  Vue.prototype.$close = () => {
    if (instance) {
      document.body.removeChild(instance.$el);
    }
  };
};
export default Loading;
