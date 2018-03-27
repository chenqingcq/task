import vue from 'vue';
import Dialog from './dialog.vue';
const DialogConstructor = vue.extend(Dialog);
let dialog;
export default function getInstance(options) {
  console.log(options);
  if (dialog && options.close) {
    vue.set(dialog, 'show', false);
    return
  }
  dialog = new DialogConstructor({
    data() {
      return {
        btnName: options.btnName || '添加',
        type: options.type,
        placeholder: options.placeholder || '',
        show: true,
        operate: options.operate || null
      }
    }
  });
  const instance = dialog.$mount();
  document.body.appendChild(instance.$el);
}
