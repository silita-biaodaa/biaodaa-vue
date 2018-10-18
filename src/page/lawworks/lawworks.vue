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
  import shuffling from '../../components/shuffling.vue';
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
        localStorage.setItem("showTitle","");
        localStorage.setItem("showDescription","");
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
        console.log(222);
        getJsonData("/law/detail", dataParam).then(res => {
          console.log(777);
          let bddList = res.data;
          this.bddList = res.data;
          localStorage.setItem("showTitle",bddList.title?bddList.title:"-");
          let description = "法院:"+(bddList.content?bddList.content:"-")+"\n案号："+(bddList.caseNo?bddList.caseNo:"-");
          localStorage.setItem("showDescription",description);
        });
      }
    }
  }
</script>
<style src = "../../css/lawworks/lawworks.css">
</style>
