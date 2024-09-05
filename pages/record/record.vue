<template>
  <view class="bg">
    <div class="tittle">
      健康的身体是灵魂的客厅，病弱的身体是灵魂的监狱。 ——培根
    </div>
    <div class="weight">
      最新体重
      <div class="kilo">
        <span class="num">53.20</span><span class="gon">公斤</span>
      </div>
      <div class="pro">
        <liu-progressbar :progress="63" color="#FFFFFF" :height="'40rpx'" />
      </div>
      <div class="bott">
        <div class="lef">
          <div class="top">初始</div>
          <div class="bot">57.20公斤</div>
        </div>
        <div class="ri">
          <div class="top">目标</div>
          <div class="bot">50.90公斤</div>
        </div>
      </div>
    </div>
    <div class="tit">
      日常情况
    </div>
    <uni-popup ref="popup" type="bottom" :mask-click="true">
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入早餐..." v-model="task" class="one"></textarea>
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入中餐..." v-model="time"></textarea>
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入晚餐..." v-model="time"></textarea>
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入加餐..." v-model="time"></textarea>
     <button @click="recordEat();close();" v-if="!mod">
        <box class="icon">
          <uni-icons type="paperplane" size="15" color="white"></uni-icons>
        </box>
        SEND
      </button>
      <button @click="close();modify();recordEat();" v-if="mod" class="modi">
        <box class="icon">
          <uni-icons type="paperplane" size="15" color="white"></uni-icons>
        </box>
        SEND
      </button>
    </uni-popup> 
    <div class="diet" @click="open();">
      记饮食
      <div class="to">
        <div class="t">今日还可摄入</div>
        <span class="num">{{qianka}}</span><span class="wenzi">千卡</span>
      </div>
      <div class="b">
        <div class="item">
          <div class="too">
            <image :src="img8" mode="aspectFill"></image>
          </div>
          <div class="we">早餐</div>
        </div>
        <div class="item">
          <div class="too">
            <image :src="img2" mode="aspectFill"></image>
          </div>
          <div class="we">中餐</div>
        </div>
        <div class="item">
          <div class="too">
            <image :src="img1" mode="aspectFill"></image>
          </div>
          <div class="we">晚餐</div>
        </div>
        <div class="item">
          <div class="too">
            <image :src="img3" mode="aspectFill"></image>
          </div>
          <div class="we">加餐</div>
        </div>
        
      </div>
    </div>
    <div class="other">
      <div class="opt">
        <div class="tt">记饮水</div>
        <div class="con conw">
          <image :src="img5" mode="aspectFill"></image>
        </div>
        <div class="bb">
          <div class="add">
            +添加记录
          </div>
        </div>
      </div>
      <div class="opt">
        <div class="tt">记体重</div>
        <div class="con conw">
          <image :src="img6" mode="aspectFill"></image>
        </div>
        <div class="bb">
          <div class="add">
            +添加记录
          </div>
        </div>
      </div>
      <div class="opt">
        <div class="tt">记经期</div>
        <div class="con conw">
          <image :src="img7" mode="aspectFill"></image>
        </div>
        <div class="bb">
          <div class="add">
            +添加记录
          </div>
        </div>
      </div>
      <div class="opt">
        <div class="tt">记运动</div>
        <div class="con conw">
          <image :src="img4" mode="aspectFill"></image>
        </div>
        <div class="bb">
          <div class="add">
            +添加记录
          </div>
        </div>
      </div>
      <div class="opt">
        <div class="tt">记围度</div>
        <div class="con conw">
          <image :src="img9" mode="aspectFill"></image>
        </div>
        <div class="bb">
          <div class="add">
            +添加记录
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
  import config from '../../utils/config'
  export default {
    data() {
      return {
        img2:'https://tse1-mm.cn.bing.net/th/id/OIP-C.fdkJdZs85QgBAklwyd2IiQHaE8?pid=ImgDet&rs=1',
        img1:'https://tse1-mm.cn.bing.net/th/id/OIP-C.4NB6LVhRtFfORZudcpDCGgHaFj?pid=ImgDet&rs=1',
        img3:'https://bpic.588ku.com/back_origin_min_pic/21/03/01/7a0e9e7f39726bb63835afe55d032915.jpg!/fw/750/quality/99/unsharp/true/compress/true',
        img4:'http://124.221.62.157:8080/images/image17.jpg',
        img8:'https://tse1-mm.cn.bing.net/th/id/OIP-C.5bvn2AXUwEDwIOOFOEa7ewHaLH?pid=ImgDet&rs=1',
        img5:'https://ts1.cn.mm.bing.net/th/id/R-C.2bc28527c0b85c10c304b0ff692fad25?rik=Vvy36jh9vo4U2A&riu=http%3a%2f%2fimg002.waterconserving.cn%2fbdupload%2fimage%2f202105%2f1621406750716931656.jpg&ehk=v%2fCPHbvz8Auc1j2NQ7DiZ9qRS0a1j8LyUl%2fvakLA9Ls%3d&risl=&pid=ImgRaw&r=0',
        img6:'http://124.221.62.157:8080/images/image19.jpg',
        img7:'http://124.221.62.157:8080/images/image16.jpg',
        img9:'http://124.221.62.157:8080/images/image18.jpg',
        token:'',
        qianka:'1398'
      };
    },
    onLoad(){
      this.getToken()
      // this.recordEat()
    },
    methods:{
      close() {
        this.$refs.popup.close()
      },
      open(){
       // 'top','left','bottom','right','center'
        this.$refs.popup.open('top')
      },
      getToken(){
        this.token=wx.getStorageSync("token")
      },
      async recordEat(e) {
      	const params = {
      		"breakfast": ':蒸水蛋,酸辣土豆丝',
      		"lunch": '红烧排骨,糖醋脆皮豆腐',
          "snack": '酱烧茄子,蒜蓉粉丝蒸娃娃菜',
          "time": '2023-06-21',
           "setMyHeaderxxx": { 
             "token":this.token, 
             'content-type': 'application/x-www-form-urlencoded',
             "accept": "application/json",
          },
      	};
        // 开启loading
      	uni.showLoading({
      		title:"登录中"
      	})
        //发送请求
        const {data: res} = await uni.$http.post(config.host+'/record', params);
      	if (res.code == '200') {
          this.qianka='25'
      		return uni.showToast({
      			title: '成功',
      			duration: 2000,
      			icon: 'none'
      		});
      	} else {
      		uni.showToast({
      			title: '失败',
      			duration: 2000,
      			icon: 'none'
      		});    
      	}
      }
    }
  }
