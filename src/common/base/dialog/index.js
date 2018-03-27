import DialogComponent from "./dialog.vue";

const Dialog = {};
Dialog.install = function(Vue) {
  const DialogConstructor = Vue.extend(DialogComponent);
  const instance = new DialogConstructor();

  Vue.prototype.$dialog = options => {
    if (
      Object.prototype.toString
        .call(options)
        .slice(8, -1)
        .toLowerCase() !== "object"
    ) {
      return;
    }
    console.log(instance);
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    Vue.set(instance, "placeholder", options.placeholder);
    Vue.set(instance, "type", options.type || "");
    Vue.set(instance, "show", true);
    Vue.set(instance, "operate", options.operate || void 0);
  };
  Vue.prototype.$dialogClose = () => {
    if (instance) {
      document.body.removeChild(instance.$el);
    }
  };
};
export default Dialog;
