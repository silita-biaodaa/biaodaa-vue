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
      days: '',
      code: ''
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
<style scoped>
.full {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.award {
   background: url(../../assets/award.jpg) no-repeat;
   height: 100vh;
   background-size: 100% 100%;
   position: relative;
   background-position: center;
 }
 .invi {
   height: 248px;
   /* margin: 0 auto; */
   width: 500px;
   color:#fff;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   top: 20%;
   text-align: center;
 }
 .t-title {
    margin-top: 5px;
    height: 90px;
    line-height: 90px;
    font-size: 68px;
    font-weight: 500;
 }
 .t-contant {
   margin-top: 5px;
   font-size: 26px;
 }
 .a-code {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color:red;
    position: absolute;
    bottom: 17%;
    font-size: 48px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 550;
 }
 .c-btn {
    position: absolute;
    bottom: 3%;
    background: url(../../assets/btn.png) no-repeat;
    background-size: cover;
    width: 574px;
    height: 92px;
    left: 50%;
    transform: translateX(-50%);
 }
</style>