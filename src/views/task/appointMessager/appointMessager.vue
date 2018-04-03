<style lang="less" scoped>
  .appointer-container {
    width: 100%;
    header {
      width: 100%;
      height: 65*2px;
      position: relative;
      img.bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      img.lis {
        position: absolute;
      }
      ul {
        position: absolute;
        bottom: 15*2px;
        z-index: 1;
        height: 14*2px;
        width: 100%;
        li {
          float: left;
          color: #fff;
          font-size: 12*2px;
        }
        li:nth-child(1) {
          margin-left: 15*2px;
        }
        li:nth-child(2) {
          margin-left: 110*2px;
        }
        li:nth-child(3) {
          margin-left: 50*2px;
        }
        li:nth-child(4) {
          margin-left: 50*2px;
        }
      }
    }
    .editDeadTime {
      width: 100%;
      background: #fff;
      li {
        display: flex;
        align-items: center;
        height: 50*2px;
        font-family: PingFangSC-Regular;
        font-size: 16px*2;
        color: #333333;
        position: relative;
        border-bottom: 2px solid rgba(151, 151, 151, 0.21);
        img.editpng {
          display: inline-block;
          height: 26*2px;
          margin-right: 13*2px;
        }
        div.editmore {
          display: inline-block;
          position: absolute;
          right: 14*2px;
          width: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          img.editmore {
            display: inline-block;
            height: 12*2px;
          }
        }
      }
    }

  }

  .select {
    width: 16*2px;
    height: 16*2px;
    border-radius: 50%;
    border: 1*2px solid #DBDBDB;
    margin-left: 15*2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 15*2px;
      height: 15*2px;
    }
  }

  .icon {
    width: 30*2px;
    height: 30*2px;
    border-radius: 50%;
    border: 2px solid #14C9FE;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D8D8D8;
    margin-left: 12*2px;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .name {
    margin-left: 10*2px;
    font-family: PingFangSC-Regular;
    font-size: 16px*2;
    color: #333333;
  }

</style>
<template>
  <div class="appointer-container">
    <header>
      <img class="bg" src='@/assets/img/appointer.png' />
      <ul>
        <li>成员列表</li>
        <li>更新</li>
        <li>评论</li>
        <li>进度</li>
      </ul>
    </header>
    <ul class="editDeadTime">
      <li v-for="(item,index) in members" :key="index">
        <div @touchstart='selected(index,item.isSelected)' class="select">
          <img src="@/assets/img/sign-selected.png" v-show="item.isSelected" />
        </div>
        <div class="icon">
          <img :src="item.imgUrl">
        </div>
        <div class="name">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        members: [{
            isSelected: false,
            userIcon: 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            name: '李四',
            update: 9,
            comments: 2,
            progress: "10%"
          },
          {
            isSelected: false,
            userIcon: 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            name: '张三',
            updated: 10,
            comments: 5,
            progress: "20%"
          }
        ]
      }
    },
    computed: {
      ...mapGetters(['taskExecutor'])
    },
    methods: {
      ...mapMutations({
        "SET_TASK_EXECUTOR": "SET_TASK_EXECUTOR"
      }),
      selected(index, isSelected) {
        this.members[index].isSelected = !isSelected;
        this.members.forEach((item, i) => {
          if (i != index) {
            item.isSelected= false;
          }
        })
        if (this.members[index].isSelected) {
          this.SET_TASK_EXECUTOR({ //更改执行人
            isSelected: this.members[index].isSelected,
            progress: this.members[index].progress,
            comments: this.members[index].comments,
            updated: this.members[index].updated,
            nickname: this.members[index].name,
            userIcon: this.members[index].userIcon,
            userId: this.members[index].userId || 7 // 待定
          })
          console.log(this.taskExecutor)
        };
        //选中后怎么跳转? 至addTaskSetting?
        setTimeout(() => {
          this.$router.push('addTaskSetting');
        }, 2000)
      },
    },
    created() {
      console.log(this.taskExecutor)
    }
  }

</script>
