<style lang="less" scoped>

</style>
<template>
  <div class="appointer-container">
    指定责任人
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: '',
        manager: '',
        role: ''
      }
    },
    components: {

    },
    methods: {
      init() {
        this.role = 'taskCreater';
        this.manager = '宫本'
        this.items = [{
            imgUrl: 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            name: '厉鬼'
          },
          {
            imgUrl: 'https://image.artyears.cn/image/2017-06/547749a9-09aa-4ea5-9ec6-804bd9a4f15b',
            name: '厉鬼'
          }
        ]
      }
    },
    created() {
      this.$nextTick(() => {
        this.init()
      })
    }
  }

</script>
