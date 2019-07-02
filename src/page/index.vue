<template>
  <div class="share-container">
    <div id="bdd_app" class="share-body">
      <div class="bdd_i_o" style="margin-top:20px;"><span class="bdd_k_o">{{comBaseData?comBaseData.comName:"-"}}</span></div>
      <div class="bdd_c"><span class="bdd_a">{{comBaseData.legalPerson?comBaseData.legalPerson:"--"}}</span><span class="bdd_b">{{comBaseData.regisCapital?comBaseData.regisCapital:"--"}}</span></div>
      <div class="bdd_plone">联系信息</div>
      <div class="bdd_v"><span class="bdd_pl">联系电话</span><span class="bdd_k">{{phoneF?phoneF:"-"}}</span></div>
      <div class="bdd_v"><span class="bdd_pl">官网地址</span><span class="bdd_k">{{comBaseData.comUrl?comBaseData.comUrl:"-"}}</span></div>
      <div class="bdd_v"><span class="bdd_pl">邮箱地址</span><span class="bdd_k">{{comBaseData.email?comBaseData.email:"-"}}</span></div>
      <div class="bdd_main">
        <span class="bdd_pl bdd_title">公司地址</span>
        <span class="bdd_content bdd_k">{{comBaseData.comAddress?comBaseData.comAddress:"-"}}</span>
      </div>
      <div class="bdd_d"></div>
      <div style='padding-top:25px;'>
        <div><span class='bdd_plone'>资质信息</span><span class="bdd_p_kip">({{dataList.length}})</span>
        </div>
      </div>
      <div class="bdd_zi" v-for="item in dataList" :key="item.qualName">

        {{item.qualName}}

      </div>
      <div class="bdd_plone">基本信息</div>
      <div class="bdd_ji">
        <div class="bdd_s bdd_color"><span class="bdd_time ">注&nbsp;册&nbsp;号 </span><span class="bdd_ri">{{comBaseData.businessNum?comBaseData.businessNum:"-"}}</span></div>
        <div class="bdd_main_u">
          <span class="bdd_title bdd_i_color">企业类型</span>
          <span class="bdd_content bdd_i_po">{{comBaseData.economicType?comBaseData.economicType:"-"}}</span>
        </div>
        <div class="bdd_s bdd_color"><span class="bdd_time ">安许证号</span><span class="bdd_ri">{{comBaseData.certNo?comBaseData.certNo:"&#45;&#45;"}}</span></div>
        <div class="bdd_s "><span class="bdd_time ">有&nbsp;效&nbsp;期&nbsp;</span><span class="bdd_ri">{{comBaseData.validDate?comBaseData.validDate:"-"}}</span></div>
        <div class="bdd_main_u">
          <span class="bdd_title  bdd_i_color ">经营范围</span>
          <span class="bdd_content bdd_i_po">{{shortComRange?shortComRange:"-"}}<span class="bdd_h" v-show="isShowAllBtn" @click="showAll()">{{textBtn}}</span></span>
        </div>
      </div>
      <div class="bdd_plone">分支机构</div>
      <div class="bdd_f">该公司有 <span class="bdd_size bdd_col">{{bddList.branchCompanyTotal?bddList.branchCompanyTotal:"-"}} </span>家分支机构，打开标大大app可查看详情</div>
      <div class="bdd_plone">人员信息</div>
      <div class="bdd_f">该公司有 <span class="bdd_size bdd_col"> {{bddList.personTotal?bddList.personTotal:"-" }} </span>家人员信息，打开标大大app可查看详情</div>
      <div class="bdd_plone">业绩信息</div>
      <div class="bdd_f">该公司有 <span class="bdd_size" style="color:#CEA63F "> {{bddList.projectTotal?bddList.projectTotal:'-'}} </span>家业绩信息，打开标大大app可查看详情</div>
    </div>

    <!-- IOS -->
    <div id="IOSGuide" class="col-xs-12 col-sm-12" style="display: none">
      <img id="IOSGuideImg" src="../assets/ios_guide.png">
    </div>

    <!-- andriod -->
    <div id="andriodGuide" class="col-xs-12 col-sm-12  hidden-lg hidden-md img-responsive" style="display: none">
      <img id="andriodGuideImg" src="../assets/andriod_guide.png">
    </div>
    <nav id="bdd_nav" class="navbar navbar-default navbar-fixed-bottom share-download">
      <div class="bdd_one">
        <img class="bdd_img" src="../assets/logo.png" /> </div>
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
  import { getJsonData } from "../api/index.js";

  export default {
    name: "index",
    data() {
      return {
        id: "",
        comBaseData: {},
        qualityList: [],
        dataList: [],
        phoneF:'',
        bddList: {},
        shortComRange: "",
        longComRange: "",
        isLongText: false,
        isShowAllBtn: false,
        textBtn: "展开全部"
      };
    },
    mounted() {
      this.getParams();
      this.gocollection();
      this.getSecondData();
      this.getUp();
    },
    methods: {
      getParams: function() {
        console.log(5555);
        let comId = this.$route.params.comId;
        let openAppUrl = "com.yaobang.biaodada://?type=3&id=" + comId;
        localStorage.setItem("openAppUrl", openAppUrl);
      },
      phoneFilter: function(value) {
        if (value && value.indexOf(";") != -1) {
          let newStrArr = value.split(";");

          return newStrArr[1];
        }
        return value;
      },
      gocollection: function() {
        let comId = this.$route.params.comId;
        getJsonData("/company/" + comId).then(res => {
          let baseData = res.data;
          this.comBaseData = baseData;
          this.phoneF = this.phoneFilter(baseData.phone);
          let longComRange = baseData.comRange;
          this.longComRange = longComRange;
          if (longComRange && longComRange.length > 40) {
            let shortComRange = longComRange.substring(0, 40);
            this.shortComRange = shortComRange;
            this.isShowAllBtn = true;
          }
        });
      },
      showAll: function() {
        let isLongText = this.isLongText;
        let longComRange = this.longComRange;
        if (isLongText) {
          if (longComRange && longComRange.length > 40) {
            this.shortComRange = longComRange.substring(0, 40);
            this.textBtn = "展开全部";
          }
        } else {
          this.shortComRange = longComRange;
          this.textBtn = "收起";
        }
        this.isLongText = !isLongText;
      },
      //资质信息接口
      getSecondData: function() {
        let comId = this.$route.params.comId;
        getJsonData("company/qual/" + comId).then(res => {
          console.log(res);
          this.qualityList = res.data[0].list;
          let dataArr = res.data;
          let dataList = new Array();
          if (dataArr && dataArr.length > 0) {
            for (let i = 0; i < dataArr.length; i++) {
              let dataItem = dataArr[i];
              let dataItemList = dataItem.list;
              if (dataItemList && dataItemList.length > 0) {
                for (let j = 0; j < dataItemList.length; j++) {
                  let obj = new Object();
                  obj.qualName = dataItemList[j].qualName;
                  dataList.push(obj);
                }
              }
            }
          }
          this.dataList = dataList;
        });
      },
      // 分支机构接口
      getUp: function() {
        let comId = this.$route.params.comId;
        let dataParam = JSON.stringify({
          comId: comId
        });
        getJsonData("/company/shareTotal", dataParam).then(res => {
          console.log(666);
          this.bddList = res.data;
        });
      }
    }
  };
