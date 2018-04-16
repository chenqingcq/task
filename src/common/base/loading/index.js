import LoadingComponent from "./loading.vue";
const Loading = {};
Loading.install = function (Vue) {
  const LoadingConstructor = Vue.extend(LoadingComponent);
  const instance = new LoadingConstructor();

  Vue.prototype.$loading = options => {
    if (Object.prototype.toString.call(options).slice(8, -1).toLowerCase() !== "object") {
      options = {};
    }
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    instance.show = true;
    instance.visible = true;
    instance.title = options.title || ""
    const timer = options.duration || 0
    if(timer > 0)
    setTimeout(()=>{
      Vue.prototype.$loadingClose()
    }, timer)
  };
  Vue.prototype.$loadingClose = () => {
    if (instance) {
      document.body.removeChild(instance.$el);
    }
  };
};
export default Loading;
