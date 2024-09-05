<template>
  <view class="bg">
    <div class="infor">
      <view class="user" @click="addAvatar()">
        <image :src="img" mode="aspectFill"></image>
      </view>
      <form @submit="formSubmit" @reset="formReset">
        <!-- height -->
        <input type="text" placeholder="身高" v-model="this.userinformation.height">
        <!-- weight -->
        <input type="text" placeholder="体重">
        <!-- birthdate -->
        <input type="text" placeholder="年级 " v-if="user_info.grade">
        <view class="grade" v-if="!user_info.grade">
          <view class="uni-list">
            <view class="uni-list-cell">
              <view class="uni-list-cell-left">
              </view>
              <view class="uni-list-cell-db">
                <picker @change="bindPickerChange" :value="index" :range="array">
                  <view class="uni-input,placeholderClass">{{array[index]}}</view>
                </picker>
              </view>
            </view>
          </view>
        </view>
        <!-- likes -->
        <input type="text" placeholder="喜食 ">
        <!-- dislike -->
        <input type="text" placeholder="厌食" class="username">
        <!-- taboo -->
        <input type="text" placeholder="忌口 ">
        <!-- healthy -->
        <input type="text" placeholder="疾病情况">
        <button class="save" form-type="submit">
          Save
        </button>
      </form>
    </div>
  </view>
</template>

<script>
  import config from '../../../utils/config.js'
  export default {
    data() {
      return {
        token:'',
        img:'https://img.zcool.cn/community/01629f5b10ec78a801202e6090eb63.png@1280w_1l_2o_100sh.png',
        title: 'picker',
        array: ['——请选择出生年份——','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003', '2004', '2005', '2006','2007'],
        index: 0,
        grade:'',
        user_info:[],
        userinformation:{
          "birthdate": "2003",
          "dislike": "辣椒",
          "healthy": "夜盲症",
          "height": "160",
          "likes": "螃蟹",
          "taboo": "",
          "weight": "100"
        },
        timeNow:'',
        health:'',
      }
    },
    onLoad(){
      this.getToken()
      this.getUser()
      this.getTime()
      this.getHealth()
    },
    methods:{
      getTime(){
        const myDate = new Date()
        const year=myDate.getFullYear()
        const month=myDate.getMonth()+1
        const day=myDate.getDate()
        const hour=myDate.getHours()
        const minute = myDate.getMinutes()
        const second = myDate.getSeconds()
        const formatNumber = n => {
          n = n.toString()
          return n[1] ? n : `0${n}`
        }
        this.timeNow =`${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
      },
      async getHealth() {
        // let timeA=this.timeNow.slice(0,10)
        // console.log(timeA);
      	const params = {
          // "time":timeA,
          "setMyHeaderxxx": {
            "token":this.token,
           }
      	};
        // 开启loading
      	uni.showLoading({
      		title:"注册中"
      	})
        //发送请求
        const {data: res} = await uni.$http.get(config.host+'/dishes/titlelist', params);
      	if (res.code == '200') {
          this.health=res.data
      		return uni.showToast({
      			title: '获取成功',
      			duration: 2000,
      			icon: 'none'
      		});
      	} 
        else 
        {
          uni.showToast({
          	title: '数据库存储失败',
          	duration: 2000,
          	icon: 'none'
          });  
        }
      },
      // 提交健康情况
      async formSubmit(e) {
        console.log(e);
        let userinformation={
          "birthdate": "2003",
          "dislike": "辣椒",
          "healthy": "夜盲症",
          "height": "160",
          "likes": "螃蟹",
          "taboo": "",
          "weight": "100"
        }
      	const params = {
          "userinfomation":userinformation,
          "setMyHeaderxxx": {
            "token":this.token,
           }
      	};
        // 开启loading
      	uni.showLoading({
      		title:"提交中"
      	})
        //发送请求
        const {data: res} = await uni.$http.put(config.host+'/userinformation', params);
      	if (res.code == '200') {
      		return uni.showToast({
      			title: '提交成功',
      			duration: 2000,
      			icon: 'none'
      		});
      	} else {
          console.log('提交失败');
        }
      },
      getUser(){
       this.user_info=wx.getStorageSync("user_info")
       console.log(this.user_info);
      },
      getToken(){
        this.token=wx.getStorageSync("token")
      },
      //下拉框
      bindPickerChange: function(e) {
        this.index = e.detail.value
        this.grade=this.array[this.index]
      },
      //添加头像
      addAvatar(){
        uni.chooseImage({
        	success: (chooseImageRes) => {
        		const tempFilePaths = chooseImageRes.tempFilePaths;
        		const uploadTask = uni.uploadFile({
        			url: 'http://106.54.177.78:9111/user/uploadpp',
        			filePath: tempFilePaths[0],
        			name: 'file',
        			// formData: {
        			// 	'user': 'test'
        			// },
        			success: (uploadFileRes) => {
        				console.log(uploadFileRes.data);
        			}
        		});
        		uploadTask.onProgressUpdate((res) => {
        			console.log('上传进度' + res.progress);
        			console.log('已经上传的数据长度' + res.totalBytesSent);
        			console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
        			// 测试条件，取消上传任务。
        			if (res.progress > 50) {
        				uploadTask.abort();
        			}
        		});
        	}
        });
      }
    }
  }
</script>

<style lang="scss">
.bg{
  height: 2000rpx;
  background-color: #ebedee;
  .infor{
    padding-top: 100rpx;
    padding-bottom: 50rpx;
    background-color: #f2f2f2;
    .user{
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 150rpx;
      height: 150rpx;
      margin-left: 300rpx;
      border: 8rpx solid white;
      border-radius: 150rpx;
      image{
        height: 100%;
        width: 100%;
      }
    }
    form{
      input{
        width:600rpx;
        height: 100rpx;
        padding-left: 50rpx;
        margin-top: 20rpx;
        margin-left: 50rpx;
        line-height: 100rpx;
        border-radius: 50rpx;
        background-color: white;
      }
      .username{
        margin-top: 20rpx;
      }
      .grade{
        width:600rpx;
        height: 100rpx;
        padding-left: 50rpx;
        margin-top: 20rpx;
        margin-left: 50rpx;
        line-height: 100rpx;
        text-align: center;
        border-radius: 50rpx;
        background-color: white;
      }
      textarea{
        width: 580rpx;
        height: 200rpx;
        margin-top: 40rpx;
        margin-bottom: 70rpx;
        margin-left: 45rpx;
        padding: 40rpx;
        border-radius: 50rpx;
        background-color: white;
      }
      .save{
        width: 200rpx;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        color: white;
        font-size: 30rpx;
        font-weight: 900;
        margin-top: 30rpx;
        background-color: #827ffe;
        border-radius: 50rpx;
      }
    }
  }
}
</style>
