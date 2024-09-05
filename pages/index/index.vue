<template>
	<view class="bg">
    <div class="box">
      <h1>Hello</h1>
      <h2>今天也要元气满满喔,小明</h2>
    </div>
    <div class="sear">
      <input type="text" placeholder="Search..." placeholder-class="sea" v-model="search"></input>
    </div>
    <div class="fun">
      <div class="opt">
        <div class="ii">
          <image :src="img7" mode="aspectFill"></image>
        </div>
        <div class="wenzi">食物榜单</div>
      </div>
      <div class="opt">
        <div class="ii">
          <image :src="img8" mode="aspectFill"></image>
        </div>
        <div class="wenzi">食谱库</div>
      </div>
      <div class="opt">
        <div class="ii">
          <image :src="img9" mode="aspectFill"></image>
        </div>
        <div class="wenzi">懒人配餐</div>
      </div>
      <div class="opt" @click='gotoEatwhat()'>
        <div class="ii">
          <image :src="img6" mode="aspectFill"></image>
        </div>
        <div class="wenzi">吃什么</div>
      </div>
      <div class="opt">
        <div class="ii">
          <image :src="img10" mode="aspectFill"></image>
        </div>
        <div class="wenzi">食物对比</div>
      </div>
      <div class="opt">
        <div class="ii">
          <image :src="img11" mode="aspectFill"></image>
        </div>
        <div class="wenzi">代谢计算</div>
      </div>
      <div class="opt">
        <div class="ii">
          <image :src="img13" mode="aspectFill"></image>
        </div>
        <div class="wenzi">成分估量</div>
      </div>
      <div class="opt">
        <div class="ii">
          <image :src="img14" mode="aspectFill"></image>
        </div>
        <div class="wenzi">减脂知识</div>
      </div>
    </div>
    <div class="column">
      <div class="advice">
        <div class="title">饮食建议</div>
        <div class="bb">
          <p>了解你的每日饮食情况</p>
          <div class="ii">
            <image :src="img15" mode="aspectFill"></image>
          </div>
        </div>
      </div>
      <div class="know advice">
        <div class="title">小知识</div>
        <div class="bb">
          <p></p>
          <div class="ii">
            <image :src="img16" mode="aspectFill"></image>
          </div>
        </div>
      </div>
    </div>
    <div class="ti">
      专属食谱
    </div>
    <div class="Exrec" @click="gotoexcRe()">
      <image :src="img2" mode="aspectFill"></image>
    </div>
    <div class="ti">
      经典食谱
    </div>
    <div class="Clarec">
      <image :src="img3" mode="aspectFill"></image>
    </div>
    <div class="question">
      <div class="tit">
        每日健康问答
      </div>
      <div class="qq">
        <div class="oo">
          #今日提问
        </div>
        <div class="cc">
          水分摄入量需求取决于体重吗？
        </div>
      </div>
      <div class="aa">
        <div class="bt" @click="gotoAnswer()">是</div>
        <div class="bt" @click="gotoAnswer()">否</div>
      </div>
    </div>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				img1:'https://img.51miz.com/Element/00/77/57/33/d9bac8ad_E775733_26db0a68.png',
        img2:'https://ts1.cn.mm.bing.net/th/id/R-C.1e1cc591fe092ebb46f661a1045fab57?rik=8q%2brvaWpnYe5rw&riu=http%3a%2f%2fwww.kaidianbang.com%2fupload%2fimage%2f2020%2f11%2f02%2f1604302923603620.jpg&ehk=%2bGMc0HI3LmsZk86ZCXVTHgUCTw2QWtddGK7mrWQeb4M%3d&risl=&pid=ImgRaw&r=0',
        img3:'https://img.zcool.cn/community/01db615dbc44eba801209e1f590d7c.jpg@1280w_1l_2o_100sh.jpg',
        // fun
        img4:'https://bpic.588ku.com/element_origin_min_pic/19/04/22/536bf65f20c4774364631a0f6fe8c003.jpg',
        img5:'https://img.zcool.cn/community/01cedd594a8bb9a8012193a39d5d7c.jpg@1280w_1l_2o_100sh.jpg',
        img6:'https://img.tukuppt.com/ad_preview/00/82/31/GWKusuU94t.jpg!/fw/260',
        img7:'https://img.51miz.com/Element/00/77/57/34/de3ede43_E775734_fd6c129e.png',
        img8:'https://img.51miz.com/Element/00/49/22/45/a72b0781_E492245_757cc181.png',
        img9:'https://ts1.cn.mm.bing.net/th/id/R-C.6d14209d66515d9b68ecf445d576296a?rik=B3aPCLKj38TSig&riu=http%3a%2f%2fimg2.baobao88.com%2fbbfile%2fallimg%2f101118%2f1142F534J-05.gif&ehk=1cRwaF1%2ftpHINoLHtgRd38cpIKRdWtsVfNzDNYH5lFA%3d&risl=&pid=ImgRaw&r=0',
        img10:'http://124.221.62.157:8080/images/image21.png',
        img11:'https://img.izhixiu.com/22/0122/2201228287.jpg',
        img12:'http://124.221.62.157:8080/images/swgz.png',
        img13:'https://tse2-mm.cn.bing.net/th/id/OIP-C.cC-O6dNjcjnrv5VNUfJAzAAAAA?pid=ImgDet&rs=1',
        img14:'https://tse4-mm.cn.bing.net/th/id/OIP-C.bsCoa74dSy1_bAagXR7xYAAAAA?pid=ImgDet&rs=1',
        img15:'https://tse4-mm.cn.bing.net/th/id/OIP-C.35Wss-Yk8IYGkvvtlnfumQAAAA?pid=ImgDet&rs=1',
        img16:'https://ts1.cn.mm.bing.net/th/id/R-C.16cf772c81d22e143ec18e0479365f0d?rik=wivCd2T297CLhQ&riu=http%3a%2f%2fupload.shejihz.com%2f2019%2f05%2fa09b1244d4100509190f29b127a86a8f.jpg&ehk=SVvlxt%2bpHXrYrHRW%2bukGiZjxZhCjWJyopoXnDyRi%2beg%3d&risl=&pid=ImgRaw&r=0',
			}
		},
		onLoad() {

		},
		methods: {
      gotoexcRe(){
        uni.navigateTo({
          url:'./excRe/excRe'
        })
      },
      gotoAnswer(){
        uni.navigateTo({
          url:'./answer/answer'
        })
      },
      gotoEatwhat(){
        uni.navigateTo({
          url:'./eatWhat/eatWhat'
        })
      }
		}
	}
