<template>
  <div class="searchList-box">
    <div class="searchList-smbox">
      <div class="searchList-img-box">
        <img src="../assets/list-5.png" />
      </div>
      <div class="searchList-text-box">
        <div>Fitplus运动加</div>
        <div class="searchList-place">
          三林地区 私教工作室
        </div>
        <div class="star-img-box">
          <img src="../assets/star.png" />
          <img src="../assets/star.png" />
          <img src="../assets/star.png" />
          <img src="../assets/star.png" />
          <img src="../assets/star.png" />
          <span>￥211/人</span>
        </div>
      </div>
      <div class="clear"></div>
      <div class="searchList-float">&lt;100m</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style scoped>
.searchList-box{
  width:100%;
  box-sizing:border-box;
  padding:16px 16px;
  background-color: #29303a;
  
}
.searchList-smbox{
  width:100%;
  box-sizing:border-box;
  border-bottom:1px solid #343a42;
  padding:0px 8px;
  position: relative;
}
.searchList-img-box{
  float:left;
  width:170px;/*px*/
  height:130px;/*px*/
}
.searchList-img-box>img{
  width:100%;
  height:100%;
}
.searchList-text-box{
  float:left;
  margin-left:28px;
}
.searchList-text-box>div:first-child{
  font-size: 28px;/*px*/
  color:#c4c5cc;
}
.searchList-place{
  font-size: 22px;/*px*/
  color:#7b7c80;
  margin-top:12px;/*px*/
  margin-bottom:12px;/*px*/
}
.star-img-box>img{
  height:26px;/*px*/
  margin-right:6px;
}
.star-img-box>span{
  font-size:22px;/*px*/
  color:#7b7c80;
}
.searchList-float{
  position: absolute;
  right:8px;
  top:0px;
  color:#7b7c80;
}
.clear{
  clear:both;
}
</style>
