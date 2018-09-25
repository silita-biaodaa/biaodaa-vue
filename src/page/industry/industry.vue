<template>
<div>
   <div class="bdd_p"  style="margin-top:20px;"><span class="bdd_r_g">{{bddList.title?bddList.title:"-"}}</span></div>
    <div class="bdd_r_a">发布日期：{{bddList.time?bddList.time:"-"}}</div>
    <div class="bdd_p_leo"><span  v-html='bddList.content'class="bdd_r_g_ro"></span></div>

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
        if(!id){
          localStorage.setItem("id",id);
        }
        let dataParam = JSON.stringify({
                 "id":id
        });
        getJsonData("/notice/queryArticleDetail", dataParam).then(res => {
          console.log(222);
          this.bddList = res.data;

        });
      }
    }
  }
</script>
<style src = "../../css/industry/industry.css">
</style>
