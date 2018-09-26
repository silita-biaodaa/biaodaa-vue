<template>
<div>
  <div class="bdd_l_header">
    <div class="bdd_l_loge">
      <div class="main">
      <span class="title">标题</span>
      <span class="content">{{bddList.title?bddList.title:"-" }}</span>
     </div>
      <div><span class="bdd_l_mews">法院</span><span class="bdd_l_mess">{{bddList.court?bddList.court:"-" }}</span></div>
      <div><span class="bdd_l_mews">按号</span><span style="margin-left: 25px;" class="bdd_l_mess">{{bddList.caseNo?bddList.caseNo:"-" }}</span></div>
      <div><span class="bdd_l_mews">时间</span><span class="bdd_l_mess">{{bddList.dateStr?bddList.dateStr:"-" }}</span></div>
  </div>
  </div>
  <div class="bdd_l_h">原文详情:</div>
  <div class="bdd_l_hold"><span  v-html="bddList.content"></span></div>
</div>
</template>
<script>
  import shuffling from '../../components/shuffling.vue';
  import {
    getJsonData
  } from "../../api/index.js";
  export default {
    name:"platform",
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
        let openAppUrl = "com.yaobang.biaodada://?type="+type+"&id=" + id;
        localStorage.setItem("openAppUrl",openAppUrl);
        let dataParam = JSON.stringify({
          "id":id
        });
        getJsonData("/law/detail", dataParam).then(res => {
          console.log(777);
          this.bddList = res.data;
        });
      }
    }
  }
</script>
<style src = "../../css/lawworks/lawworks.css">
</style>
