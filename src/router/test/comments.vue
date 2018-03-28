<template>
  <div class="b-LR-10">
    <div class="panel b-MT-10 ">
      <div class="b-LR-10 b-T-5 between">
        <p class="middle b_FS-14"><span class="dot success"></span><span class="b-L-4 c_6 b_FS-14">审批留言</span></p>
        <div class=" b_FS-10 c_7">
          评论
        </div>
      </div>
      <scroll class="comments-container" :height='height'>
        <ul class="comment-panel">
          <li v-for="(item,index) in items" :key="index" class="lisItem">
            <div class="left">
              <img :src="item.imgUrl" alt="icon" class='icon'>
            </div>
            <div class="right"></div>
            {{item.title}}
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>
<script>
  import scroll from '@/common/base/scroll/scroll'
  export default {
    name: 'comments',
    data() {
      return {
        items: [{
          title: '1',
          imgUrl: require('@/assets/img/icon-book.png')
        }, {
          title: '1',
          imgUrl: require('@/assets/img/icon-book.png')
        }, {
          title: '1',
          imgUrl: require('@/assets/img/icon-book.png')
        }],
        height: 140*2+"px"
      }
    },
    components: {
      scroll
    },
    methods: {
      dialog() {
        this.$dialog.info()
      }
    }
  }

</script>
<style lang="less" scoped>
  .comments-container {
    overflow: hidden;
    .lisItem {
      height: 70*2px;
      display: flex;
      border-bottom: 1px solid #979797;
      .left {
        width: 64*2px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          display: inline-block;
          width: 43px*2;
          height: 43px*2;
          border-radius: 50%;
        }
      }
    }
  }

</style>
