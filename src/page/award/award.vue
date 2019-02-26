<template>
  <div class="full" >
   <div class="award"  id="bdd_app" >
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
      
      <div id="IOSGuide" class="col-xs-12 col-sm-12" style="display: none">
        <img id="IOSGuideImg" src="../../assets/ios_guide.png">
      </div>
      <!-- andriod -->
      <div id="andriodGuide" class="col-xs-12 col-sm-12  hidden-lg hidden-md img-responsive" style="display: none">
        <img id="andriodGuideImg" src="../../assets/andriod_guide.png">
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
      this.code = this.$route.params.code;
      localStorage.removeItem('openAppUrl')
      let openAppUrl = "com.yaobang.biaodada://"
      localStorage.setItem("openAppUrl",openAppUrl);
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