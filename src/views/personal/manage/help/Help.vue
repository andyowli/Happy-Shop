<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">帮助</div>
		</div>

        <div>
            <Collapse v-model="activeName" accordion v-for="(item,index) in arr" :key="index">
                <CollapseItem :title="item.title" :name="item.name">{{item.cont}}</CollapseItem>
            </Collapse>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Collapse, CollapseItem } from 'vant';
export default {
    components:{
        Icon,
        Collapse,
        CollapseItem
    },
    data() {
        return {
            activeName: '1',
            arr:[
                {
                    name:1,
                    title:'发货时间',
                    cont:'商品下单成功后48小时发货，活动期间商家的订单量会暴涨，发货可能会稍慢一点，请耐心等待。'
                },
                {
                    name:2,
                    title:'物流快递',
                    cont:'正常快件是同城24小时，同省48小时，异地72小时，偏远地区需要5-7个工作日，具体情况请关注物流更新情况。'
                },
                {
                    name:3,
                    title:'商品问题',
                    cont:'商品如有质量问题，从签收日起10天内，您可以打开个人中心找到对应的订单，申请退款，商家会在48小时内处理请求。'
                },
                {
                    name:4,
                    title:'付费问题',
                    cont:'正常订单的时效为24小时，部分活动订单稍长，如未支付，超过时长订单会被取消，建议尽快支付。'
                },
                {
                    name:5,
                    title:'运费问题',
                    cont:'退换货时，平台承诺“谁错，谁承担”，例如商家问题，需要您先垫付运费，等商家签收后，可联系商家处理运费。退换货需要您先垫付，不要到付，避免和商家未协商一致，请保留好商品相关凭证。'
                },
                {
                    name:6,
                    title:'退款问题',
                    cont:'订单退款，订单的状态显示“退款成功”，款项是退回到您支付时所使用的的账户，各支付方式的到账时间有所不同，请您自行去查看。'
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
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        position: relative;
    }
    .header .name{
        font-size: .3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>