<template>
<div class="share-container">
  <div id="bdd_app" class="share-body">
   <div class="bdd_p "  style="margin-top:20px;"><span class="bdd_r_g">{{bddList.title?bddList.title:"-"}}</span></div>
    <div class="bdd_r_a">发布日期：{{bddList.time?bddList.time:"-"}}</div>
    <div class="bdd_p_leo"><div v-html='bddList.content'></div></div>
   
  </div>
 <!-- IOS -->
    <div id="IOSGuide" class="col-xs-12 col-sm-12" style="display: none">
      <img id="IOSGuideImg" src="../../assets/ios_guide.png">
    </div>

    <!-- andriod -->
    <div id="andriodGuide" class="col-xs-12 col-sm-12  hidden-lg hidden-md img-responsive" style="display: none">
      <img id="andriodGuideImg" src="../../assets/andriod_guide.png">
    </div>
  <nav id="bdd_nav" class="navbar navbar-default navbar-fixed-bottom share-download">
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
</div>
</template>
<script>
import shuffling from '../../components/shuffling.vue';
 import {
        getJsonData
    } from "../../api/index.js";

  export default {
    name:"industry",
   data () {
      return {
        bddList: {}
      }
    },
     mounted() {
      this.getUp();
    },
    methods: {
      //公示文章详情
      getUp: function() {
        let id = this.$route.params.id;
        let type = this.$route.params.type;
        if(!id){
          localStorage.setItem("id",id);
        }
        if (!type) {
          localStorage.setItem("type", type);
        }
        let dataParam = JSON.stringify({
                 "id":id
        });
        let openAppUrl = "com.yaobang.biaodada://?type="+type+"&id="+id;
        localStorage.setItem("openAppUrl",openAppUrl);
        getJsonData("/notice/queryArticleDetail", dataParam).then(res => {
          this.bddList = res.data;

        });
      }
    }
  }
</script>
<style scoped>

.bdd_p{
  clear:both;
  overflow:hidden;
  width: 90%;
  font-size:36px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-right:32px;
  margin-top:20px;

}
.share-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.share-body {
  height: calc(100% - 120px);
  overflow-x: hidden;
  overflow: auto;
}
.bdd_r_g{
  float:left;
  line-height:60px;
  display: inline-block;
}
.bdd_r_a{
  margin-top:30px;
  height:24px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:24px;

}
.bdd_p_leo{
  clear:both;
  /*overflow:hidden;*/
  width: 90%;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-right:25px;
  line-height:240px;
  margin-top:48px;
  padding-bottom:334px;

}
.bdd_r_g_ro{
  float:left;
  line-height:300px;
  display: inline-block;
}
table{
  margin-bottom:338px;
}
.bdd_R_mess{
  line-height: 100px;
}
</style>
