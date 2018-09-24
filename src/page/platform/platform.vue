<template>
  <div>
    <div class="bdd_p"  style="margin-top:20px;"><span class="bdd_r_g">湖南耀邦建设有限公司湖南耀邦建设有限公司</span></div>
    <div class="bdd_r_a">发布日期：2018年8月10日</div>
    <div class="bdd_p_le"><span class="bdd_r_g_ro">湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有限公司湖南耀邦建设有</span></div>
    <table width="100%" class="bdd_p_table">
      <tr>
      <th style="width: 17%" class="bdd_p_th_o">排名</th>
      <th style="width: 60%" class="bdd_p_th_o">中标公司名称</th>
      <th style="width: 23%" class="bdd_p_th_o">中标个数  </th>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
      <tr>
        <td style="width: 17%" class="bdd_p_th_l">00</td>
        <td style="width: 60%" class="bdd_p_th_l">湖南思利他网络科技有限公司</td>
        <td style="width: 23%" class="bdd_p_th_l">00</td>
      </tr>
    </table>
    <div class="bdd_p_footer">
    <div class="bdd_p_foo">湖南企信数据研究院</div>
    <div class="bdd_p_foo">建筑业经营数据研究中心</div>
    </div>
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
<style src = "../../css/platform/platform.css">
</style>
