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
                :num="this.$store.state.addCartModule.addCart.num"
                :price="this.$store.state.addCartModule.addCart.price"
                :desc="this.$store.state.addCartModule.addCart.desc"
                :title="this.$store.state.addCartModule.addCart.title"
                :thumb="this.$store.state.addCartModule.addCart.thumb"
            >
                <template #tags>
                    <tag plain type="danger">标签</tag>
                    <tag plain type="danger">标签</tag>
                    <div class="btn">
                        <button @click="reduce">-</button>
                        <input type="number" v-model="number">
                        <button @click="add">+</button>
                    </div>
                </template>
                <template #footer>
                    <Button  size="mini">按钮</Button >
                    <Button  size="mini">按钮</Button >
                </template>
            </Card>

            <div>
                <SubmitBar :price="price*num*number" decimal-length="2" button-text="提交订单" />
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
    mounted(){
        let name = localStorage.getItem('name');
        console.log(name);
        if(name !==  null){
            this.$router.push({path:'/car'});
            this.kong = false;
        }else {
            setTimeout(() => {
                this.$router.push({path:'/login'})
            },1000)
        }
    },
    data () {
        return  {
            number:1,
            price:this.$store.state.addCartModule.addCart.price,
            num:100,
            kong:true,
            img:require('../../assets/images/nullCart.png')
        }
    },
    methods:{
        //公共方法
        carNum(){
            this.$store.state.addCartModule.addCart.num = this.number;
        },
        reduce () {
            if(this.number <= 1) {
                return
            }
            this.number--;
            this.carNum();
        },
        add () {
            this.number++;
            this.carNum();
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