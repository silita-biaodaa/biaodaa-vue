<template>
  <el-row>
    <div style="margin-left: 32px;margin-right: 32px;margin-top:40px;"  clss="bdd_news"><span class="bdd_span">{{bddList.title?bddList.title:"--"}}</span></div>
    <div style="margin-left:32px;margin-right: 32px;" class="bdd_r_a">发布日期：{{bddList.opendate?bddList.opendate:"--"}}</div>
    <div class="bdd_r_si">
      <div class="bdd_r_one">
        <div>
          <div style="text-align: center"><img style="width:320px;height:48px;" src="../../assets/share_zhongb_icon_tabel.png" alt=""></div>
          <div style='margin-top:60px;font-size:32px;'>
          <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc">项目金额&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.projSum?bddList.projSum:"--"}}万元</span></div>

          <div class="bdd_s bdd_m "><span  class="bdd_time bdd_let">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.projDq?bddList.projDq:"--"}}</span></div>

          <div class="bdd_s bdd_m "><span class="bdd_time">评标办法&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="bdd_ri">{{bddList.pbMode?bddList.pbMode:"-"}}</span></div></div>
          <div style='margin-top:40px;'><span><img style="margin-left:32px;vertical-align:middle;" src="../../assets/share_zhongb_icon_1.png" alt=""></span><span style="margin-left: 20px;font-size:32px;vertical-align:middle;font-size:32px;" class="bdd_a_row">{{bddList.oneName?bddList.oneName:"--"}}</span>
          <div style="margin-left:110px;font-size:32px;">{{bddList.oneOffer?bddList.oneOffer:"--"}}万元</div>
          </div>
          <div  style='margin-top:40px;font-size:32px;'><span><img style="margin-left:32px;vertical-align:middle;" src="../../assets/share_zhongb_icon_2.png" alt=""></span><span style="margin-left: 20px;font-size:32px;vertical-align:middle;font-size:32px;" class="bdd_a_row">{{bddList.twoName?bddList.twoName:"--"}}</span>
                 <div style="margin-left:110px;">{{bddList.twoOffer?bddList.twoOffer:"--"}}万元</div>
          </div>
   
          <div  style='margin-top:40px;font-size:32px;'><span><img style="margin-left:32px;vertical-align:middle;" src="../../assets/share_zhongb_icon_3.png" alt=""></span><span style="margin-left: 20px;font-size:32px;vertical-align:middle;font-size:32px;" class="bdd_a_row">{{bddList.threeName?bddList.threeName:"--"}}</span>
           <div style="margin-left:110px;" >{{bddList.threeOffer?bddList.threeOffer:"--"}}万元</div>
          </div>
      
        </div>
      </div>
      <div class="bdd_r_footer">共<span class="bdd_size" style="color:#CEA63F;"> {{bddList.block?bddList.block:"--"}} </span> 个标段，打开标大大app可查看更多标段详情</div>

    </div>
    <div class="bdd_r_one bdd_r_foo">
      <div >
        <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc bdd_r_aise">公告原文：</span></div>
        <div class="bdd_s bdd_m "><span>{{bddList.content}}</span></div>
      </div>
    </div>
    

  </el-row>

</template>
<script>
 import shuffling from '../../components/shuffling.vue';
 import {
        getJsonData
    } from "../../api/index.js";
  
  export default {
    name: "allList",
   data () {
      return {
        bddList: {}
      }
    },
     mounted() {
      this.getUp();
    },
    methods: {
      //中标详情
      getUp: function() {
        let dataParam = JSON.stringify({
          'type': '2',
          'source': 'hunan'
        });
        getJsonData("/notice/detail/1860599", dataParam).then(res => {
          console.log(222);
          this.bddList = res.data[0];
  
        });
      }
    }
  }
</script>
</script>
<style s src = "../../css/all/allList.css">
</style>
