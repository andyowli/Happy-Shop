<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">未发货</div>
		</div>
        <Card
            v-for="item in notShipped"
            :key="item.title"
            :num="item.num"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
        />
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Card } from 'vant';
export default {
    components:{
        Icon,
        Card
    },
    data(){
        return {
            notShipped:[
                {
                    num:"1",
                    price:"599",
                    desc:"优质莱卡和纯棉面料，和风家居新体验",
                    title:"日式和风懒人沙发",
                    thumb:"http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
                },
                {
                    num:"1",
                    price:"1399",
                    desc:"冈村椅制造商携手打造",
                    title:"多功能人体工学转椅",
                    thumb:"http://yanxuan.nosdn.127.net/7880da24e96f6e18916b16d0f1482369.png"
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
    .van-card{
        background-color: #fff;
    }
</style>