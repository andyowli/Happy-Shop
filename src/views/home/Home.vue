<template>
    <div>
      <!-- 轮播图 -->
      <div class="banner">
        <swiper class="swiper" :options="swiperBanner">
          <swiper-slide v-for="(banner, index) in banners" :key="index">
            <img v-lazy="banner.picUrl" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="brand">
          <div class="brand-title">
            <span>品牌制造商直供</span>
          </div>
          <div class="brand-container">
              <ul class="brand-list">
                  <li class="brand-item" v-for="tag in tagList" :key="tag.id" @click="toDetails">
                      <div class="brand-cnt">
                          <h4 class="title">{{tag.name}}</h4>
                          <div class="brand-subTitle">
                              <span class="price1">{{tag.floorPrice}}</span>
                              <span class="price1">元起</span>
                          </div>
                          <img v-lazy="tag.picUrl">
                      </div>
                  </li>
              </ul>
          </div>
      </div>

      <div class="newGoods">
          <div class="newGoods-hd">
              <div class="newGoods-txt">
              <span>周一周四 · 新品首发</span>
              <div class="newGoods-all">
                  <span>查看全部</span>
                  <i class="arrow-right"></i>
              </div>
              </div>
          </div>

          <!-- 周四下的轮播 -->
          <div class="newGoods-item" v-if="newItemList.length>0">
              <swiper class="newGoods-swiper" :options="swiperOption" ref="mySwiper">
                  <swiper-slide class="newGoods-slide" v-for="item in newItemList" :key="item.id">
                      <a class="good" href="javascript:;">
                          <div class="good-img"><img v-lazy="item.listPicUrl"></div>
                          <div class="good-name">{{item.name}}</div>
                          <div class="good-price">¥{{item.retailPrice}}</div>
                      </a>
                  </swiper-slide>
              </swiper>
          </div>
      </div>


      <div class="popularItem">
          <div class="newGoods-hd popularItem-hd">
              <div class="newGoods-txt popularItem-more">
                  <span>人气推荐 · 好物精选</span>
                  <div class="newGoods-all popularItem-all">
                      <span>查看全部</span>
                      <i class="arrow-right"></i>
                  </div>
              </div>
          </div>

          <div class="newGoods-item1" v-if="popularItemList.length>0">
              <swiper class="newGoods-swiper" :options="swiperOption">
                  <swiper-slide class="newGoods-slide" v-for="popular in popularItemList" :key="popular.id">
                      <a class="good">
                          <div class="good-img"><img v-lazy="popular.listPicUrl"></div>
                          <div class="good-name">{{popular.name}}</div>
                          <div class="good-price">¥{{popular.retailPrice}}</div>
                      </a>
                  </swiper-slide>
              </swiper>
          </div>
      </div>

      <!-- 严选 -->
      <div class="welfare">
          <a class="welfare-more" href="javascript:;"></a>
      </div>


      <!-- 精选 -->
      <div class="brand">
          <div class="brand-title">
            <span>专题精选</span>
          </div>

          <div class="topics" v-if="topicList.length>0">
              <swiper :options="topicsSwiperOption">
                  <swiper-slide class="topics-slide" v-for="topic in topicList" :key="topic.id">
                      <a class="topics-slide-item" href="javascript:;">
                          <div class="topics-slide-img">
                              <img v-lazy="topic.itemPicUrl">
                          </div>
                          <div class="topics-hd">
                              <h4 class="topics-title">{{topic.title}}</h4>
                              <span class="topics-price">
                              <span>{{topic.priceInfo}}</span>
                              <span>元起</span>
                              </span>
                          </div>
                          <div class="topics-desc">
                              {{topic.subtitle}}
                          </div>
                      </a>
                  </swiper-slide>
              </swiper>
          </div>
      </div>


      <!-- 好物 -->
      <div class="cate" v-for="cate in cateList" :key="cate.id">
          <div class="cate-grid">
              <h3 class="title">{{cate.name}}好物</h3>
              <div class="cate-goods">
                  <ul class="list">
                      <li class="item" v-for="(item, idx) in cate.itemList" :key="idx">
                          <a class="good" href="javascript:;">
                              <div class="hd">
                                  <div class="wraper">
                                    <img v-lazy="item.listPicUrl">
                                  </div>
                                  <div class="desc">{{item.simpleDesc}}</div>
                              </div>
                              <div class="name">{{item.name}}</div>
                              <div class="price">¥{{item.retailPrice}}</div>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    import model from './HomeModel';
    import { Swipe, SwipeItem } from 'vant';
    export default {
        components:{
          Swipe,
          SwipeItem,
        },
        data(){
            return {
                active:1,
                cateList: [],
                banners:[],
                tagList: [],
                newItemList: [],
                popularItemList: [],
                topicList: [],
                swiperBanner:{
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false // 当用户滑动图片后继续自动轮播
                  },
                  pagination: {
                    el: '.swiper-pagination'
                  }
                },
                swiperOption: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                  setWrapperSize: false,
                  observer: true,
                  observeParents: true
                },
                topicsSwiperOption: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                  setWrapperSize: true
                }
            }
        },
        async mounted (){
          this.cateList = model.cateList;
          this.banners = model.focusList;
          this.tagList = model.tagList;
          this.newItemList = model.newItemList;
          this.popularItemList = model.popularItemList;
          this.topicList = model.topicList;
        },
        methods:{
          toDetails(){
            this.$router.push({path:'/goodDetails'})
          }
        }
    }
</script>

