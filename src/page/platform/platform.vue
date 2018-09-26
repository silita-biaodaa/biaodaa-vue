<template>
  <div>
    <div class="bdd_p"  style="margin-top:20px;"><span class="bdd_r_g">{{bddList.title?bddList.title:"-"}}</span></div>
    <div class="bdd_r_a">发布日期：{{bddList.releaseTime?bddList.releaseTime:"-"}}</div>
    <div class="bdd_p_le"><span class="bdd_r_g_ro"></span>{{bddList.remark?bddList.remark:"-"}}</div>
    <table width="100%" class="bdd_p_table">
      <tr>
      <th style="width: 17%" class="bdd_p_th_o">排名</th>
      <th style="width: 60%" class="bdd_p_th_o">中标公司名称</th>
      <th style="width: 23%" class="bdd_p_th_o">中标个数  </th>
      </tr>
      <tr v-for="(item,index) in bddList.list"  :key="item.comName">

      <td style="width: 17%;" class="bdd_p_th_l">{{index+1}}</td>
        <td style="width: 60%" class="bdd_p_th_l">{{item.comName}}</td>
        <td style="width: 23%" class="bdd_p_th_l">{{item.num}}</td>
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
      getCurrentDate:function(){
         var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();//得到月份
        month = month + 1;
        if (month < 10){
          month = "0" + month;
        }
        return year+"-"+month+"-01";
      },
      //平台公示列表
      getUp: function(){
      //  let statDate = this.$route.statDate.statDate;
      //   if(!statDate){
      //     localStorage.setItem("statDate",statDate);
      //   }
        let dataParam = JSON.stringify({
          "statDate":"2018-06-01"//this.getCurrentDate()
        });
        getJsonData("/count/list", dataParam).then(res => {
          console.log(666);
          this.bddList = res.data;
        });
      }
    }
  }
</script>
<style src = "../../css/platform/platform.css">
</style>
