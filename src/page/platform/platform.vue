<template>
  <div class="share-container">
    <div id="bdd_app" class="share-body">
    <div class="bdd_p"  style="margin-top:20px;"><span class="bdd_r_g">{{bddList.title?bddList.title:"-"}}</span></div>
    <div class="bdd_r_a">发布日期：{{showDate?showDate:"-"}}</div>
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
    <nav id="bdd_nav" class=" navbar navbar-default navbar-fixed-bottom share-download" >
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
import shuffling from "../../components/shuffling.vue";
import { getJsonData } from "../../api/index.js";

export default {
  name: "platform",
  data() {
    return {
      showDate:"",
      bddList: {},
      statDate: {}
    };
  },
  mounted() {
    this.getUp();
  },
  methods: {
    getCurrentDate: function() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth(); //得到月份
      month = month - 1;
      if (month < 10) {
        month = "0" + month;
      }
      return year + "-" + month + "-01";
    },

    getLastDate: function(selectDate) {
      let dateArr = selectDate.split("-");
      if (dateArr && dateArr.length > 2) {
        let year = dateArr[0];
        let month = dateArr[1];
        month = Number(month) - 1;
        if (month>0&&month < 10) {
          month = "0" + month;
        }else if(month==0||month=='00'){
          month = 12;
          year = Number(year) - 1;
        }
        return year + "-" + month + "-01";
      }

      return selectDate;
    },

    getLateDate: function(lateDate) {
      let dateArr = lateDate.split("-");
      if (dateArr && dateArr.length > 2) {
        let year = dateArr[0];
        let month = dateArr[1];
        month = Number(month) + 1;
        if (month < 10) {
          month = "0" + month;
        }else if(Number(month)>12){
          month = "01";
          year =Number(year)+1;
        }
        return year + "-" + month + "-01";
      }

      return lateDate;
    },

    //平台公示列表
    getUp: function() {
      localStorage.setItem("showTitle","");
      localStorage.setItem("showDescription","");
      let type = this.$route.params.type;
      let statDate = this.$route.params.statDate;
      let selectDate = statDate ;
      let dataParam = JSON.stringify({
        statDate:selectDate
      });
      console.log(2222);
      let openAppUrl =
        "com.yaobang.biaodada://?type=" + type + "&statDate=" + statDate;
      localStorage.setItem("openAppUrl", openAppUrl);
      getJsonData("/count/list", dataParam).then(res => {
        console.log(666);
        let bddList =  res.data;
        localStorage.setItem("showTitle",bddList.title?bddList.title:"-");
        let description = bddList.remark?bddList.remark:"-";
        localStorage.setItem("showDescription",description);
        this.bddList = bddList;
        this.showDate = this.getLateDate(bddList.releaseTime);
      });
    }
  }
};
</script>
<style src = "../../css/platform/platform.css">
</style>
