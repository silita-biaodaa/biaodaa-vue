<template>
  <div>
    <div style="margin-left:36px;margin-right:28px;margin-top:40px;" clss="bdd_news"><span class="bdd_span">{{comBaseData?comBaseData.comName:"-"}}</span></div>
    <div class="bdd_c"><span class="bdd_a">{{comBaseData.legalPerson?comBaseData.legalPerson:"--"}}</span><span class="bdd_b">{{comBaseData.regisCapital?comBaseData.regisCapital:"--"}}</span></div>
    <div class="bdd_plone">联系电话</div>
    <div class="bdd_v"><span class="bdd_pl">联系电话</span><span class="bdd_k">{{comBaseData.phone?comBaseData.phone:"-"|phoneFilter}}</span></div>
    <div class="bdd_hr"></div>
    <div class="bdd_v"><span class="bdd_pl">官网地址</span><span class="bdd_k">{{comBaseData.comUrl?comBaseData.comUrl:"-"}}</span></div>
    <div class="bdd_hr"></div>
    <div class="bdd_v"><span class="bdd_pl">邮箱地址</span><span class="bdd_k">{{comBaseData.email?comBaseData.email:"-"}}</span></div>
    <div class="bdd_hr"></div>
    <div style="width: 100%;overflow: hidden">
      <div class="bdd_s "><span class="bdd_pl">公司地址</span>
        <div style='margin-right:32px;' class="bdd_o">{{comBaseData.comAddress?comBaseData.comAddress:"-"}}</div>
      </div>
    </div>
    <div class="bdd_d"></div>
    <div  style='margin-top:60px;'>
    <div><span class='bdd_plone'>资质信息</span><span style='font-size:28px;'>({{qualityList.length}})</span>
      </div>
      </div>
    <div class="bdd_zi" v-for="item in qualityList" :key="item.pkid">{{item.qualName}} </div>
    <div class="bdd_plone">基本信息</div>
    <div class="bdd_ji">
      <div class="bdd_s bdd_color"><span  class="bdd_time ">注&nbsp;册&nbsp;号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="bdd_ri">{{comBaseData.orgCode?comBaseData.orgCode:"-"}}</span></div>
       <div style="width: 100%;overflow: hidden">
      <div class="bdd_s "><span class="bdd_time bdd_spc">企业类型</span>
        <div class="bdd_o">{{comBaseData.economicType?comBaseData.economicType:"-"}}</div>
      </div>
    </div>
      <div class="bdd_s bdd_color"><span class="bdd_time">安许证号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{comBaseData.certNo?comBaseData.certNo:"--"}}</span></div>
      <div class="bdd_s "><span  class="bdd_time ">有&nbsp;效&nbsp;期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="bdd_ri">{{comBaseData.validDate?comBaseData.validDate:"-"}}</span></div>
      <div class="bdd_color" style="width: 100%;overflow: hidden;padding-bottom: 50px;">
        <div class="bdd_s "><span class="bdd_time">经营范围</span>
          <div class="bdd_o">{{shortComRange?shortComRange:"-"}}<button class="bdd_h" v-show="isShowAllBtn" @click="showAll()">{{textBtn}}</button></div>
        </div>
      </div>
    </div>
    <div class="bdd_plone">分支机构</div>
    <div class="bdd_f">该公司有<span class="bdd_size bdd_col">{{bddList.branchCompanyTotal?bddList.branchCompanyTotal:"-"}} </span>家分支机构，打开标大大app可查看详情</div>
    <div class="bdd_plone">人员信息</div>
    <div class="bdd_f">该公司有<span class="bdd_size bdd_col"> {{bddList.personTotal?bddList.personTotal:"-" }}</span>家人员信息，打开标大大app可查看详情</div>
    <div class="bdd_plone">业绩信息</div>
    <div style="margin-bottom: 64px" class="bdd_f">该公司有<span class="bdd_size" style="color:#CEA63F "> {{bddList.projectTotal?bddList.projectTotal:'-'}} </span>家业绩信息，打开标大大app可查看详情</div>

    <!-- <div class="bdd_footer">
      <div class="bdd_one"> <img class="bdd_img" src="../assets/logo.png" /> </div>
      <div class="bdd_two">
        <div class="bdd_g">标大大</div>
        <div class="bdd_n">打开App了解更多资讯</div>
      </div>
      <div class="bdd_foo"><span v-on:click='btn' class="bdd_x">立即打开</span></div>
    </div> -->
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
        comBaseData: {},
        qualityList: [],
        bddList: {},
        shortComRange: '',
        longComRange: '',
        isLongText: false,
        isShowAllBtn: false,
        textBtn:'展开全部'
      }
    },
    mounted() {
      this.gocollection();
      this.getSecondData();
      this.getUp();
    },
    methods: {
      gocollection: function() {
        getJsonData("/company/d82be405069001616cefd448d5bf83a1").then(res => {
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
            this.textBtn='展开全部';
          }
        } else {
          this.shortComRange = longComRange;
           this.textBtn='收起';
        }
        this.isLongText = !isLongText;

      },
      //资质信息接口
      getSecondData: function() {
        getJsonData("company/qual/d82be405069001616cefd448d5bf83a1").then(res => {
          console.log(res);
          this.qualityList = res.data[0].list;
        });
      },
      // 分支机构接口
      getUp: function() {
        let dataParam = JSON.stringify({
          comId: "5d86f82e66452e2db067e42ca327c629"
        });
        getJsonData("/company/shareTotal", dataParam).then(res => {
          console.log(res);
          this.bddList = res.data;

        });
      },
      btn: function() {

      }
    },

  }
</script>

<style src="../css/index.css">

</style>