</script>

<style lang="scss">
	.bg{
    padding-top: 20rpx;
    padding-left: 20rpx;
    padding-bottom: 40rpx;
    background-color: white;
    .box{
      h1{
        font-size: 50rpx;
        font-weight: 800;
      }
      h2{
        font-size: 30rpx;
      }
    }
    .sear{
      display: flex;
      padding-top: 40rpx;
      height: 120rpx;
      input{
        width: 600rpx;
        height: 90rpx;
        padding-left: 80rpx;
        margin-right: 30rpx;
        border-radius: 45rpx;
        background-color: #f5f5f5;
      }
      .sea{
        color: #b9bec2;
      }
    }
    .fun{
      display: flex;
      flex-wrap: wrap;
      padding-left: 30rpx;
      .opt{
        width: 130rpx;
        height: 130rpx;
        margin-right: 40rpx;
        margin-bottom: 30rpx;
        .ii{
          height: 80%;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          image{
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .column{
      margin-top: 40rpx;
      display: flex;
      width: 95%;
      height: 220rpx;
      .advice{
        width: 58%;
        height: 100%;
        border: 1rpx solid black;
        border-radius: 35rpx;
        margin-right: 20rpx;
        padding: 10rpx;
        background-color: white;
        .title{
          font-size: 40rpx;
          font-weight: 800;
          color: #42bdab;
        }
        .bb{
          display: flex;
          p{
            width: 50%;
            font-size: 30rpx;
            color: grey;
            margin-top: 50rpx;
          }
          .ii{
            width: 50%;
            height: 175rpx;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            image{
              height: 100%;
              width: 100%;
            }
          }
        }
      }
      .know{
        padding: 10rpx;
        height: 100%;
        width: 37%;
        border: 1rpx solid black;
        border-radius: 35rpx;
        .bb{
          .ii{
            width: 190rpx;
            height: 150rpx;
          }
        }
      }
    }
    .ti{
      margin-top: 50rpx;
      font-size: 50rpx;
    }
    .Exrec{
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 95%;
      height: 650rpx;
      margin-top: 40rpx;
      // border: 1rpx solid limegreen;
      border-radius: 25rpx;
      // background-color: paleturquoise;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .Clarec{
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 95%;
      height: 650rpx;
      margin-top: 40rpx;
      // border: 1rpx solid limegreen;
      border-radius: 25rpx;
      // background-color: paleturquoise;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .question{
      padding: 40rpx;
      width: 85%;
      height: 550rpx;
      margin-top: 40rpx;
      border-radius: 25rpx;
      background-color: #ffe4d9;
      .tit{
        width: 60%;
        font-size: 50rpx;
        font-weight: 800;
        border-bottom: 1rpx solid black;
      }
      .qq{
        margin-top: 40rpx;
        padding: 50rpx;
        border: 1rpx solid black;
        background-color: white;
        .oo{
          color: orange;
        }
        .cc{
          font-size: 40rpx;
        }
      }
      .aa{
        display: flex;
        .bt{
          width: 50%;
          height: 90rpx;
          text-align: center;
          line-height: 90rpx;
          margin-top: 60rpx;
          margin-right: 20rpx;
          border-radius: 50rpx;
          border: 1rpx solid black;
          background-color: white;
        }
      }
    }
  }
</style>
