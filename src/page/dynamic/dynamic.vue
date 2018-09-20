<template>
  <div>
    <div style="margin-left:40px;margin-right: 32px;margin-top:40px;" clss="bdd_news"><span class="bdd_span">{{bddList.title?bddList.title:"-"}}</span></div>
    <div style="margin-left:40px;margin-right: 32px;" class="bdd_r_a">发布日期：{{bddList.opendate?bddList.opendate:"-"}}</div>
    <div class="bdd_r_si">
      <div class="bdd_r_one">
        <div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">项目金额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.projSum?bddList.projSum:"-"}}万元</span></div>
  
          <div class="bdd_s bdd_m "><span  class="bdd_time bdd_let">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.projDq?bddList.projDq:"-"}}</span></div>
  
          <div class="bdd_s bdd_m "><span class="bdd_time">评标办法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.pbMode?bddList.pbMode:"-"}}</span></div>
  
          <div style="width: 100%;overflow: hidden">
            <div class="bdd_s bdd_m"><span class="bdd_time">资质要求</span>
              <div class=" bdd_o"> {{bddList.zzRank?bddList.zzRank:"-"}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bdd_r_text">更多详细信息</div>
      <div class="bdd_r_one">
        <div>
          <div style="position:relative"><img style="width:24px;height:24px;position:absolute;top:-12pxpx;left:0" class="bdd_img" src="../../assets/bdd_one.png" /></div>
  
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">报名截止&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri"> {{bddList.bmEndDate?bddList.bmEndDate:"-"}}</span></div>
  
          <div style="width: 100%;overflow: hidden">
            <div class="bdd_s bdd_m"><span class="bdd_time">报名地址</span>
              <div class=" bdd_o">{{bddList.bmSite?bddList.bmSite:"--"}}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="padding-bottom: 20px;" class="bdd_r_one">
        <div>
          <div style="position:relative"><img style="width:24px;height:24px;position:absolute;top:-12px;left:0" class="bdd_img" src="../../assets/bdd_tow.png" /></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">保证金截止&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.tbAssureEndDate?bddList.tbAssureEndDate:"-"}}{{bddList.tbAssureEndTime?bddList.tbAssureEndTime:"-"}}</span></div>
          <div class="bdd_s bdd_m "><span  class="bdd_time bdd_spc">金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.tbAssureSum?bddList.tbAssureSum:"-"}}万元</span></div>
          <div style="width: 100%;overflow: hidden;">
            <div class="bdd_s bdd_m"><span class="bdd_time">递交方式</span>
              <div class=" bdd_o">保证金</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bdd_r_one">
        <div>
          <div style="position:relative"><img style="width:24px;height:24px;position:absolute;top:-12px; left:0" class="bdd_img" src="../../assets/bdd_three.png" /></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">开标截止&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.kbDate?bddList.kbDate:"-"}}{{bddList.kbTime?bddList.kbTime:"-"}}</span></div>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">开标人员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.kbStaffAsk?bddList.kbStaffAsk:"-"}}</span></div>
          <div style="width: 100%;overflow: hidden">
            <div class="bdd_s bdd_m"><span class="bdd_time">开标地址</span>
              <div class=" bdd_o">{{bddList.kbSite?bddList.kbSite:"-"}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bdd_r_footer">共 <span class="bdd_size" style="color:#CEA63F;"> {{bddList.block?bddList.block:"--"}} </span> 个标段，打开标大大app可查看更多标段详情</div>
  
    </div>
    <div class="bdd_r_one bdd_r_foo">
      <div>
        <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc bdd_r_aise">公告原文：</span></div>
        <div class="bdd_s bdd_m "><span>{{bddList.content}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
 import shuffling from '../../components/shuffling.vue';
 import {
        getJsonData
    } from "../../api/index.js";
  
  export default {
    name: "dynamic",
   data () {
      return {
        bddList: {}
      }
    },
     mounted() {
      this.getUp();
    },
    methods: {
      // 招标详情
      getUp: function() {
        let dataParam = JSON.stringify({
          'type': '0',
          'source': 'hunan'
        });
        getJsonData("/notice/detail/1857865", dataParam).then(res => {
          console.log(111);
          this.bddList = res.data[0];
  
        });
      }
    }
  }
</script>

<style s src = "../../css/dynamic/dynamic.css">
  
</style>
