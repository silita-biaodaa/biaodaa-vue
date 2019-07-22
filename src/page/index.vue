<template>
  <div class="share-container">
    <div id="biaodaa-app" class="share-body">
      <div class="biaodaa-i_o" style="margin-top:20px;"><span class="biaodaa-k_o">{{comBaseData?comBaseData.comName:"-"}}</span></div>
      <div class="biaodaa-c"><span class="biaodaa-a">{{comBaseData.legalPerson?comBaseData.legalPerson:"--"}}</span><span class="biaodaa-b">{{comBaseData.regisCapital?comBaseData.regisCapital:"--"}}</span></div>
      <div class="biaodaa-plone">联系信息</div>
      <div class="biaodaa-v"><span class="biaodaa-pl">联系电话</span><span class="biaodaa-k">{{phoneF?phoneF:"-"}}</span></div>
      <div class="biaodaa-v"><span class="biaodaa-pl">官网地址</span><span class="biaodaa-k">{{comBaseData.comUrl?comBaseData.comUrl:"-"}}</span></div>
      <div class="biaodaa-v"><span class="biaodaa-pl">邮箱地址</span><span class="biaodaa-k">{{comBaseData.email?comBaseData.email:"-"}}</span></div>
      <div class="biaodaa-main">
        <span class="biaodaa-pl biaodaa-title">公司地址</span>
        <span class="biaodaa-content biaodaa-k">{{comBaseData.comAddress?comBaseData.comAddress:"-"}}</span>
      </div>
      <div class="biaodaa-d"></div>
      <div style='padding-top:25px;'>
        <div><span class='biaodaa-plone'>资质信息</span><span class="biaodaa-p_kip">({{dataList.length}})</span>
        </div>
      </div>
      <div class="biaodaa-zi" v-for="item in dataList" :key="item.qualName">

        {{item.qualName}}

      </div>
      <div class="biaodaa-plone">基本信息</div>
      <div class="biaodaa-ji">
        <div class="biaodaa-s biaodaa-color"><span class="biaodaa-time ">注&nbsp;册&nbsp;号 </span><span class="biaodaa-ri">{{comBaseData.businessNum?comBaseData.businessNum:"-"}}</span></div>
        <div class="biaodaa-main_u">
          <span class="biaodaa-title biaodaa-i_color">企业类型</span>
          <span class="biaodaa-content biaodaa-i_po">{{comBaseData.economicType?comBaseData.economicType:"-"}}</span>
        </div>
        <div class="biaodaa-s biaodaa-color"><span class="biaodaa-time ">安许证号</span><span class="biaodaa-ri">{{comBaseData.certNo?comBaseData.certNo:"&#45;&#45;"}}</span></div>
        <div class="biaodaa-s "><span class="biaodaa-time ">有&nbsp;效&nbsp;期&nbsp;</span><span class="biaodaa-ri">{{comBaseData.validDate?comBaseData.validDate:"-"}}</span></div>
        <div class="biaodaa-main_u">
          <span class="biaodaa-title  biaodaa-i_color ">经营范围</span>
          <span class="biaodaa-content biaodaa-i_po">{{shortComRange?shortComRange:"-"}}<span class="biaodaa-h" v-show="isShowAllBtn" @click="showAll()">{{textBtn}}</span></span>
        </div>
      </div>
      <div class="biaodaa-plone">分支机构</div>
      <div class="biaodaa-f">该公司有 <span class="biaodaa-size biaodaa-col">{{bddList.branchCompanyTotal?bddList.branchCompanyTotal:"-"}} </span>家分支机构，打开标大大app可查看详情</div>
      <div class="biaodaa-plone">人员信息</div>
      <div class="biaodaa-f">该公司有 <span class="biaodaa-size biaodaa-col"> {{bddList.personTotal?bddList.personTotal:"-" }} </span>家人员信息，打开标大大app可查看详情</div>
      <div class="biaodaa-plone">业绩信息</div>
      <div class="biaodaa-f">该公司有 <span class="biaodaa-size" style="color:#CEA63F "> {{bddList.projectTotal?bddList.projectTotal:'-'}} </span>家业绩信息，打开标大大app可查看详情</div>
    </div>

    <!-- IOS -->
    <div id="IOSGuide" class="col-xs-12 col-sm-12" style="display: none">
      <img id="IOSGuideImg" src="../assets/ios_guide.png">
    </div>

    <!-- andriod -->
    <div id="andriodGuide" class="col-xs-12 col-sm-12  hidden-lg hidden-md img-responsive" style="display: none">
      <img id="andriodGuideImg" src="../assets/andriod_guide.png">
    </div>
    <nav id="biaodaa-nav" class="navbar navbar-default navbar-fixed-bottom share-download">
      <div class="biaodaa-one">
        <img class="biaodaa-img" src="../assets/logo.png" /> </div>
      <div class="biaodaa-two">
        <div class="biaodaa-g">标大大</div>
        <div class="biaodaa-n">打开App了解更多资讯</div>
      </div>
      <div class="biaodaa-foo">
        <div onclick='downloadApp()' class="biaodaa-x">立即打开</div>
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

