<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">我的钱包</div>
            <div class="more">
                <Icon name="plus" size="20" style="margin-right:.2rem;" @click="toBack"/>
            </div>
		</div>

        <div class="wallter-cont">
            <div class="wallter">
                <div class="wallter-title">总资产</div>
                <div class="wallter-money">
                    ￥30000
                </div>
                <div class="wallter-icon">
                    <div class="iconCont">
                        <Icon name="pending-payment" size="27" @click="toRec"/>
                    </div>
                    <div style="float:left;width: 1px;height: .4rem; background: #e5e5e5;"></div> 
                    <div class="iconCont">
                        <Icon name="paid"  size="27" @click="withdrawal"/>
                    </div>
                    
                    
                </div>
            </div>
        </div>

        <div class="wallter-cont">
            <div id="main" style="width: 7.2rem;height:4.6rem;"></div>
        </div>

        <div class="wallter-cont">
            <div id="maychar" style="width: 7.2rem;height:4rem;"></div>
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
        
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        toBack(){
            this.$router.push({path:'/back'});
        },
        toRec(){
            this.$router.push({path:'/recharge'});
        },
        withdrawal(){
            this.$router.push({path:'/withdrawal'});
        },
        line(){
            var discount = this.$echarts.init(document.getElementById("main"));
            var option;

            option = {
                title: {
                    text: '消费趋势',
                    left: 'center'
                },
                xAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            window.addEventListener("resize", () => { discount.resize();});
            discount.setOption(option);
        },  
        pie(){
            var chartDom = this.$echarts.init(document.getElementById("maychar"));
            var option;

            option = {
            title: {
                text: '购买类型',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '服装' },
                        { value: 735, name: '食品' },
                        { value: 580, name: '鞋子' },
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
            };
            chartDom.setOption(option);
            window.addEventListener("resize", () => { chartDom.resize();});
        }
    },
    mounted(){
        this.line();
        this.pie();
    },
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
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.header .name{
		font-size: .3rem;
	}
    .van-popover__wrapper{
        display: block;
    }
    /deep/ .van-popover{
        left: 316px !important;
    }
    .more >>> .van-popover__action{
        width: 92px;
        font-size: 12px;
    }
    .wallter-icon{
        /* width: 2rem; */
        display: flex;
        justify-content: center;
        color: #ffffff;
        margin-top: .4rem;
    }
    .iconCont{
        width: 2rem;
        display: block;
        text-align: center;
    }
    .van-icon{
        display: block;
    }
    .wallter-cont{
        padding: .3rem;
    }
    .wallter{
        width: 6.87rem;
        height: 3rem;
        overflow: hidden;
        border-radius: .2rem;
        background: linear-gradient(-45deg,#3c78ff,#559df6);
    }
    .wallter-title,.wallter-money{
        text-align: center;
        color: #ffffff;
        margin-top: .5rem;
    }
    .wallter-title{
        font-size: .3rem;
    }
    .wallter-money{
        font-size: .4rem;
        margin-top: .3rem;
    }
</style>