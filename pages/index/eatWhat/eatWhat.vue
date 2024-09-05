<template>
  <view class="bg">
    <div class="he">
      <image :src="img1" mode="aspectFill"></image>
    </div>
    <button @click="open();getEat();">点击抽取食物盲盒！</button>
    <uni-popup ref="popup" type="center">
      <div class="box">
        <div class="top">
          <p class="o">"今天吃！"</p>
          <p class="t">凉拌茄子</p>
        </div>
        <div class="cen">
          <p class="ta">鲜美口感</p>
          <p class="t">#益处</p>
          <p class="c">改善睡眠</p>
          <p class="t">食材</p>
          油泼辣椒/紫茄子 2根/葱姜蒜 少许/酱油 生抽1勺/老抽少许/醋 少许/味精 少许/盐/花椒或者藤椒油/白糖 小半勺
          <p class="t">料理方法</p>
          茄子在锅中蒸熟，晾凉后用手撕成条; 蒜捣碎 加入少许盐 加生抽一勺，老抽几滴，白糖小半勺，味精少许。油泼辣椒和醋小半勺打成调料汁; 调好的酱汁泼在茄子条上，撒上切碎的小葱。; 如果想复杂一点，可以用干辣椒丝和小葱一起撒在茄子上，再倒入少许滚油，会更香。
        </div>
      </div>
    </uni-popup>
  </view>
</template>

<script>
  import config from '../../../utils/config.js'
  export default {
    data() {
      return {
        img1:'https://ts1.cn.mm.bing.net/th/id/R-C.d4aed49d23066deda3ace1b0956dc13b?rik=czEqQdmhB8tnZg&riu=http%3a%2f%2f16597216.s21i.faiusr.com%2f2%2fABUI4IH1BxACGAAg5qyP_QUouNziogUwnAw42BE.jpg&ehk=Dgu1zqRBxHXxGt9bqvFZeYhth9iD2dLK10aIgRqYjWU%3d&risl=1&pid=ImgRaw&r=0',
        token:'',
      };
    },
    onLoad(){
      this.getToken()
    },
    methods:{
      getToken(){
        console.log('1111');
        this.token=wx.getStorageSync("token")
      },
      // 收取盲盒
      async getEat(e) {
      	const params = {
          "setMyHeaderxxx": {
            "token":this.token
           }
      	};
      	uni.showLoading({
      		title:"Loading"
      	})
        const {data: res} = await uni.$http.get(config.host+'/dishes/random', params);  
      	if (res.code == 200) {
          console.log(res.data);
          uni.showToast({
          	title: '抽取成功',
          	duration: 2000,
          	icon: 'none'
          });  
      	} else {
          console.log(res.code);
      		uni.showToast({
      			title: '抽取失败',
      			duration: 2000,
      			icon: 'none'
      		});    
      	}
      },
      open(){
       // 'top','left','bottom','right','center'
        this.$refs.popup.open('top')
      }
    }
  }
</script>

<style lang="scss">
.bg{
  padding: 20rpx;
  .he{
    width: 700rpx;
    height: 1000rpx;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: palegoldenrod;
    image{
      width: 100%;
      height: 100%;
    }
  }
  button{
    width: 80%;
    color: #fff;
    margin-top: 40rpx;
    background-color: black;
  }
  uni-popup{
    .box{
      width: 550rpx;
      height: 830rpx;
      text-align: canter;
      padding: 20rpx;
      margin-left: 90rpx;
      margin-top: 100rpx;
      border-radius: 25rpx;
      background-color: black;
      color: white;
      border:1rpx solid black;
      .top{
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        margin-bottom: 20rpx;
        border-bottom: 1rpx solid gainsboro;
        .o{
          color: grey;
        }
        .t{
          font-size:50rpx;
          font-weight: 800;
        }
      }
      .cen{
        .t{
          font-size: 30rpx;
          font-weight: 800;
        }
        .c{
          font-size: 35rpx;
        }
        .ta{
          color: coral;
        }
      }
    }
  }
}
</style>
