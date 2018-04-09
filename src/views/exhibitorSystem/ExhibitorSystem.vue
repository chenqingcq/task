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
          width: 122*2px;
          height: 109*2px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: #fff;
          margin-top: 3*2px;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
          div {
            width: 70*2px;
            height: 70*2px;
            margin:0 auto;
            position:relative;
            img {
              display: block;
              margin: 0 auto;
              margin-top: 10*2px;              
              width: 28*2px;
              height: auto;
            }
          }
          span {
            display: inline-block;
            height: 20*2px;
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 100%;
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
          <div v-if="item.show">
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
            imgUrl: require('@/assets/img/icon-project.png'),
            content: '项目管理',
            show:true
          },
          {
            imgUrl: require('@/assets/img/exhibition.png'),
            content: '网上展厅',
            show:true            
          },
          {
            imgUrl: require('@/assets/img/icon5.png'),
            content: '证件登记',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-administration.png'),
            content: '布撒展管理',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-service.png'),
            content: '服务定制',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-cost.png'),
            content: '费用管理',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-manual.png'),
            content: '参展商手册',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-notice.png'),
            content: '通知公告',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-end time.png'),
            content: '展位预订',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon-consultation.png'),
            content: '咨询台',
            show:true
            
          },
          {
            imgUrl: require('@/assets/img/icon2.png'),
            content: '服务定制',
            show:false
            
          },
          {
            imgUrl: require('@/assets/img/icon2.png'),
            content: '服务定制',
            show:false
            
          },
        ]
      }
    },
    components: {

    }
  }

</script>
