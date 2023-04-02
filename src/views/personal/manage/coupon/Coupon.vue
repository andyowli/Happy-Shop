<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">优惠券</div>
		</div>
        <div class="contaion">
            <div class="card2" v-for="item in coupon" :key="item.id">
                <div class="price">
                    <span class="Symbol">{{item.symbol}}</span>
                    <span class="number">{{item.number}}</span>
                </div>
                <div class="line"></div>
                <div class="explain">
                    <span class="title">{{item.title}}</span>
                    <span class="cont">{{item.cont}}</span>
                    <span class="time">{{item.time}}</span>
                </div>

                <div class="my-special-label">
                    <div>
                        <div>待使用</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
export default {
    components:{
        Icon
    },
    data(){
        return {
            coupon:[
                {
                    id:1,
                    symbol:'￥',
                    number:20,
                    title:'通用券',
                    cont:'可在全场使用，无限制',
                    time:'使用时效：2022.8.14至2022.8.22'
                },
                {
                    id:2,
                    symbol:'￥',
                    number:10,
                    title:'服饰券',
                    cont:'仅服饰部分，满99元可用',
                    time:'使用时效：2022.8.14至2022.8.22'
                }
            ]
        }
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
    .contaion{
        padding: .2rem;
    }
    .card2 {
        width: 100%;
        height: 2rem;
        position: relative;
        background-image: 
            radial-gradient(circle at 2rem top, #e9ecf5, #e9ecf5 10px, transparent 11px),
            radial-gradient(circle at 2rem bottom, #e9ecf5, #e9ecf5 10px, transparent 11px);
        background-color: #fea42a;
        border-radius: 4px;
        margin-bottom: .2rem;
    }
    .card2 > .line {
        position: absolute;
        top: 1rem;
        left: 1.3rem;
        width: 1.43rem;
        height: 1px;
        background-image: linear-gradient(to right, #ffffff 0%, #ffffff 50%, transparent 50%);
        background-size: .26rem 1rem;
        background-repeat: repeat-x;
        transform:rotate(90deg);
    }
    .card2::before {
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: -5px;
        width: 10px;
        height: 100%;
        /* 这里可以优化一下，变为半圆，right也可以设置为0了 */
        background: radial-gradient(circle at left, #e9ecf5, #e9ecf5 10px, transparent 10px);
        background-size: 10px 14px;
    }
    .price,.explain{
        color: #fff;
    }
    .price{
        position: absolute;
        top: 19%;
        left: .24rem;
    }
    .price .number{
        font-size: .8rem;
    }
    .price .Symbol{
        font-size: .5rem;
    }
    .explain .title{
        font-size: .4rem;
        position: absolute;
        top: 10%;
        left: 2.6rem;
    }
    .explain .cont{
        position: absolute;
        top: 43%;
        left: 2.6rem;
    }
    .explain .cont,.explain .time{
        font-size: .28rem;
    }
    .explain .time{
        position: absolute;
        top: 70%;
        left: 2.6rem;
    }


    .my-special-label{
        position: absolute;
        right: 0
    }
    /*内层容器*/
    .my-special-label > div {
        width: 80px;
        height: 60px;
        overflow: hidden;
        top: -18px;
        right: 10px;
    }
    /*小横标*/
    .my-special-label > div > div{
        font: bold 12px Sans-Serif;
        text-align: center;
        text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px;
        transform: rotate(45deg);
        position: relative;
        padding: 0px;
        left: 17px;
        top: 15px;
        width: 80px;
        background-color: #fb774e;
        /* background-image: linear-gradient(to top, #fd5656, #d60101); */
        color: #f7f7f7;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }
    /*折叠角*/
    .my-special-label > div > div:before {
        left: 0;
    }
    .my-special-label > div > div:after {
        right: 0;
    }
    .my-special-label > div > div:before, .my-special-label > div > div:after {
        content: "";
        border-top: 1px solid #c5053f;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        position: absolute;
        bottom: -1px;
    }

</style>