</script>
<style scoped>
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
  overflow-y: hidden; 
}

.bdd_header{
  width: 100%;
  height: 36px;
  font-size:36px;
  font-family:PingFangSC-Regular;
  color:rgba(51,51,51,1);
  line-height:40px;
  margin-top:26px;

}
.bdd_news{
  width:100%;
  margin-top:100px;

}
.bdd_span{
  font-size:36px;
  font-family:PingFangSC-Medium;
  color:rgba(51,51,51,1);
  margin-top:32px;
}

.bdd_header{
  text-align: center;
}
.bdd_c{
  font-size: 28px;
  margin-top:30px;
  margin-left:32px;

}
.bdd_a,.bdd_b{
  background:rgba(245,245,245,1);
  width: 52px;
  padding:10px;
  text-align: center;
}
.bdd_b{
  width: 172px;
  margin:10px;
}
.bdd_plone{
  margin-top:60px;
  height:48px;
  font-size:48px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:48px;
  margin-left:32px;
  margin-right:32px;
}
.bdd_v{
  margin-top:30px;
  margin-left:32px;
  margin-right:32px;
  border-bottom: 1px solid #ccc;
}
.bdd_pl,.bdd_k{
  width:128px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:80px;
}
.bdd_k{
  margin-left:50px;
  height:60px;
  color:rgba(51,51,51,1);

}
.bdd_hr{
  margin-top:20px;
  width:718px;
  height:1px;
  background:rgba(230,230,230,1);

}
.bdd_d{
  margin-top:30px;
  width:750px;
  background:rgba(245,245,245,1);
}
.bdd_zi{
  margin-top:20px;
  width:100%;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin-left:32px;
}
.bdd_ji{
  margin-top:20px;
  border:2px solid rgba(235,235,235,1);
  margin-left: 32px;
  margin-right: 32px;

}
.bdd_time{
  width:128px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);

}
.bdd_ri{
  width:174px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:50px;


}
.bdd_s{
  padding:32px;
  width: 100%;
}
.bdd_color{
  background:rgba(248,248,248,1);
}
.bdd_o{
  float:right;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin-left:80px;
  width:70%;
}
.bdd_h{
  color:#CEA63F ;
}
.bdd_f{
  margin-top:20px;
  height:28px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:28px;
  margin-left:32px;
}
.bdd_img{
  width:104px;
  height:104px;
  margin-top:13px;
}
.bdd_footer{
  height:128px;
  background:rgba(255,255,255,1);
  box-shadow:0px -8px 44px -20px rgba(0,0,0,0.3);

}
.bdd_g{
  width:110px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:18px;


}
.bdd_n{
  height:20px;
  font-size:20px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:13px;
}
.bdd_col{
  color:#CEA63F;
}
.bdd_w{
  letter-spacing:100px;
}
.bdd_p_kip{
  font-size: 28px;
}
.bdd_p{
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin-top:30px;
  margin-left:32px;
  margin-right:32px;
  font-size:32px;
}
.bdd_i_fot{
  margin-top:40px;
}
.bdd_i_o{
  clear:both;
  overflow:hidden;
  width: 90%;
  font-size:36px;
  font-family:PingFangSC-Medium;
  font-weight:700;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-right:32px;

}
.bdd_k_o{
  float:left;
  line-height:60px;
  display: inline-block;
}
.bdd_main{
  clear:both;
  overflow:hidden;
  width:100%;
  padding-top:32px;
  border-bottom: 1px solid #ccc;
  margin-left:32px;
  margin-right:32px;
  padding-bottom:23px;
}
.bdd_title{
  width:20%;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:32px;
}
.bdd_content{
  width:70%;
  font-size:32px;
  line-height:40px;
  margin-left:22px;
}
.bdd_title,.bdd_content{
  float:left;
  line-height:50px;
  display: inline-block;
}
.bdd_main_u{
  clear:both;
  overflow:hidden;
  width:100%;
  padding-top:32px;
  margin-left:32px;
  margin-right:32px;
  padding-bottom:23px;

}
.bdd_i_color{
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);

}
.bdd_i_po{
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:40px;
}
.bdd_i_fot{
  margin-top:20px;
}

.bdd_t_ipo{
  margin-bottom:200px;
  font-size: 32px;
}

</style>
