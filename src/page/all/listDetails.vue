<template>
  <div class="listDetails">
    <!--头部样式-->
    <div class="details-topback">
      <div v-on:click="$router.back(-1)" class="topback-img">
        <span>
          <img src="../../assets/back.png"/>
        </span>
        <span>返回</span>
      </div>
      <div class="topback-rimg">
        <img src="../../assets/share.png" />
        <img src="../../assets/polygon@1.png" />
      </div>
    </div>
    <div class="emp-box"></div>
    <!--健身室详情-->
    <div class="gymnasiumDetails">
      <div class="gymnasium-title">
        Fitplus运动加(三林店)
      </div>
      <div class="gymnasium-place">
        <span>
          三林地区 私教工作室
        </span>
        <span>
          &lt;100m
        </span>
      </div>
      <div class="gymnasium-star">
        <img src="../../assets/star.png" />
        <img src="../../assets/star.png" />
        <img src="../../assets/star.png" />
        <img src="../../assets/star.png" />
        <img src="../../assets/star.png" />
        <span>消费 ￥211/人</span>
      </div>
      <div class="gymnasium-introduceimg">
        <div>
          <img src="../../assets/gym1.png" />
        </div>
        <div class="center-gym">
          <img src="../../assets/gym2.png" />
        </div>
        <div class="right-gym">
          <img src="../../assets/gym1.png" />
        </div>
        <div class="clear"></div>
      </div>
      <div class="gymaddress-box">
        <img src="../../assets/place.png" />
        <span>三林路1515号</span>
        <img src="../../assets/phone.png" />
      </div>
    </div>
    <!--课程团购-->
    <div class="bulk-box">
      <div class="bulkList">
        <div class="bulkList-img">
          <img src="../../assets/list1.png" />
        </div>
        <div class="bulkList-text">
          <div>单人F+特训课程</div>
          <div>
            <span>￥20</span>
            <span>
              <s>￥250</s>
            </span>
          </div>
        </div>
        <div class="bulkList-details">
          <span>已售40</span>
          <img src="../../assets/rightArrow.png" />
        </div>
        <div class="clear"></div>
      </div>
      <div class="bulkList">
        <div class="bulkList-img">
          <img src="../../assets/list1.png" />
        </div>
        <div class="bulkList-text">
          <div>单人F+特训课程</div>
          <div>
            <span>￥20</span>
            <span>
              <s>￥250</s>
            </span>
          </div>
        </div>
        <div class="bulkList-details">
          <span>已售40</span>
          <img src="../../assets/rightArrow.png" />
        </div>
        <div class="clear"></div>
      </div>
      <div class="hidden-list">
        <span>查看其他4个团购</span>
        <img src="../../assets/bottomArrow.png" />
      </div>
    </div>
    <!--网页评论-->
    <div class="comments-box">
      <div class="comments-title">
        <span>网页评论（120）</span>
        <div>
          <img src="../../assets/rightArrow.png" />
        </div>
      </div>
      <div class="comments-details">
        <div class="comments-portrait">
          <img src="../../assets/headPortrait.png" />
        </div>
        <div class="comments-text">
          <div class="comments-name">
            <span>露露</span>
            <span>1分钟前</span>
          </div>
          <div class="comments-score">
            <span>打分</span>
            <img src="../../assets/star.png" />
            <img src="../../assets/star.png" />
            <img src="../../assets/star.png" />
            <img src="../../assets/star.png" />
            <img src="../../assets/star.png" />
          </div>
          <div class="comments-contert">
            先前有去体验过这家店的单人F课程，老师是一位美女教练，特别友好，再她的带领下，感觉健身是一件特别有意思的事情，我立马去买了健身年卡，以此鼓励自己坚持锻炼。
          </div>
          <div class="comments-img">
            <div>
              <img src="../../assets/gym1.png" />
            </div>
            <div class="center-gym">
              <img src="../../assets/gym2.png" />
            </div>
            <div class="right-gym">
              <img src="../../assets/gym1.png" />
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!--底部定位显示-->
    <div class="foot-write">
      <img src="../../assets/write.png" />
      <span>写评论</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'listDetails',
  data () {
    return {}
  }
}
</script>
<style scoped src = "../../css/all/listDetails.css">

</style>
