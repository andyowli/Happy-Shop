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
            <ul class="myUse">
                <li @click="toNotShipped">
                    <img src="../../assets/images/personal/daifahuo.png">
                    <div class="listName">未发货</div>
                </li>
                <li @click="toShipped">
                    <img src="../../assets/images/personal/yifahuo.png">
                    <div class="listName">已发货</div>
                </li>
                <li @click="toBuy">
                    <img src="../../assets/images/personal/shouhou.png">
                    <div class="listName">全购买</div>
                </li>
            </ul>

            <ul class="chang">
                <li v-for="(item,index) in icons" :key="index" @click="getLists(item.method)">
                    <img :src="item.img">
                    <div class="listName">{{ item.text }}</div>
                </li>
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
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        border-radius: .2rem;
        background: linear-gradient(-45deg,#fc1c11,#fd5a3f);
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
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
    }
    .goodsList{
        padding: .2rem;
        position: absolute;
        top: 70%;
    }
    .myUse,.chang{
        width: 7.1rem;
        margin-bottom: .2rem;
        border-radius: 0.2rem;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;  
        -moz-flex-wrap: wrap;  
        -ms-flex-wrap: wrap;  
        -o-flex-wrap: wrap;  
        background-color: #ffffff;
    }
    .goodsList .myUse{
        justify-content: space-between;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
    }
    .goodsList .chang{
        justify-content: flex-start;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: flex-start;
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