</script>

<style lang="scss">
.bg{
  padding-top: 30rpx;
  padding-left: 30rpx;
  .tittle{
    width: 85%;
    height: 100rpx;
    padding: 50rpx;
    border-radius: 35rpx;
    background-color: #ecfbf8;
  }
  .weight{
    width: 88%;
    height: 380rpx;
    margin-top: 30rpx;
    padding: 20rpx;
    border: 1rpx solid black;
    border-radius: 25rpx;
    .kilo{
      margin-top: 10rpx;
      .num{
        color: limegreen;
        font-size: 50rpx;
      }
      .gon{
        color: grey;
      }
    }
    .pro{
      height: 120rpx;
      margin-top: 50rpx;
    }
    .bott{
      display: flex;
      .lef{
        width: 50%;
        .top{
          color: darkgrey;
        }
      }
      .ri{
        width: 50%;
        .top{
          color: darkgrey;
        }
      }
    }
  }
  .tit{
    font-size: 40rpx;
    font-weight: 700;
    margin-top: 30rpx;
  }
  uni-popup{
    padding-top: 100rpx;
    border-radius: 50rpx;
    textarea{
      height: 150rpx;
      margin-top: 10rpx;
      margin-left: 50rpx;
      padding: 20rpx;
      border-radius: 50rpx;
      background-color: white;
    }
    .one{
      margin-top:1500000rpx;
    }
    button{
      width: 180rpx;
      height: 80rpx;
      color: white;
      font-size: 25rpx;
      font-weight: 700;
      margin-top: 60rpx;
      background-color: #3b968c;
      border-radius: 100rpx;
      .icon{
        margin-right: 10rpx;
        font-weight: 400;
      }
    }
    .modi{
      background-color: paleturquoise;
    }
  }
  .diet{
    width: 88%;
    height: 650rpx;
    margin-top: 40rpx;
    padding: 20rpx;
    border: 1rpx solid black;
    border-radius: 25rpx;
    .to{
      height: 180rpx;
      text-align: center;
      padding-top: 120rpx;
      border-bottom: 1rpx solid black;
      .t{
        color: grey;
      }
      .num{
        font-size: 50rpx;
        color: limegreen;
      }
    }
    .b{
      display: flex;
      height: 250rpx;
      padding-top: 50rpx;
      .item{
        width: 25%;
        height: 250rpx;
        margin-right: 10rpx;
        padding-left: 20rpx;
        // background-color: paleturquoise;
        .too{
          width: 120rpx;
          height: 120rpx;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 80rpx;
          background-color: palevioletred;
          image{
            width: 100%;
            height: 100%;
          }
        }
        .we{
          margin-top: 10rpx;
          text-align: center;
          font-size: 35rpx;
        }
      }
    }
  }
  .other{
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin-top: 30rpx;
    .opt{
      width: 39%;
      height: 280rpx;
      margin-right: 30rpx;
      margin-bottom: 30rpx;
      padding: 20rpx;
      border: 1rpx solid black;
      border-radius: 15rpx;
      background-color: white;
      .tt{
        font-weight: 800;
      }
      .con{
        width: 38%;
        height: 150rpx;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-color: palegreen;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .conw{
        width: 65%;
        border-radius: 25rpx;
      }
      .bb{
        .add{
          font-size: 50rpx;
        }
      }
    }
  }
}
</style>
