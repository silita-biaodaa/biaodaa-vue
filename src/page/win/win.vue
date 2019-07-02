<template>
  <div class="share-container" >
    <div id="bdd_app" class="share-body" >
      <div class="bdd_p_header">查行贿，查围标串标，就上标大大</div>
      <div class="bdd_r_u" style="margin-top:20px;"><span class="bdd_span_po">{{bddList.title?bddList.title:"--"}}</span></div>
      <div class="bdd_r_a">发布日期：{{bddList.opendate?bddList.opendate:"--"}}</div>
      <div class="bdd_r_si">
        <div class="bdd_r_one">
          <div>
            <div class="bdd_r_ta"><img class="bdd_r_img" src="../../assets/share_zhongb_icon_tabel.png" alt=""></div>
            <div class="bdd_r_e"><span class="bdd_r_x">项目金额</span><span class="bdd_r_m">{{bddList.projSum?bddList.projSum+"万元":"-"}}</span></div>
            <div><span class="bdd_r_x">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区</span><span class="bdd_r_m">{{bddList.projDq?bddList.projDq:"-"}}</span></div>
            <div><span class="bdd_r_x">评标办法</span><span class="bdd_r_m">{{bddList.pbMode?bddList.pbMode:"-"}}</span></div>
          </div>
          <div class="bdd_r_v"><span><img class="bdd_p_img"  src="../../assets/share_zhongb_icon_1.png" alt=""></span><span class="bdd_p_ki">{{bddList.oneName?bddList.oneName:"-"}}</span>
            <div class="bdd_p_o">{{bddList.oneOffer?bddList.oneOffer+"万元":"-"}}<span class="bdd_w_yi">{{bddList.oneLaw?"疑似风险("+bddList.oneLaw+")":""}}</span></div>
          </div>
          <div class="bdd_r_v"><span><img  class="bdd_p_img" src="../../assets/share_zhongb_icon_2.png" alt=""></span><span class="bdd_p_ki">{{bddList.twoName?bddList.twoName:"-"}}</span>
            <div class="bdd_p_o">{{bddList.twoOffer?bddList.twoOffer+"万元":"-"}}<span class="bdd_w_yi">{{bddList.twoLaw?"疑似风险("+bddList.twoLaw+")":""}}</span></div>
          </div>

          <div class="bdd_r_v"><span><img   class="bdd_p_img" src="../../assets/share_zhongb_icon_3.png" alt=""></span><span class="bdd_p_ki">{{bddList.threeName?bddList.threeName:"-"}}</span>
            <div class="bdd_p_o">{{bddList.threeOffer?bddList.threeOffer+"万元":"-"}}<span class="bdd_w_yi">{{bddList.threeLaw?"疑似风险("+bddList.threeLaw+")":""}}</span></div>
          </div>
        </div>
        <div class="bdd_r_footer">共<span class="bdd_size" style="color:#CEA63F;"> {{bdNum}}</span> 个标段，打开标大大app可查看更多详情</div>

      </div>
      <div class="bdd_r_one bdd_r_foo">
        <div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc bdd_r_aise">公告原文：</span></div>
          <div class="bdd_s bdd_m bdd_p_jo" v-html="bddList.content"></div>
        </div>
      </div>
      <div class="bdd_i_fot"></div>

    </div>
    <!-- IOS -->
    <div id="IOSGuide" class="col-xs-12 col-sm-12" style="display: none">
      <img id="IOSGuideImg" src="../../assets/ios_guide.png">
    </div>

    <!-- andriod -->
    <div id="andriodGuide" class="col-xs-12 col-sm-12  hidden-lg hidden-md img-responsive" style="display: none">
      <img id="andriodGuideImg" src="../../assets/andriod_guide.png">
    </div>
    <nav id="bdd_nav" class="navbar navbar-default navbar-fixed-bottom">
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
  </div>
</template>
<script>
  import {
    getJsonData
  } from "../../api/index.js";
  export default {
    name: "win",
    data() {
      return {
        bddList: {},
        bdNum: 0
      }
    },
    mounted() {
      this.getUp();
    },
    methods: {
      //中标详情
      getUp: function() {
        let source = '';
         if(this.$route.params.source == 'null') {
           source = 'hunan'
          //  console.log(116);
        } else {
           source = this.$route.params.source
          //  console.log(119);
        }

        let id = this.$route.params.id;
        let type = this.$route.params.type;
        let dataParam = JSON.stringify({
          'type': 2,
          'source': source
        });
        let openAppUrl = "com.yaobang.biaodada://?type=" + type + "&id=" + id + "&source=" + source;
        localStorage.setItem("openAppUrl",openAppUrl);
        getJsonData("/notice/detail/" + id, dataParam).then(res => {
          console.log(222);
          let dataArr = res.data;
          if (dataArr && dataArr.length > 0) {
            this.bddList = dataArr[0];
            let bdNum = dataArr.length;
            this.bdNum = bdNum;
          }
        });
      }
    }
  }
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
  overflow: auto;
}

.share-container{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
.share-body{
  height:calc(100%-120px);
  overflow-x: hidden;
  overflow-y: auto;
}
.bdd_a_row{
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:23px;
  margin-left:50px;
}
 .bdd_r_ta{
   text-align: center;
 }
.bdd_r_img{
  width: 320px;
  height: 48px;
}


.bdd_p_img{
  width: 40px;
  height: 40px;
  margin-left:30px;
}
.bdd_p_ki{
  width:416px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:32px;
  margin-left:30px;
  vertical-align: middle;
}
.bdd_p_o{
  height:28px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:32px;
  margin-left:100px;
  margin-top:16px;
}
.bdd_r_h{
  margin-top:32px;
}
.bdd_r_x{
  width:128px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:60px;
  padding-left:32px;
}
.bdd_r_m{
  width:188px;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:60px;
  padding-left:48px;
}
.bdd_r_e{
  margin-top:32px;
}
.bdd_r_v{
  margin-top:24px;
}
.bdd_span{
  padding-left:32px;
  padding-right:32px;
}
.bdd_r_u{
  clear:both;
  overflow:hidden;
  width: 90%;
  font-size:36px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-right:32px;
}
.bdd_span_po{
  float:left;
  line-height:60px;
  display: inline-block;
}
.bdd_i_fot{
  margin-top:200px;
}
.bdd_w_yi{
  margin-left:40px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(212,97,93,1);
  line-height:28px;
}
.bdd_p_header{
  margin-left:32px;
  margin-right:32px;
  color: red;
  text-align: center;
  margin-top:40px;
  font-size: 32px;
}
.bdd_p_jo{
  padding-bottom:200px;
}

</style>
