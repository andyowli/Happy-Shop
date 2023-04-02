<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">物流</div>
		</div>
        <div class="card-contion">
            <Card
                :num="this.$store.state.logisticsModule.list.num"
                :price="this.$store.state.logisticsModule.list.price"
                :desc="this.$store.state.logisticsModule.list.desc"
                :title="this.$store.state.logisticsModule.list.title"
                :thumb="this.$store.state.logisticsModule.list.thumb"
            />
        </div>
        <div>
            <Steps direction="vertical" :active="active">
                <Step>
                    <h3>【杭州市市场部】已发往 【杭州中转站】</h3>
                    <p>2016-07-12 12:40</p>
                </Step>
                <Step>
                    <h3>【杭州市】【杭州市市场部】已揽收</h3>
                    <p>2016-07-11 10:00</p>
                </Step>
                <Step>
                    <h3>商家已发货，正通知中通快的取件</h3>
                    <p>2016-07-10 09:30</p>
                </Step>
            </Steps>
        </div>
         <!-- 好物 -->
        <div class="cate">
            <div class="cate-grid" v-for="(cate, index) in banners" :key="index">
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
import model from '../../../home/HomeModel';
import { Icon } from 'vant';
import { Step, Steps } from 'vant';
import { Card } from 'vant';
export default {
    components:{
        Icon,
        Step,
        Steps,
        Card
    },
    data(){
        return {
            active:1,
            num:'',
            cateList: [],
            banners:[],
        }
    },
    async created (){
        this.cateList = model.cateList;
        this.banners = this.cateList.slice(0,1);
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: .88rem;
        background-color: #ffffff;
        box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
        margin-bottom: .3rem;
        display: flex;
        align-items: center;
        position: relative;
    }
    .header .name{
        font-size: .3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .card-contion{
        margin-bottom: .2rem;
    }
    .van-card{
        background-color: #fff;
    }
    .van-button--default{
        background-color: #efefef;
    }

    .cate {
        margin-top: .2rem;
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
    }
    .cate-goods .list .item {
        float: left;
        position: relative;
        width: 3.2rem;
        background-color: #fff;
        margin-top: .3rem;
    }
    .cate-goods .list .item:nth-child(2n+1) {
        padding: 0 .3rem .2rem .4rem;
    }
    .cate-goods .list .item .good {
        width: 100%;
    }
    .cate-goods .list .item .hd {
        border-radius: .2rem;
        position: relative;
        z-index: 0;
        background-color: #f4f4f4;
    }
    .cate-goods .list .item .hd img{
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
    }
    .cate-goods .list .item .name {
        margin: .3rem auto .1rem;
        padding: 0 .1rem;
        line-height: 1;
        text-align: left;
        font-size: .28rem;
        color: #333;
    }
    .cate-goods .list .item .price {
        line-height: 1;
        font-size: .32rem;
        text-align: left;
        color: #b4282d;
        padding: 0 .1rem;
    }
    .name,.desc{
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .list,.item,.name,.desc{
        overflow: hidden;
    }
</style>