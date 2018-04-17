<style lang="less" scoped>
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f4f4f4;
    img{
      width: 18*2px ;
      height: 18*2px ;
    }
    .text{
      margin-left: 10px;
    }
  }
</style>
<template>
    <div class="b-TB-10 container" >
      <img @click="skipToStore" src="../../../assets/img/image-logo.png" alt="">
      <span @click="skipToStore" class="text c_7 b_FS-10" >会管家-展会应用商店</span>
    </div>
</template>
<script>
    export default{
        name : 'VBottomSign' ,
        data(){
            return{

            }
        },
        components:{

        },
        methods:{
          skipToStore(){
            console.log('add store url')
          }
        }
    }
</script>
