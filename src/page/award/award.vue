<template>
  <div class="award">
    <div style="display:none;width: 300px; height: 300px;" >
     <img src="../../assets/logo.png" alt="" />
    </div>
    <div class="invi">
       <div class="t-title" >
         邀新送会员啦
       </div>
       <div class="t-contant">
          <p>成功邀请到1位好友</p>
           <p>奖励您{{this.days}}天会员</p>
           <p>邀请好友越多,积累奖励时长越多</p>
       </div>
    </div>
    <div class="a-code">
      {{this.code}}
    </div>
    <div class="c-btn" onclick='downloadApp()' >
      
    </div>  
  </div>
</template>
<script>
export default {
  data () {
    return {
      days: '0',
      code: '123ABC'
    }
  },
  methods: {
    gainCode () {
      this.days = this.$route.params.days
      this.code = this.$route.params.code
    }
  },
  created () {
    this.gainCode()
  },
  components: {
  }
}
</script>
<style src = "../../css/award/award.css" >
</style>