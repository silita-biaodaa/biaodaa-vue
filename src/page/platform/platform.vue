<template>
  <div class="share-container">
    <div id="biaodaa-app" class="share-body">
    <div class="biaodaa-p"  style="margin-top:20px;"><span class="biaodaa-r_g">{{bddList.title?bddList.title:"-"}}</span></div>
    <div class="biaodaa-r_a" v-if="showDate">{{showDate?showDate:"-"}}</div>
    <div class="biaodaa-p_le"><span class="biaodaa-r_g_ro"></span>{{bddList.remark?bddList.remark:"-"}}</div>
    <template v-if="!isPrestige">
      <table width="100%" class="biaodaa-p_table">
        <tr>
        <th style="width: 17%" class="biaodaa-p_th_o">排名</th>
        <th style="width: 60%" class="biaodaa-p_th_o">中标公司名称</th>
        <th style="width: 23%" class="biaodaa-p_th_o">中标个数  </th>
        </tr>
        <tr v-for="(item,index) in bddList.list"  :key="item.comName">
          <td style="width: 17%;" class="biaodaa-p_th_l">{{index+1}}</td>
          <td style="width: 60%" class="biaodaa-p_th_l">{{item.comName}}</td>
          <td style="width: 23%" class="biaodaa-p_th_l">{{item.num}}</td>
        </tr>
      </table>
      <div class="biaodaa-p_footer">
        <div class="biaodaa-p_foo">湖南企信数据研究院</div>
        <div class="biaodaa-p_foo">建筑业经营数据研究中心</div>
      </div>
    </template>
    <template v-else>
      <table width="100%" class="biaodaa-p_table">
        <tr>
          <th  class="biaodaa-p_th_o" style="width:10%">排名</th>
          <th class="biaodaa-p_th_o">企业名称</th>
          <th class="biaodaa-p_th_o" style="width: 10%" >评分</th>
          <th style="width: 13%" class="biaodaa-p_th_o">获奖数量</th>
        </tr>
        <tr v-for="(item,index) in bddList.list"  :key="item.comName">
          <td class="biaodaa-p_th_l">{{index+1}}</td>
          <td class="biaodaa-p_th_l">{{item.comName}}</td>
          <td class="biaodaa-p_th_l">{{item.score}}</td>
          <td class="biaodaa-p_th_l">{{item.num}}</td>
        </tr>
      </table>
      <div class="biaodaa-p_footer">
        <div class="biaodaa-p_foo">重要声明：本排行榜内容是湖南省住房和建设厅公开信息所得结果，标大大不对排行结果的准确、真实性负责。</div>
      </div>
    </template>
    
    </div>
    <nav id="biaodaa-nav" class=" navbar navbar-default navbar-fixed-bottom share-download" >
      <div class="biaodaa-one">
        <img class="biaodaa-img" src="../../assets/logo.png" /> </div>
      <div class="biaodaa-two">
        <div class="biaodaa-g">标大大</div>
        <div class="biaodaa-n">打开App了解更多资讯</div>
      </div>
      <div class="biaodaa-foo">
        <div onclick='downloadApp()' class="biaodaa-x">立即打开</div>
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
import { getJsonData } from "../../api/index.js";

export default {
  name: "platform",
  data() {
    return {
      showDate:"",
      bddList: {},
      statDate: {},
      isPrestige:false
    };
  },
  mounted() {
    this.getUp();
  },
  created(){
    let type = this.$route.params.type;
    if(type!=5){
      this.isPrestige=true;
    }
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
        let day=dateArr[2]
        month = Number(month) + 1;
        if (month < 10) {
          month = "0" + month;
        }else if(Number(month)>12){
          month = "01";
          year =Number(year)+1;
        }
        return year + "-" + month +'-'+ day;
      }

      return lateDate;
    },

    //平台公示列表
    getUp: function() {
      let type = this.$route.params.type;
      let statDate = this.$route.params.statDate;
      let selectDate = statDate ? statDate : this.getCurrentDate();
      let data={
        statDate:selectDate
      }
      let str = statDate.split('-')
      if(type != '5') {
        
        if( str[2] == 12 ) {
           data.type='2'
        } else {
           data.type='3'
        }
       
      }
      let dataParam = JSON.stringify(data);
      
      // if(type!='5'){
      //   dataParam.type='2'
      // }
      let openAppUrl =
        "com.yaobang.biaodada://?type=" + type + "&statDate=" + statDate;
      localStorage.setItem("openAppUrl", openAppUrl);
      getJsonData("/count/list", dataParam).then(res => {
        let bddList =  res.data;
        this.bddList = bddList;
        this.showDate = this.getLateDate(bddList.releaseTime);
      });
    }
  }
};
</script>
<style scoped>
.biaodaa-p{
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
.biaodaa-r_g{
  float:left;
  line-height:60px;
  display: inline-block;
}
.biaodaa-r_a{
  margin-top:30px;
  height:24px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:24px;

}
.biaodaa-p_le{
  clear:both;
  overflow:hidden;
  width: 90%;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-right:25px;
  line-height:50px;
  margin-top:48px;
 text-indent: 2em;
}
.biaodaa-r_g_ro{
  float:left;
  line-height:60px;
  display: inline-block;
}
.biaodaa-p_th_o,.biaodaa-p_th_l{
  height:32px;
  font-size:24px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:32px;
  text-align: center;
}
.biaodaa-p_table{
  width: 100%;
  margin-top:100px;
  margin-bottom: 0;
}

.biaodaa-p_th_o{
  font-weight: 500;

}
.biaodaa-p_th_l{
  padding-top:40px;
  font-family:PingFangSC-Regular;
  font-weight:400;

}
.biaodaa-p_foo{
  /* height:50px; */
  font-size:24px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  padding: 0 30px;
  color:rgba(153,153,153,1);
  /* line-height:10px; */
  /* text-align: center; */
}
.biaodaa-p_footer{
  padding-top:100px;
}
.biaodaa-p_m{
  margin-bottom:48px;
}
.biaodaa-foo{
  width:148px;
  height:64px;
  background:#FE6603;
  border-radius:8px;
}
.biaodaa-x{
  width:150px;
  height:24px;
  font-size:24px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:15px;
  margin:26px;
}
.biaodaa-one img{
	width: 108px;
}
.biaodaa-two{
	font-size: 16px;
}
</style>
