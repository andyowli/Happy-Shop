<template>
    <div class="card-container">
        <div class="card-img" v-if="kong">
            <Empty
                :image="img"
                image-size="140"
                description="购物车空空如也"
            />
        </div>
        <div v-else>
            <Card
                v-for="(item,goodIndex) in card"
                :key="item.id"
                :num="item.num"
                :price="item.price"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.thumb"
            >
                <template #tags>
                   
                    <div class="btn">
                        <button @click="reduce(goodIndex)">-</button>
                        <input type="number" :value="item.num">
                        <button @click="add(goodIndex)">+</button>
                    </div>
                </template>
                <template #footer>
                    <Button  size="mini" @click="del(goodIndex,item)">删除</Button >
                </template>
            </Card>

            <div>
                <SubmitBar :price="price*num" decimal-length="2" button-text="提交订单" />
            </div>
        </div>
    </div>
</template>

<script>
import { Card,tag,Button  } from 'vant';
import { SubmitBar } from 'vant';
import { Empty } from 'vant';
export default {
    components:{
        Card,
        tag,
        Button,
        SubmitBar ,
        Empty
    },
    data () {
        return  {
            price:'',
            num:100,
            kong:false,
            card:[],
            img:require('../../assets/images/nullCart.png')
        }
    },
    mounted(){
        const car = JSON.parse(localStorage.getItem('car'));
        this.card = car;
        if(this.card.length<1) {
            this.kong = true; 
        } else {
            this.total();
        }
    },
    methods:{
        total(){
            this.price = this.card.reduce((prev, next) => {
                return Number(prev) + Number(next.price * next.num);
            }, 0)
        },
        reduce(index) {
            if(this.card[index].num <= 1) {
                return 1
            }
            this.card[index].num--;
            this.total();
        },
        add(index) {
            this.card[index].num++
            this.total();
        },
        del(index,good){
            this.price = this.price - good.price * good.num;
            this.card.splice(index,1);
            if(this.price < 0) {
                this.price = 0;
            }
            if(this.card.length<1) {
                this.kong = true; 
            }
            let car = JSON.parse(localStorage.getItem('car')); 
            car.splice(index,1);  
            localStorage.setItem('car', JSON.stringify(car));
        }
    }
}
</script>

<style scoped>
.card-container,.card-img,.van-empty{
    height: 100%;
}
    .btn{
        position: absolute;
        left: 50%;
        top: 30%;
        display: flex;
    }
    .btn button{
        width: .6rem;
        height: .6rem;
    }
    .btn input{
        width: 1rem;
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
    .van-submit-bar{
        bottom: 52px;
    }
</style>