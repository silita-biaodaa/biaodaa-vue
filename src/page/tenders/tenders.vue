<template>
  <div>
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
        <div  class=" bdd_t_jo "><span  v-html="bddList.content"></span></div>
      </div>
    </div>
    <div class="bdd_i_fot"></div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
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
      this.getParams();
      this.getUp();

    },
    methods: {
      getParams: function() {
        console.log(222)
        let id = this.$route.params.id;
        let type = this.$route.params.type;
        let source = this.$route.params.source;
        if (!id) {
          localStorage.setItem("id", id);
        }
        if (!type) {
          localStorage.setItem("type", type);
        }
        if (!source) {
          localStorage.setItem("source", source);
        }
        let openAppUrl = "com.yaobang.biaodada://?type="+type+"&id=" + id+"&source="+source;
         localStorage.setItem("openAppUrl",openAppUrl);
      },
      // 招标详情
      getUp: function() {
        let that = this;
        let dataParam = JSON.stringify({
          'type': '0',
          'source': 'hunan'
        });
        let id = this.$route.params.id;
        getJsonData("/notice/detail/" + id, dataParam).then(res => {
          console.log(111);
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

<style src = "../../css/tenders/tenders.css">

</style>
