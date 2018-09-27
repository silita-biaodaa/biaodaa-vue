<template>
  <div>
    <div id="bdd_app">
    <div class="bdd_i_o" style="margin-top:20px;" ><span class="bdd_k_o">{{comBaseData?comBaseData.comName:"-"}}</span></div>
    <div class="bdd_c"><span class="bdd_a">{{comBaseData.legalPerson?comBaseData.legalPerson:"--"}}</span><span class="bdd_b">{{comBaseData.regisCapital?comBaseData.regisCapital:"--"}}</span></div>
    <div class="bdd_plone">联系信息</div>
    <div class="bdd_v"><span class="bdd_pl">联系电话</span><span class="bdd_k">{{comBaseData.phone?comBaseData.phone:"-"|phoneFilter}}</span></div>
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
    <div class="bdd_i_fot"></div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
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

     <!-- IOS -->
  <div id="IOSGuide" class="col-xs-12 col-sm-12" style="display: none">
    <img id="IOSGuideImg" src="../assets/ios_guide.png">
  </div>

  <!-- andriod -->
  <div id="andriodGuide" class="col-xs-12 col-sm-12  hidden-lg hidden-md img-responsive" style="display: none">
    <img id="andriodGuideImg" src="../assets/andriod_guide.png">
  </div>

  </div>
</template>

<script>
  import shuffling from '../components/shuffling.vue';
  import {
    getJsonData
  } from "../api/index.js";

  export default {
    name: 'index',
    data() {
      return {
        id:'',
        comBaseData: {},
        qualityList: [],
        dataList:[],
        bddList: {},
        shortComRange: '',
        longComRange: '',
        isLongText: false,
        isShowAllBtn: false,
        textBtn: '展开全部'
      }
    },
    mounted() {
      this.getParams();
      this.gocollection();
      this.getSecondData();
      this.getUp();
    },
    methods: {
      getParams:function(){
        console.log(5555);
         let comId = this.$route.params.comId;
         let openAppUrl = "com.yaobang.biaodada://?type=3&id=" + comId ;
         localStorage.setItem("openAppUrl",openAppUrl);
      },
      gocollection: function() {
       let comId =this.$route.params.comId;
        getJsonData("/company/"+comId).then(res => {
          let baseData = res.data;
          this.comBaseData = baseData;
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
            this.textBtn = '展开全部';
          }
        } else {
          this.shortComRange = longComRange;
          this.textBtn = '收起';
        }
        this.isLongText = !isLongText;

      },
      //资质信息接口
      getSecondData: function() {
        let comId=this.$route.params.comId;
        getJsonData("company/qual/"+comId).then(res => {
          console.log(res);
          this.qualityList = res.data[0].list;
          let dataArr = res.data;
        let dataList = new Array();
        if(dataArr&&dataArr.length>0){
          for(let i=0;i<dataArr.length;i++){
            let dataItem = dataArr[i];
            let dataItemList = dataItem.list;
            if(dataItemList&&dataItemList.length>0){
              for(let j=0;j<dataItemList.length;j++){
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
        let comId=this.$route.params.comId;
        let dataParam = JSON.stringify({
              'comId':comId
        });
        getJsonData("/company/shareTotal", dataParam).then(res => {
          console.log(666);
          this.bddList = res.data;

        });
      },

    },

  }
</script>

<style src="../css/index.css">

</style>
