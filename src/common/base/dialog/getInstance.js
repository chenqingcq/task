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
      state: "" || 'pass', //字体图标
      title: "", //任务描述
      task: "", //任务名称
      charge: '', //负责人
      partIn: [] //参与人
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
          btnName: options.btnName || 'add',
          type: options.type,
          placeholder: options.placeholder || '请输入内容',
          show: true,
          operate: options.operate || function (text) { //回调函数
            console.log(text)
          }
        }
      }
    })
  };
  // if (dialog && options.type === 'message') {
  //   vue.set(dialog, 'type', options.type);
  //   vue.set(dialog, 'message', options.message);
  //   vue.set(dialog, 'icon', options.icon);
  //   vue.set(dialog, 'show', true);
  // }
  if (options.type === 'message') {
    dialog = new DialogConstructor({
      data() {
        return {
          type: options.type,
          message: options.message || "", //定义信息
          icon: options.icon, //确认图标类型
          show: true,
        }
      }
    })
  };
  if (options.type === 'confirm') {
    dialog = new DialogConstructor({
      data() {
        return {
          type: options.type,
          message: options.message || '',
          showBottom: options.showBottom || true,
          show: true,
          confirm: options.confirm || function () {

          },
          concel: options.concel || function () {

          }
        }
      }
    })
  }
  const instance = dialog.$mount();
  console.log(instance)
  document.body.appendChild(instance.$el);
}