<template>
  <view class="bg _myTheme">
    <div class="uniIcon" @click="">
      <uni-icons type="gear-filled" size="30" color=" "></uni-icons>
    </div>
    <view class="user" @click="gotoRevice()">
      <image :src="img" mode="aspectFill"></image>
    </view>
    <view class="userName">
      {{username?username:'未登录'}}
    </view>
    <div class="box ">
      <div class="littleBox message _myTheme1" @click="">
        <view class="icon">
          <uni-icons type="chatbubble" size="50" color="black"></uni-icons>
        </view>
        消息
      </div>
      <div class="littleBox _myTheme1" @click="">
        <view class="icon">
          <uni-icons type="compose" size="50" color="black"></uni-icons>
        </view>
        我的博客
      </div>
      <div class="littleBox _myTheme1" @click="">
        <view class="icon">
          <uni-icons type="star-filled" size="50" color="black"></uni-icons>
        </view>
        收藏
      </div>
      <div class="littleBox task _myTheme1" @click="">
        <view class="icon">
          <uni-icons type="list" size="50" color="black"></uni-icons>
        </view>
        任务栏
      </div>
    </div>
    <div class="login" @click="gotoLogin()" v-if="!token">
      登录
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        token:'',
        img:'https://img.zcool.cn/community/01629f5b10ec78a801202e6090eb63.png@1280w_1l_2o_100sh.png',
        username:'',
      };
    },
    onLoad(){
      this.getToken()
      this.getUsername()
    },
    methods:{
      getUsername(){
        this.username=wx.getStorageSync("username")
      },
      getToken(){
        console.log('1111');
        this.token=wx.getStorageSync("token")
      },
      gotoRevice(){
        uni.navigateTo({
          url:'./revise/revise'
        })
      },
      gotoLogin(){
        uni.navigateTo({
          url:'../login/login'
        })
        
      }
    }
  }
</script>

<style lang="scss">
.bg{
    height: 1180rpx;
    padding-top: 50rpx;
    text-align: center;
    // background-color: #f2f2f2;
    .uniIcon{
      position: relative;
      top: 0rpx;
      left: 630rpx;
      width: 90rpx;
      height: 80rpx;
    }
    .user{
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 150rpx;
      height: 150rpx;
      margin-left: 300rpx;
      border: 5rpx solid #d3d8d2;
      border-radius: 150rpx;
      background-color: palegoldenrod;
      image{
        height: 100%;
        width: 100%;
      }
    }
    .userName{
      height: 150rpx;
      font-size: 40rpx;
      font-weight: 500;
    }
    .box{
      display: flex;
      flex-wrap: wrap;
      width: 900rpx;
      padding-left: 38rpx;
      .littleBox{
        width: 300rpx;
        height: 300rpx;
        margin-left: 25rpx;
        margin-bottom: 25rpx;
        padding-top: 70rpx;
        text-align: center;
        border-radius: 20rpx;
        border: 1rpx solid black;
        .icon{
          padding-bottom: 40rpx;
        }
      }
    }
    .login{
      width: 80%;
      height: 100rpx;
      text-align: center;
      line-height: 100rpx;
      margin-top: 100rpx;
      margin-left: 80rpx;
      border: 1rpx solid black;
      border-radius: 15rpx;
    }
  }
</style>
