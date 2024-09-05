<template>
  <view class="bg">
    <div class="box">
      <image :src="img1" mode="aspectFill"></image>
    </div>
    <uni-popup ref="popup" type="center">
      <div class="box">
        <div class="top">
          <p class="o">"专属菜品！"</p>
          <p class="t">可乐鸡翅</p>
        </div>
        <div class="cen">
          <p class="ta">甜味</p>
          <p class="t">#益处</p>
          <p class="c">有益于劲椎病</p>
          <p class="t">食材</p>
          鸡翅,干红辣椒, 可乐, 老抽
          <p class="t">料理方法</p>
          鸡翅洗干净，直接丢入锅里干炒，炒干水分; 捞出鸡翅，锅里倒油烧热，再倒入鸡翅，煎至表皮金黄。（因为热锅冷油煎鸡翅会粘锅很严重。如果是不粘锅就不用捞，直接放一丁点油。）; 放2个整的干辣椒。倒可乐，差不多漫到鸡翅一半还多点的高度。加老抽调色以及调咸味儿; 大火煮开。煮开捞一捞浮沫。火关小，一定关小，熬一熬，熬入味，最后收汁到你喜欢的程度。加一点儿鸡精或者味精,完成。
        </div>
      </div>
    </uni-popup>
    <div class="boxx" @click="open()">
      <image :src="img2" mode="aspectFill"></image>
    </div>
    <div class="boxx">
      <image :src="img3" mode="aspectFill"></image>
    </div>
    <div class="box">
      <image :src="img4" mode="aspectFill"></image>
    </div>
    <div class="box">
      <image :src="img5" mode="aspectFill"></image>
    </div>
    <div class="boxx">
      <image :src="img6" mode="aspectFill"></image>
    </div>
    <div class="boxx">
      <image :src="img7" mode="aspectFill"></image>
    </div>
    <div class="box">
      <image :src="img8" mode="aspectFill"></image>
    </div>
  </view>
</template>

<script>
  import config from '../../../utils/config.js'
  export default {
    data() {
      return {
        token:'',
        img1:'https://i2.chuimg.com/4daad8ea877a11e6a9a10242ac110002_469w_701h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img2:'https://i2.chuimg.com/59735f92873b11e6a9a10242ac110002_600w_401h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img3:'https://i2.chuimg.com/a54a487c86fa11e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img4:'https://i2.chuimg.com/5a84d4ee8f9f11e6a9a10242ac110002_620w_413h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img5:'https://i2.chuimg.com/1d3d6a14873511e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img6:'https://i2.chuimg.com/822bdc40873411e6b87c0242ac110003_690w_460h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img7:'https://i2.chuimg.com/cf575a7a876211e6a9a10242ac110002_700w_525h.jpg?imageView2/2/w/660/interlace/1/q/90',
        img8:'https://i2.chuimg.com/d219e4b8874d11e6b87c0242ac110003_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90',
      };
    },
    onLoad(){
      this.getToken()
      this.getRec()
    },
    methods:{
      open(){
       // 'top','left','bottom','right','center'
        this.$refs.popup.open('top')
      },
      // 获取菜谱
      async getRec(e) {
      	const params = {
          "setMyHeaderxxx": {
            "token":this.token
           }
      	};
      	uni.showLoading({
      		title:"Loading"
      	})
        const {data: res} = await uni.$http.get(config.host+'/dishes/recommend', params);  
      	if (res.code == 200) {
          console.log(res.data);
          uni.showToast({
          	title: '成功',
          	duration: 2000,
          	icon: 'none'
          });  
      	} else {
          console.log('失败');
          console.log(res.code);
      		// uni.showToast({
      		// 	title: '失败',
      		// 	duration: 2000,
      		// 	icon: 'none'
      		// });    
      	}
      },
      getToken(){
        console.log('1111');
        this.token=wx.getStorageSync("token")
      }
    }
  }
</script>

<style lang="scss">
.bg{
  display: flex;
  flex-wrap: wrap;
  .box{
    width: 300rpx;
    height: 400rpx;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: palegoldenrod;
    image{
      width: 100%;
      height: 100%;
    }
  }
  uni-popup{
    .box{
      width: 550rpx;
      height: 880rpx;
      text-align: canter;
      padding: 20rpx;
      margin-left: 90rpx;
      margin-top: 100rpx;
      border-radius: 25rpx;
      background-color: white;
      color: black;
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
  .boxx{
    width: 400rpx;
    height: 400rpx;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: paleturquoise;
    image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