<style scoped>
  ::v-deep .swiper-wrapper{
    height: 3.7rem;
  }

  .banner img {
      width: 100%;
      height: 3.8rem;
  }

  .brand {
      color: #333;
      background-color: #fff;
  }
  .brand-title {
    font-size: .4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
  }
  .brand-container {
    padding-bottom: .1rem;
  }
  .brand-list {
    margin: 0 .18rem;
    height: 4.4rem;
    overflow: hidden;
  }
  .brand-item {
    margin-bottom: .1rem;
    width: 3.49rem;
    height: 2.2rem;
    overflow: hidden;
    float: left;
    background-color: #f4f4f4;
    position: relative;
  }
  .brand-item:nth-child(2n+1)
  {
    margin-right: .15rem;
  }
  .brand-item img {
    width: 3.2rem;
    height: 2.2rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .brand-cnt{
    padding: .2rem;
  }
  .brand-cnt .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    font-size: .3rem;
    line-height: .6rem;
    margin-bottom: 6px;
    font-weight:normal;
  }
  .brand-subTitle{
    display: flex;
  }
  .brand-cnt .price1 {
    color: #333;
    font-size: .3rem;
    line-height: .1rem;
  }


  .newGoods {
    margin-bottom: .2rem;
    background-color: #fff;
  }
  .newGoods-hd {
    background: url(../../assets/images/zofjx.png);
    background-size: 7.5rem 3rem;
    margin-bottom: .2rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .3rem;
  }
  .newGoods-txt {
    display: block;
    text-align: center;
    font-size: .4rem;
    color: #8BA0B6;
  }
  .newGoods-all {
    margin: .4rem auto 0;
    width: 2.5rem;
    height: .7rem;
    font-size: .28rem;
    line-height: .75rem;
    background: #D8E5F1;
  }
  .arrow-right {
    background: url(../../assets/images/arrow-right.png);
    background-size: .2rem .22rem;
    background-repeat: no-repeat;
    display: inline-block;
    height: .4rem;
    width: .4rem;
    vertical-align: middle;
    margin-left: .1rem;
    margin-top: .15rem;
  }

  .newGoods-item1 {
    width: 100%;
    height: 3.5rem;
    overflow: hidden;
  }

  .newGoods-item {
    width: 100%;
    height: 3.5rem;
    overflow: hidden;
  }
  .newGoods-swiper {
    padding: 0 15px;
    overflow: visible;
  }
  .newGoods-slide {
    float: left;
    width: 280px;
  }
  .good-img {
    background-color: #f4f4f4;
    width: 100%;
    height: 2.5rem;
  }
  .good img {
    width: 100%;
    height: 100%;
  }
  .good-name {
    margin: .1rem 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .good-price {
    color: #b4282d;
  }
  .good-name,.good-price {
    padding: 0 .2rem;
    font-size: .28rem;
    line-height: .3rem;
  }

  .popularItem-hd {
    background: url(../../assets/images/rqtj.png);
    background-size: 7.5rem 3rem;
  }
  .popularItem-all {
    background: #F4E9CB;
  }

  .popularItem {
    margin-bottom: .2rem;
    background-color: #fff;
  }

  .welfare {
    width: 100%;
    height: 2.5rem;
    margin-bottom: .2rem;
  }
  .welfare-more {
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(../../assets/images/yxfl.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .topics {
    padding: 0 .5rem .4rem;
    overflow: hidden;
  }
  .topics-slide {
    float: left;
    width: 5rem;
  }
  .topics-slide-item {
    display: block;
  }
  .topics-slide-img {
    width:  100%;
    height: 3rem;
    margin-bottom: .2rem;
    border-radius: .2rem;
    overflow: hidden;
  }
  .topics-slide-img img {
    height: 100%;
    width: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .topics-hd {
    display: flex;
    height: .5rem;
    zoom: 1;
    outline: 0;
    text-decoration: none;
  }
  .topics-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 4rem;
    font-size: .3rem;
    color: #333;
  }
  .topics-price {
    font-size: .3rem;
    color: #b4282d;
  }
  .topics-desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 3rem;
    font-size: .3rem;
    color: #7F7F7F;
  }


  .cate {
    margin-bottom: .2rem;
    background-color: #fff;
  }
  .cate-grid {
    background-color: #f4f4f4;
  }
  .cate-grid .title {
    line-height: 1rem;
    text-align: center;
    font-size: .35rem;
    color: #333;
    background-color: #fff;
  }
  .cate-goods {
    background-color: #fff;
  }
  .cate-goods .list {
    position: relative;
    z-index: 0;
    overflow: hidden;
  }
  .cate-goods .list .item {
    float: left;
    position: relative;
    width: 3.2rem;
    overflow: hidden;
    background-color: #fff;
  }
  .cate-goods .list .item:nth-child(2n+1) {
    padding: 0 .3rem .2rem .4rem;
  }
  .cate-goods .list .item .good {
    width: 100%;
  }
  .cate-goods .list .item .hd {
    border-radius: .2rem;
    background-color: #f4f4f4;
  }
  .cate-goods .list .item .hd .wraper{
    display: block;
    width: 100%;
    height: 2.8rem;
    border-radius: .2rem .2rem 0 0;
    background-color: #f4f4f4;
  }
  .cate-goods .list .item .hd .desc{
    background: #F1ECE2;
    border-radius: 0 0 .2rem .2rem;
    font-size: .3rem;
    color: #9F8A60;
    letter-spacing: 0;
    line-height: .35rem;
    padding: .2rem .1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .cate-goods .list .item .name {
    margin: .3rem auto .1rem;
    padding: 0 .1rem;
    line-height: 1;
    text-align: left;
    font-size: .28rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .cate-goods .list .item .price {
    line-height: 1;
    font-size: .32rem;
    text-align: left;
    color: #b4282d;
    padding: 0 .1rem;
  }
</style>