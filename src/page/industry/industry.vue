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
<style src = "../../css/industry/industry.css">
</style>
