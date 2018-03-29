import vue from 'vue';
import Dialog from './dialog.vue';
const DialogConstructor = vue.extend(Dialog);
var dialog;
export default function getInstance(options) {

  if (dialog && options.close) {
    vue.set(dialog, 'show', false);
    return
  }
  if (options.type === 'notice') {
    let notice = {
      state: "",//字体图标
      title: "",//任务描述
      task: "",//任务名称
      charge: '',//负责人
      partIn: []//参与人
    };
    notice = Object.assign({}, notice, options);
    delete notice.type
    console.log(notice)
    dialog = new DialogConstructor({
      data() {
        return {
          show: true,
          type: options.type,
          ['notice']: (options && options.type === 'notice') ? notice : ''
        }
      }
    });
  }
  if (options.type === 'info') {
    dialog = new DialogConstructor({
      data() {
        return {
          btnName: options.btnName || '添加',
          type: options.type,
          placeholder: options.placeholder || '请输入内容',
          show: true,
          operate: options.operate || function (text) {//回调函数
            console.log(text)
          }
        }
      }
    })
  }
  const instance = dialog.$mount();
  document.body.appendChild(instance.$el);
}
