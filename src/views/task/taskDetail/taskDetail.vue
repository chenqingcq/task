<style lang="less" scoped>
  .task-detail-slide {
    padding: 4*2px 10*2px 0 10*2px;
    .panel {
      height: 345*2px;
      padding: 10*2px;
      position: relative;
      .task-slide-top {
        height: 57*2px;
        display: flex;
        .user-icon {
          width: 57*2px;
          height: 57*2px;
          background: gray;
          border-radius: 50%;
        }
        .right {
          flex: 1;
          margin-left: 15*2px;
          .task-name {
            font-size: 14*2px;
            color: #666666;
          }
          .task-detail {
            font-size: 12px*2;
            color: #666666;
            letter-spacing: 0;
          }

        }
      }
      .task-progress {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50*2px;
        display: flex;
        width: 100%;
        justify-content: center;
        p{
            width:100%;
        }
        .task-desc{
            width: 100%
        }
      }
    }
  }

</style>
<template>
  <div class="task-detail-container">
    <div class="task-detail-slide">
      <div class="panel c-1 c_white-bg">
        <div class="task-slide-top">
          <div class="user-icon"></div>
          <div class="right">
            <p class="task-name">任务名名称</p>
            <p class="task-detail">任务详情</p>
            <p class="progress">
              <div class="b_status pending">进行中</div>
            </p>
          </div>
        </div>
        <div class="task-slide-img"></div>
        <div class="task-progress">
          <p class="task-desc">展台基础已布置完毕</p>
          <div class="btn-warp b-MT-10">
            <div class="btn-small-success">
              .btn-small-success
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-progress"></div>
    <div class="project-party"></div>
    <comments></comments>
  </div>
</template>
<script>
  import comments from '@/views/comments/comments'
  export default {
    data() {
      return {

      }
    },
    components: {
      comments
    }
  }

</script>
