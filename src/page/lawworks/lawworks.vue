<template>
<div class="share-container">
  <div id="bdd_app" class="share-body">
    <div class="bdd_l_header">
      <div class="bdd_l_loge">
        <div class="main">
        <span class="title">标题</span>
        <span class="content">{{bddList.title?bddList.title:"-" }}</span>
       </div>
        <div><span class="bdd_l_mews">法院</span><span class="bdd_l_mess">{{bddList.court?bddList.court:"-" }}</span></div>
        <div><span class="bdd_l_mews">案号</span><span style="margin-left: 25px;" class="bdd_l_mess">{{bddList.caseNo?bddList.caseNo:"-" }}</span></div>
        <div><span class="bdd_l_mews">时间</span><span class="bdd_l_mess">{{bddList.dateStr?bddList.dateStr:"-" }}</span></div>
    </div>
    </div>
      <div class="bdd_l_h">原文详情:</div>
      <div class="bdd_l_hold bdd_l_ar"  v-html="bddList.content"></div>
    <!-- <div class="bdd_l_ho"></div> -->
  </div>


  <nav id="bdd_nav" class="navbar navbar-default navbar-fixed-bottom share-download" >
    <div class="bdd_one">
      <img class="bdd_img" src="../../assets/logo.png" /> </div>
    <div class="bdd_two">
      <div class="bdd_g">标大大</div>
      <div class="bdd_n">打开App了解更多资讯</div>
    </div>
    <div class="bdd_foo">
      <div onclick='downloadApp()' class="bdd_x">立即打开</div>
    </div>
  </nav>
  
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
  import {
    getJsonData
  } from "../../api/index.js";
  export default {
    name:"lawworks",
    data () {
      return {
        bddList: {},
      }
    },
    mounted() {
      this.getUp();
    },
    methods: {
      //法务详情
      getUp: function() {
        let id = this.$route.params.id;
        let type = this.$route.params.type;
        if(!id){
          localStorage.setItem("id",id);
        }
        if (!type) {
          localStorage.setItem("type", type);
        }
        let openAppUrl = "com.yaobang.biaodada://?type="+type+"&id="+id;
        localStorage.setItem("openAppUrl",openAppUrl);

        let dataParam = JSON.stringify({
          "id":id
        });
        getJsonData("/law/detail", dataParam).then(res => {
          this.bddList = res.data;
        });
      }
    }
  }
</script>
<style scoped>
.share-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* z-index: 9999999; */
}
.share-body {
  height: calc(100% - 120px);
  overflow-x: hidden;
  overflow: auto;
}
.main{
  clear:both;
  overflow:hidden;
  width:100%;
  padding-top:32px;
}

.title,.content{
  float:left;
  line-height:50px;
  display: inline-block;
}
.title{
  width:10%;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:32px;
}
.content{
  width: 80%;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:40px;
  margin-left:48px;
}
.bdd_l_header{
  width: 100%;
  margin-bottom:10px;
  background-color: #F3F4F5;
  overflow: hidden;
}
.bdd_l_loge{
  width: 94%;
  background:rgba(255,255,255,1);
  margin: 32px auto;
  padding-bottom:28px;
  padding-left:32px;
  padding-right:32px;
}
.bdd_l_mews{
  width:64px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:32px;

}
.bdd_l_mess{
  width: 80%;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:70px;
  margin-left:42px;
}
.bdd_l_h{
  width:180px;
  height:36px;
  font-size:36px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:36px;
  margin-left:32px;
  margin-right:32px;
  margin-top:80px;
}
.bdd_l_hold{
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-right:32px;
  margin-top:48px;
}
.bdd_l_ar{
  margin-bottom:200px;
}
.bdd_l_ho{
  padding-top:200px;
}
.bdd_l_pop{
  padding-bottom:200px;
}

</style>
