<style>

</style>
<template>
    <div>
      <span>
        日历 ：
      </span>
      <div>
        <calendar-switch></calendar-switch>
      </div>

    </div>
</template>
<script>
    import calendarSwitch from './calendar-switch.vue'
    export default{
        name : 'VCalendar',
        data(){
            return{

            }
        },
        components:{
          calendarSwitch
        }
    }
</script>
