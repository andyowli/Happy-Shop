<template>
    <div class="main">
        <div class="header" v-for="(item,index) in head" :key="index">
            <div class="header-img">
                <img :src="item.img">
            </div>
            <div class="header-title">
                <span>{{item.userName}}</span>
            </div>
        </div>
        <div class="goodsList">
            <ul>
                <div class="title">我的订单</div>
                <div class="myUse">
                    <li 
                    v-for="order in myOrder" 
                    :key="order.title"
                    @click="getLists(order.method)"
                    >
                        <img :src="order.image">
                        <div class="listName">{{ order.title }}</div>
                    </li>
                </div>
            </ul>

            <ul>
                <div class="title">更多服务</div>
                <div class="chang">
                    <li 
                    v-for="item in icons" 
                    :key="item.title" 
                    @click="getLists(item.method)"
                    >
                        <img :src="item.img">
                        <div class="listName">{{ item.text }}</div>
                </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Icon,Grid,GridItem } from 'vant'
    export default {
        components:{
            Icon,
            Grid,
            GridItem 
        },
        data () {
            return {
                myOrder:[
                    {image:require('../../assets/images/personal/daifahuo.png'),title:'未发货',method:'toNotShipped'},
                    {image:require('../../assets/images/personal/yifahuo.png'),title:'已发货',method:'toShipped'},
                    {image:require('../../assets/images/personal/shouhou.png'),title:'全购买',method:'toBuy'}
                ],
                icons:[
                    {img:require('../../assets/images/personal/user.png'),text:'账号管理',method:'toUser'},
                    {img:require('../../assets/images/personal/qianbao.png'),text:'我的钱包',method:'toWallter'},
                    {img:require('../../assets/images/personal/dizhi.png'),text:'地址管理',method:'toAddress'},
                    {img:require('../../assets/images/personal/youhui.png'),text:'优惠券',method:'toCoupon'},
                    {img:require('../../assets/images/personal/tousujianyi.png'),text:'反馈',method:'toFeedback'},
                    {img:require('../../assets/images/personal/bangzhu.png'),text:'帮助',method:'toHelp'},
                    {img:require('../../assets/images/personal/guanyuwomen.png'),text:'关于',method:'toAbout'}
                ],
                head:[
                    {img:require('../../assets/images/User.png'),userName:'未登录'}
                ]
            }
        },
        mounted(){
            let name = localStorage.getItem('name');
            if(name !==  null){
                this.$router.push({path:'/personal'});
                this.head[0].img = 'https://img01.yzcdn.cn/vant/cat.jpeg';
                this.head[0].userName = name;
            }else {
                setTimeout(() => {
                    this.$router.push({path:'/login'});
                },1000)
            }
        },
        methods:{
            getLists:function(itemMethods){
                this[itemMethods]();
            },
            toUser(){
                this.$router.push({path:'/user'});
            },
            toAddress(){
                this.$router.push({path:'/address'});
            },
            toWallter(){
                this.$router.push({path:'/wallter'});
            },
            toNotShipped(){
                this.$router.push({path:'/notshipped'});
            },
            toShipped(){
                this.$router.push({path:'/shipped'});
            },
            toBuy(){
                this.$router.push({path:'/buyAll'});
            },
            toCoupon(){
                this.$router.push({path:'/coupon'});
            },
            toHelp(){
                this.$router.push({path:'/help'});
            },
            toFeedback(){
                this.$router.push({path:'/feedback'});
            },
            toAbout(){
                this.$router.push({path:'/about'});
            }
        }
    }
</script>

<style scoped>
    .main{
        position: relative;
    }
    .header{
        height: 3rem;
        align-items: center;
        border-radius: .2rem;
        background: linear-gradient(-40deg,#ff4f1c,#ff7543);
    }
    .header-img img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-left: .4rem;
    }
    .header-title{
        font-size: .32rem;
        margin-left: .2rem;
    }
    .header,.myUse,.chang{
        display: flex;
    }
    .goodsList{
        padding: .2rem;
        position: absolute;
        top: 70%;
    }
    .title{
        font-size: .2rem;
        font-weight: 550;
        padding: .2rem 0 0 .36rem;
        border-top-left-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
        background-color: #ffffff;
    }
    .myUse,.chang{
        width: 7.1rem;
        margin-bottom: .2rem;
        margin-top: -.1rem;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        flex-wrap: wrap;
        background-color: #ffffff;
    }
    .goodsList .myUse{
        justify-content: space-between;
    }
    .goodsList .chang{
        justify-content: flex-start;
    }
    .goodsList li {
        padding: .2rem;
        flex: 1;
        width: 19%;
        min-width: 19%;
        max-width: 19%;
        text-align: center;
    }
    li img{
        width: .6rem;
        height: .6rem;
        margin: auto;
        display: block;
    }
    .goodsList .listName,.grid-text{
        font-size: .24rem;
    }
</style>