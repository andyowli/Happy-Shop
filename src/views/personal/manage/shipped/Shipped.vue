<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">已发货</div>
		</div>

        <div>
            <Card
                v-for="(item,index) in cardList"
                :key="index"
                :num="item.num"
                :price="item.price"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.thumb"
            >
                <template #footer>
                    <Button size="small" type="info" @click="toWu(index)">查物流</Button>
                    <Button size="small" type="danger" @click="receiving(index)">确认收货</Button>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Card } from 'vant';
import { Button } from 'vant';
import { Toast } from 'vant';
export default {
    components:{
        Icon,
        Card,
        Button,
        Toast
    },
    data(){
        return {
            cardList:[
                {
                    num:1,
                    price:249,
                    desc:'德化白瓷，坚实耐用',
                    title:'欧式哑光系列餐具',
                    thumb:'http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png'
                },
                {
                    num:1,
                    price:268,
                    desc:'仅售供应商建议价的1/10',
                    title:'欧式哑光系列餐具',
                    thumb:'http://yanxuan.nosdn.127.net/1722352e99179109384e05cb7a260a33.png'
                }
            ]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        toWu(index){
            let arr = {
                num:this.cardList[index].num,
                price:this.cardList[index].price,
                desc:this.cardList[index].desc,
                title:this.cardList[index].title,
                thumb:this.cardList[index].thumb,
            }
            this.$store.commit('logisticsModule/Increment',arr);
            this.$router.push({path:'/logistics'});
        },
        receiving(index){
            Toast.success(' 确认成功！');
            this.cardList.splice(index,1);
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
    .van-button--default{
        background-color: #efefef;
    }
</style>