.biaodaa-header{
  width: 100%;
  height: 36px;
  font-size:36px;
  font-family:PingFangSC-Regular;
  color:rgba(51,51,51,1);
  line-height:40px;
  margin-top:26px;

}
.biaodaa-news{
  width:100%;
  margin-top:100px;

}
.biaodaa-span{
  font-size:36px;
  font-family:PingFangSC-Medium;
  color:rgba(51,51,51,1);
  margin-top:32px;
}

.biaodaa-header{
  text-align: center;
}
.biaodaa-c{
  font-size: 28px;
  margin-top:30px;
  margin-left:32px;

}
.biaodaa-a,.biaodaa-b{
  background:rgba(245,245,245,1);
  width: 52px;
  padding:10px;
  text-align: center;
}
.biaodaa-b{
  width: 172px;
  margin:10px;
}
.biaodaa-plone{
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
.biaodaa-v{
  margin-top:30px;
  margin-left:32px;
  margin-right:32px;
  border-bottom: 1px solid #ccc;
}
.biaodaa-pl,.biaodaa-k{
  width:128px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:80px;
}
.biaodaa-k{
  margin-left:50px;
  height:60px;
  color:rgba(51,51,51,1);

}
.biaodaa-hr{
  margin-top:20px;
  width:718px;
  height:1px;
  background:rgba(230,230,230,1);

}
.biaodaa-d{
  margin-top:30px;
  width:750px;
  background:rgba(245,245,245,1);
}
.biaodaa-zi{
  margin-top:20px;
  width:100%;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin-left:32px;
}
.biaodaa-ji{
  margin-top:20px;
  border:2px solid rgba(235,235,235,1);
  margin-left: 32px;
  margin-right: 32px;

}
.biaodaa-time{
  width:128px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);

}
.biaodaa-ri{
  width:174px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:50px;


}
.biaodaa-s{
  padding:32px;
  width: 100%;
}
.biaodaa-color{
  background:rgba(248,248,248,1);
}
.biaodaa-o{
  float:right;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin-left:80px;
  width:70%;
}
.biaodaa-h{
  color:#CEA63F ;
}
.biaodaa-f{
  margin-top:20px;
  height:28px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:28px;
  margin-left:32px;
}
.biaodaa-img{
  width:104px;
  height:104px;
  margin-top:13px;
}
.biaodaa-footer{
  height:128px;
  background:rgba(255,255,255,1);
  box-shadow:0px -8px 44px -20px rgba(0,0,0,0.3);

}
.biaodaa-g{
  width:110px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:18px;


}
.biaodaa-n{
  height:20px;
  font-size:20px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:13px;
}
.biaodaa-col{
  color:#CEA63F;
}
.biaodaa-w{
  letter-spacing:100px;
}
.biaodaa-p_kip{
  font-size: 28px;
}
.biaodaa-p{
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  margin-top:30px;
  margin-left:32px;
  margin-right:32px;
  font-size:32px;
}
.biaodaa-i_fot{
  margin-top:40px;
}
.biaodaa-i_o{
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
.biaodaa-k_o{
  float:left;
  line-height:60px;
  display: inline-block;
}
.biaodaa-main{
  clear:both;
  overflow:hidden;
  width:100%;
  padding-top:32px;
  border-bottom: 1px solid #ccc;
  margin-left:32px;
  margin-right:32px;
  padding-bottom:23px;
}
.biaodaa-title{
  width:20%;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:32px;
}
.biaodaa-content{
  width:70%;
  font-size:32px;
  line-height:40px;
  margin-left:22px;
}
.biaodaa-title,.biaodaa-content{
  float:left;
  line-height:50px;
  display: inline-block;
}
.biaodaa-main_u{
  clear:both;
  overflow:hidden;
  width:100%;
  padding-top:32px;
  margin-left:32px;
  margin-right:32px;
  padding-bottom:23px;

}
.biaodaa-i_color{
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);

}
.biaodaa-i_po{
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:40px;
}
.biaodaa-i_fot{
  margin-top:20px;
}

.biaodaa-t_ipo{
  margin-bottom:200px;
  font-size: 32px;
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
