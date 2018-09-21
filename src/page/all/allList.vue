<template>
  <div>
    <div class="bdd_r_u" style="margin-top:20px;" ><span class="bdd_span_po">{{bddList.title?bddList.title:"--"}}</span></div>
    <div  class="bdd_r_a">发布日期：{{bddList.opendate?bddList.opendate:"--"}}</div>
    <div class="bdd_r_si">
      <div class="bdd_r_one">
        <div>
          <div class="bdd_r_ta"><img class="bdd_r_img" src="../../assets/share_zhongb_icon_tabel.png" alt=""></div>
          <div class="bdd_r_e"><span class="bdd_r_x">项目金额</span><span class="bdd_r_m">{{bddList.projSum?bddList.projSum:"--"}}万元</span></div>
          <div><span  class="bdd_r_x">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区</span><span class="bdd_r_m">{{bddList.projDq?bddList.projDq:"--"}}</span></div>
          <div ><span class="bdd_r_x">评标办法</span><span class="bdd_r_m">{{bddList.pbMode?bddList.pbMode:"-"}}</span></div></div>
          <div class="bdd_r_v"><span><img class="bdd_p_img"  src="../../assets/share_zhongb_icon_1.png" alt=""></span><span class="bdd_p_ki">{{bddList.oneName?bddList.oneName:"--"}}</span>
          <div class="bdd_p_o">{{bddList.oneOffer?bddList.oneOffer:"--"}}万元</div>
          </div>
          <div class="bdd_r_v" ><span><img  class="bdd_p_img" src="../../assets/share_zhongb_icon_2.png" alt=""></span><span class="bdd_p_ki">{{bddList.twoName?bddList.twoName:"--"}}</span>
                 <div  class="bdd_p_o">{{bddList.twoOffer?bddList.twoOffer:"--"}}万元</div>
          </div>

          <div class="bdd_r_v" ><span><img   class="bdd_p_img" src="../../assets/share_zhongb_icon_3.png" alt=""></span><span class="bdd_p_ki">{{bddList.threeName?bddList.threeName:"--"}}</span>
           <div  class="bdd_p_o">{{bddList.threeOffer?bddList.threeOffer:"--"}}万元</div>
          </div>
      </div>
      <div class="bdd_r_footer">共<span class="bdd_size" style="color:#CEA63F;"> {{bddList.block?bddList.block:"--"}} </span> 个标段，打开标大大app可查看更多标段详情</div>

    </div>
    <div class="bdd_r_one bdd_r_foo">
      <div >
        <div class="bdd_s bdd_m "><span class="bdd_time bdd_spc bdd_r_aise">公告原文：</span></div>
        <div class="bdd_s bdd_m "><span v-html="bddList.content"></span></div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="bdd_one">
        <img class="bdd_img" src="../../assets/logo.png" /> </div>
      <div class="bdd_two">
        <div class="bdd_g">标大大</div>
        <div class="bdd_n">打开App了解更多资讯</div>
      </div>
      <div class="bdd_foo">
        <div onclick='openApp()' class="bdd_x">立即打开</div>
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

<style  src = "../../css/all/allList.css">
</style>
