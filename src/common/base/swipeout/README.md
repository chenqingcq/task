## 仿微信 左滑cell 删除
### demo

无需引入
处理滑动事件盒子
v-swipeout
  滑出按钮
  v-swipe-btn

*prop 通信属性
  contentBg="#f4f4f4" // 背景颜色
  index // 相当于一个key 用于循环时返回的索引

*slot 插槽
  slot content 正文
  slot left-menu 滑出内容
  slot right-menu 滑出内容

`
   <v-swipeout >
          <div slot="content" style = 'width : 200px;padding: 20px'>
            http://0.0.0.0:8080/#/conventEntry
          </div>
          <div slot = 'right-menu' class="b_FS-14">
            <v-swipe-btn type="warn" >
              删除
            </v-swipe-btn>
          </div>
   </v-swipeout>
`
