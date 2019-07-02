<template>
  <div class="share-container" >
   
    <div id="bdd_app" class="share-body">
    <div class="bdd_p" style="margin-top:20px;"><span class="bdd_r_g">{{bddList.title?bddList.title:"-"}}</span></div>
    <div class="bdd_r_a">发布日期：{{bddList.opendate?bddList.opendate:"-"}}</div>
    <div class="bdd_r_si">
      <div class="bdd_r_one">
        <div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">项目金额</span><span class="bdd_ri">{{bddList.projSum?bddList.projSum+"万元":"-"}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_let">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区</span><span class="bdd_ri">{{bddList.projDq?bddList.projDq:"-"}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time">评标办法</span><span class="bdd_ri">{{bddList.pbMode?bddList.pbMode:"-"}}</span></div>
          <div class="bdd_main_u">
            <span class="bdd_title bdd_t_yo">资质要求</span>
            <span class="bdd_content bdd_t_conter">{{bddList.zzRank?bddList.zzRank:"-"}}</span>
          </div>
        </div>
      </div>
      <div class="bdd_r_text">更多详细信息</div>
      <div class="bdd_r_one">
        <div>
          <div class="bdd_v-img"><img class="bdd_k_img" src="../../assets/bdd_one.png" /></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">报名截止</span><span class="bdd_ri">{{bddList.bmEndDate?bddList.bmEndDate:"-"}}&nbsp;{{bmEndWeek}}&nbsp;{{bddList.bmEndTime?bddList.bmEndTime:"-"}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">报名地址</span><span class="bdd_ri">{{bddList.bmSite?bddList.bmSite:"&#45;&#45;"}}</span></div>
        </div>
      </div>
      <div style="padding-bottom: 20px;" class="bdd_r_one">
        <div>
          <div class="bdd_v-img"><img class="bdd_k_img" src="../../assets/bdd_tow.png" /></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">保证金截止</span><span class="bdd_ri">{{bddList.tbAssureEndDate?bddList.tbAssureEndDate:"-"}}&nbsp;{{tbAssureEndWeek}}&nbsp;{{bddList.tbAssureEndTime?bddList.tbAssureEndTime:""}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额</span><span class="bdd_ri">{{bddList.tbAssureSum?bddList.tbAssureSum+"万元":"-"}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">递交方式</span><span class="bdd_ri">保证金</span></div>
        </div>
      </div>
      <div class="bdd_r_one">
        <div>
          <div class="bdd_v-img"><img class="bdd_k_img" src="../../assets/bdd_three.png" /></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">开标截止</span><span class="bdd_ri">{{bddList.kbDate?bddList.kbDate:""}}&nbsp;{{kbWeek}}&nbsp;{{bddList.kbTime?bddList.kbTime:""}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">开标人员</span><span class="bdd_ri">{{bddList.kbStaffAsk?bddList.kbStaffAsk:"-"}}</span></div>
          <div class="bdd_main_u">
            <span class="bdd_title bdd_t_yo">开标地址</span>
            <span class="bdd_content bdd_t_conter">{{bddList.kbSite?bddList.kbSite:"-"}}</span>
          </div>
        </div>
      </div>
      <div class="bdd_r_footer">共 <span class="bdd_size" style="color:#CEA63F;"> {{bdNum}} </span> 个标段，打开标大大app可查看更多详情</div>

    </div>
    <div class="bdd_r_one bdd_r_foo">
      <div>
        <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc bdd_r_aise">公告原文：</span></div>
        <div  class="bdd_s bdd_m bdd_t_ipo" v-html="bddList.content"> </div>
      </div>
    </div>
    <div class="bdd_i_fot"></div>
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
  import shuffling from '../../components/shuffling.vue';
  import {
    getJsonData
  } from "../../api/index.js";

  export default {
    name: "tenders",
    data() {
      return {
        bdNum:0,
        bddList: {},
        bmEndWeek: '',
        tbAssureEndWeek: '',
        kbWeek: ''
      }
    },
    mounted() {
      this.getUp();
    },
    methods: {
      // 招标详情
      getUp: function() {
        let id = this.$route.params.id;
        let type = this.$route.params.type;
           let source = '';
        if(this.$route.params.source == 'null') {
           source = 'hunan'
        } else {
           source = this.$route.params.source
        }

        let openAppUrl = "com.yaobang.biaodada://?type="+type+"&id="+id+"&source="+source;
        localStorage.setItem("openAppUrl",openAppUrl);
        let dataParam = JSON.stringify({
          'type': '0',
          'source': source
        });
//        let id = this.$route.params.id;
        getJsonData("/notice/detail/" + id, dataParam).then(res => {
        if(res.data&&res.data.length>0) {
          let bddList = res.data[0];
          this.bdNum = res.data.length;
          this.bddList = bddList;
          let content = bddList.content;
          let bmEndWeek = this.getWeekDay(bddList.bmEndDate);
          let tbAssureEndWeek = this.getWeekDay(bddList.tbAssureEndDate);
          let kbWeek = this.getWeekDay(bddList.kbDate);
          this.bmEndWeek = bmEndWeek;
          this.tbAssureEndWeek = tbAssureEndWeek;
          this.kbWeek = kbWeek;
          this.content = content.replace(content ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#39;/g, "\'");
        }
        });

      },
      getWeekDay: function(dateStr) {
        if (dateStr) {
          let dayNum = new Date(dateStr).getDay();
          if (dayNum) {
            let weekDayStr = "星期" + "天一二三四五六 ".charAt(dayNum);
            return weekDayStr;
          }
        }
        return "";
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
.bdd_r_a{
  margin-top:30px;
  height:24px;
  font-size:24px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:24px;
  margin-left:40px;
}
.bdd_r_si{
  width: 100%;
  margin-bottom:10px;
  background-color: #F3F4F5;
  margin-top:30px;
  overflow: hidden;
}
.bdd_r_one{
  width: 94%;
  background:rgba(255,255,255,1);
  margin: 32px auto;
  padding-bottom:32px;
}
.bdd_m{
 padding: 15px 30px;
}
.bdd_r_text{
  height:24px;
  font-size:24px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:24px;
  margin-left:32px;
}
.bdd_r_footer{
  height:28px;
  font-size:28px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:32px;
  margin-left:32px;
  margin-bottom:32px;
}
.bdd_r_foo{
  width: 100%;
  height: 100%;
}
.bdd_r_aise{
  width:180px;
  height:36px;
  font-size:36px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:36px;

 }
.bdd_r_sever{
  width:100%;
  text-align: center;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:32px;
  margin-right:5px;

}
.bdd_size{
  font-size: 32px;
}
.bdd_span{
  font-size:36px;
  font-family:PingFangSC-Medium;
  color:rgba(51,51,51,1);
  margin-left:32px;
  margin-top:32px;

}
.bdd_ri{
  margin-left:30px;
}
.bdd_v-img{
  position: relative;
}
.bdd_k_img{
  width:24px;
  height:24px;
  position:absolute;
  top:0px;
  left:0px;
}
.bdd_r_head{
  padding-left:32px;
  padding-right:32px;
  margin-top:20px;
  text-align:left;

}
.bdd_p{
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
.bdd_r_g{
  float:left;
  line-height:60px;
  display: inline-block;
}
.bdd_i_fot{
  margin-top:200px;
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

.bdd_content{
  width:70%;
  font-size:32px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  line-height:40px;
  margin-left:18px;

}

.bdd_t_yo{
  width:20%;
  height:32px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:32px;
}
.bdd_t_conter{
  color:rgba(102,102,102,1);
}

</style>
