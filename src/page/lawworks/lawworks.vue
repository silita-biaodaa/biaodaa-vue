<template>
<div>
  <div class="bdd_l_header">
    <div class="bdd_l_loge">
      <div class="main">
      <span class="title">标题</span>
      <span class="content">中国人民万岁中国人民万岁中国人民万岁中国人民万中国人民万岁中国</span>
     </div>
      <div><span class="bdd_l_mews">法院</span><span class="bdd_l_mess">湖南长沙市中级人民大院</span></div>
      <div><span class="bdd_l_mews">按号</span><span  class="bdd_l_mess">(2018)湘01民初585号</span></div>
      <div><span class="bdd_l_mews">时间</span><span  class="bdd_l_mess">2018-01-01</span></div>
  </div>
  </div>
  <div class="bdd_l_h">原文详情:</div>
  <div class="bdd_l_hold">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
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
        bddList: {}
      }
    },
    mounted() {
      this.getUp();
    },
    methods: {
      //公示文章详情
      getUp: function() {
        let dataParam = JSON.stringify({
          "id":""

        });
        getJsonData("/notice/queryArticleDetail", dataParam).then(res => {
          console.log(222);
          this.bddList = res.data[0];

        });
      }
    }
  }
</script>
<style src = "../../css/lawworks/lawworks.css">
</style>
