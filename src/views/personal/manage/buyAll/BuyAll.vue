<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">全部购买</div>
		</div>

        <div>
            <SwipeCell :before-close="close"  v-for="(item,index) in cardList" :key="index">
                <Card
                    :num="item.num"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.thumb"
                />
                <template #right>
                    <Button square text="删除" type="danger" class="delete-button"></Button>
                </template>
            </SwipeCell>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Card } from 'vant';
import { Button } from 'vant';
import { Dialog } from 'vant';
import { SwipeCell } from 'vant';
export default {
    components:{
        Icon,
        Card,
        Button,
        SwipeCell
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
        close({ position, instance },index){
            switch (position) {
                case 'left':
                case 'cell':
                case 'outside':
                instance.close();
                break;
                case 'right':
                Dialog.confirm({
                    message: '确定删除吗？',
                }).then(() => {
                    this.cardList.splice(index,1);
                    instance.close();
                });
                break;
            }
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
    .card-contion{
        margin-bottom: .2rem;
    }
    .van-card{
        background-color: #fff;
    }
    .van-button--default{
        background-color: #efefef;
    }
    .delete-button {
        height: 100%;
    }
</style>