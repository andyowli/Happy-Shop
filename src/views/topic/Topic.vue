<template>
  <div>
    <div class="exploreChannels">
      <swiper :options="columnSwiperOptions">
        <swiper-slide v-for="item in columns" :key="item.type">
          <a class="item" href="javascript:;">
            <div class="channelPic" v-lazy:background-image="item.picUrl"></div>
            <div class="channelCount">
              <div class="topNum">{{item.articleCount}}</div>
            </div>
            <div class="title">{{item.title}}</div>
          </a>
        </swiper-slide>
      </swiper>
    </div>

    
    <div class="exploreRcmds">
      <div class="container">
        <div class="module-title">为你推荐</div>
        <a class="mainPosItem">
          <div class="imgContainer" v-lazy:background-image="recommendOne.picUrl">
            <div class="topicTag">
              <div class="exploreTag">{{recommendOne.typeName}}</div>
            </div>
          </div>
          <div class="topicInfo">
            <div class="line1">
              <div class="title">{{recommendOne.title}}</div>
              <div class="price">{{recommendOne.priceInfo}}元起</div>
            </div>
            <div class="line1">
              <div class="subTitle">{{recommendOne.subTitle}}</div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="recommendTwo.avatar">
                </div>
                <div class="nickname">{{recommendTwo.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{recommendTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="recommendTwo.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="recommendThree.avatar">
                </div>
                <div class="nickname">{{recommendThree.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="recommendThree.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="exploreRcmds">
      <div class="container">
        <div class="module-title">严选甄品</div>
        <a class="mainPosItem">
          <div class="imgContainer" v-lazy:background-image="zhenOne.picUrl">
            <div class="topicTag">
              <div class="exploreTag">{{zhenOne.typeName}}</div>
            </div>
          </div>
          <div class="topicInfo">
            <div class="line1">
              <div class="title">{{zhenOne.title}}</div>
              <div class="price">{{zhenOne.priceInfo}}元起</div>
            </div>
            <div class="line1">
              <div class="subTitle">{{zhenOne.subTitle}}</div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="zhenTwo.avatar">
                </div>
                <div class="nickname">{{zhenTwo.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{zhenTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{zhenTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="zhenTwo.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{zhenTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="zhenThree.avatar">
                </div>
                <div class="nickname">{{zhenThree.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{zhenThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{zhenThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="zhenThree.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{zhenThree.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="exploreGlobal">
      <div class="module-title">严选全球</div>
      <a class="mainPosItem" href="javascript:;">
        <div class="imgContainer" v-lazy:background-image="yxGlobal.picUrl"></div>
        <div class="topicInfo">
          <div class="line1">
            <div class="title">{{yxGlobal.title}}</div>
          </div>
          <div class="line2">
            <div class="subTitle">{{yxGlobal.subTitle}}</div>
          </div>
        </div>
      </a>
    </div>
    <i class="gotoTop" v-if="gotoTop" @click="goToTop"></i>
    <div class="exploreMore">
      <div class="line-title">
        <div class="inner">更多精彩</div>
      </div>
      <div class="content">
        <a class="topicItem" href="javascript:;" v-for="(item, index) in findMore" :key="index">
          <div class="threePics" v-if="item.picList.length > 2">
            <div class="pic1" v-lazy:background-image="item.itemPicUrl"></div>
            <div class="right">
              <div class="pic2" v-lazy:background-image="item.picList[1]"></div>
              <div class="pic3" v-lazy:background-image="item.picList[2]"></div>
            </div>
          </div>
          <div class="onePic" v-lazy:background-image="item.itemPicUrl" v-else></div>
          <div class="desc">{{item.subTitle}}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import model from './TopicModel'

  export default {
    data () {
      return {
        gotoTop: false,
        columns: [],
        recommendOne: {},
        recommendTwo: {},
        recommendThree: {},
        zhenOne: {},
        zhenTwo: {},
        zhenThree: {},
        yxGlobal: {},
        yxLook: {},
        findMore: [],
        columnSwiperOptions: {
          slidesPerView: 3.75,
          setWrapperSize: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false
        }
      }
    },
    async created () {
      window.addEventListener('scroll', this.handleScroll)
      document.title = '移动端商城--专题'
      // this.$store.commit(types.CLICK_FOOT_ICON, 1)
      this.columns = model.column
      this.recommendOne = model.recommendOne
      this.recommendTwo = model.recommendTwo
      this.recommendThree = model.recommendThree
      this.zhenOne = model.zhenOne
      this.zhenTwo = model.zhenTwo
      this.zhenThree = model.zhenThree
      this.yxGlobal = model.yxGlobal
      this.yxLook = model.yxLook
      this.findMore = model.findMore
    },
    methods: {
      handleScroll () {
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop >= 200) {
          this.gotoTop = true
        } else {
          this.gotoTop = false
        }
      },
      goToTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
<style scoped>
  .exploreChannels {
    overflow: hidden;
    padding: .3rem .3rem .54rem;
    background-color: #fff;
    margin-bottom: .2rem;
  }
  .swiper-wrapper{
    display: flex;
    transition-property: transform;
  }
  .swiper-slide{
    width: 100%;
  }
  .exploreChannels .item {
    position: relative;
    width: 2rem;
    height: 2rem;
    display: block;
  }
  .exploreChannels .item .channelPic {
    width: 1.7rem;
    height: 1.5rem;
    margin-bottom: .2rem;
    border-radius: .1rem;
  }
  .exploreChannels .item .channelCount {
    position: absolute;
    top: 0;
    right: .3rem;
    color: #fff;
    width: 1.2rem;
    height: .3rem;
    display: inline-block;
    background-size: 100%;
    vertical-align: middle;
    background-size: 100%;
    background: url(../../assets/images/count-bg.png) no-repeat;
  }
  .exploreChannels .item .channelCount .topNum {
    position: absolute;
    top: 0;
    right: .1rem;
    width: 3rem;
    height: 2rem;
    font-size: .2rem;
    line-height: .32rem;
    text-align: right;
  }
  .exploreChannels .item .title {
    color: #333;
    font-size: .24rem;
    line-height: 1;
    text-align: center;
  }
  .exploreRcmds {
    padding: .1rem .36rem;
    margin-bottom: .2rem;
    background-color: #fff;
  }
  .exploreRcmds .module-title {
    background-color: #fff;
    text-align: center;
    font-size: .4rem;
    height: 1rem;
    line-height: 1rem;
  }
  .exploreRcmds .mainPosItem {
    display: block;
    position: relative;
    color: #333;
    border: 1px solid #d9d9d9;/*no*/
    border-radius: .08rem;
    overflow: hidden;
    margin-bottom: .3rem;
  }
  .exploreRcmds .mainPosItem .imgContainer {
    position: relative;
    height: 3rem;
    border-radius: .08rem .08rem 0 0;
    overflow: hidden;
  }
  .exploreRcmds .mainPosItem .imgContainer .topicTag {
    position: absolute;
    top: .2rem;
    left: .2rem;
  }
  .exploreRcmds .mainPosItem .imgContainer .topicTag .exploreTag {
    padding: 0 .16rem;
    height: .6rem;
    font-size: .24rem;
    line-height: .66rem;
    background-color: rgba(255,255,255,.9);
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 20px;
    color: #333;
  }
  .exploreRcmds .mainPosItem .topicInfo {
    overflow: hidden;
    position: relative;
    padding: .24rem .2rem 0;
    background-color: #fff;
  }
  .exploreRcmds .mainPosItem .topicInfo .line1{
    font-size: .28rem;
    margin-bottom: .19rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.2;
  }
  .exploreRcmds .mainPosItem .topicInfo .line1 .title{
    flex: 1;
    margin-right: .3rem;
    font-size: .36rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .mainPosItem .topicInfo .line1 .price {
    line-height: 1;
    font-size: .32rem;
    text-align: center;
    min-width: 1.15rem;
  }
  .exploreRcmds .mainPosItem .topicInfo .line2 .subTitle {
    position: relative;
    font-size: .1rem;
    line-height: 1.2;
    color: #7f7f7f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .minorPosItem {
    display: flex;
    background-color: #fff;
    color: #333;
    border: 1px solid #d9d9d9;/*no*/
    border-radius: .04rem;
    margin-bottom: .3rem;
  }
  .exploreRcmds .minorPosItem .topicInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    position: relative;
    padding-left: .2rem;
    padding-right: .3rem;
  }
  .exploreRcmds .minorPosItem .topicInfo .author-container {
    margin-bottom: .25rem;
  }
  .author {
    display: flex;
    align-items: center;
    margin-top: .14rem;
  }
  .author .avatar {
    overflow: hidden;
    border: 1px solid #d9d9d9;/*no*/
    width: .6rem;
    height: .6rem;
    margin-right: .08rem;
    border-radius: 50%;
  }
  .author .avatar img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .author .nickname {
    font-size: .3rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .minorPosItem .topicInfo .line1 {
    margin-bottom: .14rem;
    line-height: 1.2;
  }
  .exploreRcmds .minorPosItem .topicInfo .line1 .title {
    margin-right: .3rem;
    font-size: .32rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .minorPosItem .topicInfo .line2 .subTitle {
    position: relative;
    font-size: .24rem;
    line-height: 1.5;
    color: #7f7f7f;
  }
  .exploreRcmds .minorPosItem .topicInfo .line2 .subTitle .twoLines {
    display: block;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .exploreRcmds .minorPosItem .minorPic {
    position: relative;
    width: 3rem;
  }
  .exploreRcmds .minorPosItem .minorPic .imgContainer{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
  }
  .exploreRcmds .minorPosItem .minorPic .imgContainer .topicTag {
    position: absolute;
    top: .1rem;
    left: .1rem;
  }
  .exploreRcmds .minorPosItem .minorPic .imgContainer .topicTag .exploreTag {
    font-size: .25rem;
    padding: 0 .16rem;
    height: .36rem;
    line-height: .36rem;
    background-color: rgba(255,255,255,.9);
    border: 1px solid #d9d9d9;/*no*/
    border-radius: .2rem;
    color: #333;
  }
  .gotoTop {
    position: fixed;
    right: .23rem;
    bottom: 1.8rem;
    vertical-align: middle;
    width: .82rem;
    height: .82rem;
    background-image: url(../../assets/images/gotoTop.png);
    background-size: .82rem .82rem;
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 50%;
    z-index: 2;
  }
  .exploreGlobal {
    margin-bottom: .2rem;
  }
  .exploreGlobal .module-title {
    background-color: #fff;
    text-align: center;
    font-size: .4rem;
    height: 1.2rem;
    line-height: 1.2rem;
  }
  .exploreGlobal .mainPosItem {
    display: block;
    position: relative;
    color: #333;
    overflow: hidden;
  }
  .exploreGlobal .mainPosItem .imgContainer{
    position: relative;
    height: 3rem;
    border-radius: .08rem .08rem 0 0;
    overflow: hidden;
  }
  .exploreGlobal .mainPosItem .topicInfo{
    background-color: #fff;
    padding: .2rem .3rem .61rem;
    border: none;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    padding: .24rem .2rem 0;
    background-color: #fff;
  }
  .exploreGlobal .mainPosItem .topicInfo .line1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.2;
    margin-bottom: .18rem;
  }
  .exploreGlobal .mainPosItem .topicInfo .line1 .title{
    flex: 1;
    margin-right: .3rem;
    font-size: .36rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreGlobal .mainPosItem .topicInfo .line2 .subTitle{
    display: block;
    overflow: hidden;
    white-space: pre-wrap;
    position: relative;
    font-size: .28rem;
    line-height: 1.2;
    margin-bottom: .2rem;
    color: #7f7f7f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreMore .line-title:before {
    content: '';
    display: block;
    width: 4.5rem;
    height: 1px;/*no*/
    background-color: #d9d9d9;
  }
  .exploreMore .line-title {
    height: 1rem;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .exploreMore .line-title .inner {
    width: 2rem;
    margin: 0 .3rem;
    font-size: .28rem;
    color: #333;
  }
  .exploreMore .line-title:after{
    content: '';
    display: block;
    width: 4.5rem;
    height: 1px;/*no*/
    background-color: #d9d9d9;
  }
  .exploreMore .content {
    display: block;
    color: #333;
  }
  .exploreMore .topicItem {
    display: block;
    padding: .24rem;
    background-color: #fff;
    color: #333;
  }
  .exploreMore .topicItem .imgContainer {
    background-color: #f4f4f4;
  }
  .exploreMore .topicItem .threePics {
    overflow: hidden;
  }
  .exploreMore .topicItem .pic1 {
    float: left;
    width: 4.9rem;
    height: 3.5rem;
    margin-right: .04rem;
  }
  .exploreMore .topicItem .right {
    float: right;
    width: 2rem;
  }
  .exploreMore .topicItem .right .pic2 {
    margin-bottom: .04rem;
    height: 1.7rem;
  }
  .exploreMore .topicItem .right .pic3 {
    height: 1.77rem;
  }
  .exploreMore .topicItem .onePic {
    height: 3.6rem;
  }
  .exploreMore .topicItem .desc {
    background-color: #fff;
    font-size: .28rem;
    padding-top: .29rem;
    padding-bottom: .1rem;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .onePic,.pic3,.pic2,.pic1,.imgContainer,.channelPic{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
