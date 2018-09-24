<template>
<div>
   <div class="bdd_p"  style="margin-top:20px;"><span class="bdd_r_g">湖南耀邦建设有限公司湖南耀邦建设有限公司</span></div>
    <div class="bdd_r_a">发布日期：2018年8月10日</div>
    <div class="bdd_p_le"><span class="bdd_r_g_ro">湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司</span></div>

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
<style src = "../../css/industry/industry.css">
</style>
