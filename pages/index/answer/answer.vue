<template>
  <view class="bg">
    <div class="tt">今日小课堂</div>
    <div class="qq">
      水分摄入量需求取决于体重吗？
    </div>
    <div class="ii">
      <image :src="img1" mode="aspectFill"></image>
    </div>
    <liu-progressbar :progress="68" dsColor="#ff763f" color="#FFFFFF" :height="'60rpx'" />
    <div class="aa">
      <p>答案解析</p>
      <p class="c">多喝水不代表盲目的喝水，一定要注意有健康合理的喝水量，水分的摄取量根据每个人的不同状况也是不同的。基本上，一般人每天的水分摄取量建议为体重的30~70倍。</p>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        img1:'https://n.sinaimg.cn/sinakd20201019s/160/w480h480/20201019/2eae-kaqzmiw9159106.gif',
      };
    }
  }
</script>

<style lang="scss">
.bg{
  height: 1200rpx;
  padding: 30rpx;
  padding-top: 40rpx;
  background-color: white;
  .tt{
    font-size: 30rpx;
    font-weight: 800;
    padding-bottom: 20rpx;
    margin-bottom: 40rpx;
    border-bottom: 1rpx solid black;
  }
  .qq{
    font-size: 40rpx;
    font-weight: 800;
  }
  .ii{
    width: 100%;
    height: 40%;
    margin-top: 20rpx;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .aa{
    height: 400rpx;
    padding: 20rpx;
    padding-top: 30rpx;
    margin-top: 40rpx;
    background-color: #f5f5f5;
    .c{
      margin-top: 10rpx;
      color: grey;
    }
  }
}
</style>
