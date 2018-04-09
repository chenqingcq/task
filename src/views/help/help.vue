<style lang="less" scoped>
  .help-container {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(244, 244, 244, 1);
    position: fixed;
    nav {
      .banner {
        height: 6*2px;
        background: rgba(11, 175, 254, 1);
      }
    }
    section {
      ul {
        display: flex;
        margin-top: 12*2px;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          display: inline-block;
          width: 123*2px;
          height: 109*2px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: #fff;
          margin-top: 3*2px;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
          &:last-of-type {
            margin-right: 126*2px;
          }
          div {
            width: 56*2px;
            height: 56*2px;
            img {
              display: block;
              margin: 0 auto;
              width: 28*2px;
              height: auto;
            }
          }
          span {
            display: inline-block;
            height: 20*2px;
            margin-top: 10*2px;
            width: auto;
            font-size: 14*2px;
            font-family: PingFangSC-Regular;
            color: rgba(51, 51, 51, 1);
            line-height: 20*2px;
          }
        }
      }

    }
    footer {
      position: absolute;
      bottom: 0;
      .imgBg {
        width: 100%;
        img {
          display: inline-block;
          width: 100%;
          height: 112*2px;
        }
      }
    }
  }

</style>
<template>
  <div class="help-container">
    <nav>
      <div class="banner">

      </div>
    </nav>
    <section>
      <ul>
        <li v-for="(item,index) in items" :key="index">
          <div>
            <img :src="item.imgUrl" />
            <span>{{item.content}}</span>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <div class="imgBg">
        <img src="@/assets/img/image-background.png" />
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
            imgUrl: require('@/assets/img/icon-manual.png'),
            content: '操作手册'
          },
          {
            imgUrl: require('@/assets/img/icon3.png'),
            content: '流程演示'
          },
          {
            imgUrl: require('@/assets/img/icon-certificate.png'),
            content: '在线客服'
          },
          {
            imgUrl: require('@/assets/img/icon.png'),
            content: '访客群'
          },
          {
            imgUrl: require('@/assets/img/icon2.png'),
            content: '交互奖励'
          },
        ]
      }
    },
    components: {

    }
  }

</script>
