<template>
    <div>
        <div class="mainImg">
            <img src="http://yanxuan.nosdn.127.net/3369d833cf44798fef1d637c4d5f9c0f.jpg">
            <div class="backImg" @click="back">
                <img src="../../assets/images/fanhuib.png">
            </div>
        </div>

        <div class="goodTitle" v-for="(head,indx) in title" :key="indx">
            <div class="goods-price">
                <span>{{head.money}}</span>
            </div>
            <div class="goods-title">
                <span>{{head.text}}</span>
            </div>
            <div class="goods-shipping">
                <span>{{head.ship}}</span>
            </div>
        </div>

        <div>
            <ul class="chooseContaion">
                <li v-for="(item,index) in goodsList" :key="index" @click="getLists(item.method)">
                    <div class="choose">
                        <span class="choose-type">{{item.chooseType}}</span>
                        <span class="choose-entry">{{item.chooseEntry}}</span>
                    </div>
                    <div class="icon">
                        <Icon name="arrow" size="16"/>
                    </div>

                </li>
            </ul>
        </div>

        <!-- 商品规格 -->
        <div>
            <Sku
                v-model="show"
                :sku="sku"
                :goods="goods"
                :goods-id="sku.id"
                :properties="properties"
                :hide-stock="sku.hide_stock"
                @stepper-change="change"
                @add-cart="addCart"
            />
        </div>

        <!-- 地址 -->
        <transition name="slide-fade">
            <div class="address" v-show="showAddress">
                <Area 
                    title="标题" 
                    :area-list="areaList" 
                    :columns-placeholder="['请选择', '请选择', '请选择']"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                />
            </div>
        </transition>

        <!-- 用户评价 -->
        <div class="comment">
            <div class="comment-title">
                <span>商品评价</span>
                <Icon name="arrow" size="16"/>
            </div>
            <ul>
                <li v-for="(cont,ind) in comments" :key="ind">
                    <div class="userImg">
                        <img :src="cont.image">
                        <span>{{cont.name}}</span>
                    </div>
                    <div>
                        <p class="text-content">{{cont.text}}</p>
                    </div>
                </li>
            </ul>
        </div>

        <div style="height:.5rem"></div>

        <div>
            <GoodsAction>
                <GoodsActionIcon icon="chat-o" text="客服"  />
                <GoodsActionIcon icon="cart-o" text="购物车"  />
                <GoodsActionIcon icon="shop-o" text="店铺"  />
                <GoodsActionButton
                    type="danger"
                    text="立即购买"
                    @click="onClickButton"
                />
            </GoodsAction>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Sku } from 'vant';
import { Area } from 'vant';
import { areaList } from '@vant/area-data'; //省市区
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
export default {
    components:{
        Icon,
        Sku,
        Area,
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton
    },
    data(){
        return {
            title:[
                {
                    money:'￥219',
                    text:'全棉针织条纹四件套 新款',
                    ship:'包邮'
                }
            ],
            goodsList:[
                {
                    chooseType:'选择',
                    chooseEntry:'颜色、款式',
                    method:'toSku'
                },{
                    chooseType:'配送',
                    chooseEntry:'四川省 成都市 高新区',
                    method:'toAddress'
                },{
                    chooseType:'运费',
                    chooseEntry:'此商品包邮'
                },{
                    chooseType:'说明',
                    chooseEntry:'7天无理由退货·正品保障'
                }
            ],
            comments:[
                {
                    name:'宇文所拓',
                    image:require('../../assets/images/01.jpg'),
                    text:'颜色特别温柔，看着就很舒服，洗完了就套上了，感受了一下，很亲肤，一直是严选的忠实粉丝，家里的家具和生活用品几乎都是严选，希望严选越做越好！'
                },
                {
                    name:'cc酱',
                    image:require('../../assets/images/02.jpg'),
                    text:'实物和图片一样好，无色差，做工精致，面料柔软，很亲肤！'
                },
            ],
            showAddress:false,
            areaList,  //省市区数据列表
            regiondata:'', //保存选择的省市区
            goodNum:1, //保存选择购买的商品数量
            show: false,
            // goodsId:this.sku.list.id,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: '颜色', // skuKeyName：规格类目名称
                        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: '1', // skuValueId：规格值 id
                                name: '绿色', // skuValueName：规格值名称
                                imgUrl: 'http://yanxuan.nosdn.127.net/3369d833cf44798fef1d637c4d5f9c0f.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: 'http://yanxuan.nosdn.127.net/3369d833cf44798fef1d637c4d5f9c0f.jpg', // 用于预览显示的规格类目图片
                            }
                        ],
                        largeImageMode: true, //  是否展示大图模式
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId
                        s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                        // s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 219*100, // 价格（单位分）
                        stock_num: 227 // 当前 sku 组合对应的库存
                    }
                ],
                price: '219', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: 'http://yanxuan.nosdn.127.net/31686ece0fb7a957c2af0c05bd0644ca.jpg'
            },
            properties:[
                // 商品属性
                {
                    k_id: 123, // 属性id
                    k: '尺寸', // 属性名
                    is_multiple: false, // 是否可多选
                    v: [
                        {
                            id: 1222, // 属性值id
                            name: '1.5m床:适用2mx2.3m被芯', // 属性值名
                            price: 0, // 属性值加价
                        },
                        {
                            id: 1223,
                            name: '1.8m床:适用2.2mx2.4m被芯',
                            price: 0,
                        }
                    ],
                }
            ]
        }
    },
    methods:{
        getLists:function(itemMethods){
            this[itemMethods]();
        },
        back(){
            this.$router.go(-1);
        },
        toSku(){
            this.show = true;
            console.log(111);
        },
        toAddress(){
            this.showAddress = true;
        },
        onConfirm(e){
            this.regiondata = e
            this.goodsList[1].chooseEntry = `${this.regiondata[0].name + '\xa0' + this.regiondata[1].name + '\xa0' + this.regiondata[2].name}`
        },
        onCancel(){
            this.showAddress = false;
        },
        //名字中间替换成星号
        processName(){
            let newStr;
            for(let i = 0; i<this.comments.length; i++){
                console.log(this.comments[i].name)
                if (this.comments[i].name.length >= 2) {
                    newStr = this.comments[i].name.substring(0, 1) + '*';
                    this.comments[i].name = newStr;
                }
            }
        },
        addCart(){
            let arr = {
                num:this.goodNum,
                price:this.sku.price,
                desc:'描述信息',
                title:this.title[0].text,
                thumb:this.sku.tree[0].v[0].imgUrl
            }
            this.$store.commit('addCartModule/getItem',arr);
            localStorage.setItem('car',JSON.stringify(arr));
            this.$router.push({path:'/car'});
        },
        change(number){
            console.log(number);
            this.goodNum = number;
        },
        onClickButton() {
            this.show = true;
        },
    },
    mounted(){
        this.processName();
    }
}
</script>

<style scoped>
    .mainImg{
        position: relative;
    }
    .mainImg img{
        width: 100%;
        height: 6rem;
    }
    .backImg{
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        background-color: #b8b8bb;
        position: absolute;
        top: .4rem;
        left: .3rem;
    }
    .backImg img{
        display: block;
        height: .4rem;
        position: absolute;
        top: .1rem;
        /* left: .3rem; */
    }
    .goodTitle,ul{
        margin-bottom: .2rem;
    }
    .goodTitle,ul,.comment{
        padding: .2rem;
        background-color: #ffffff;
    }
    .goods-price{
        font-size: .4rem;
        margin-bottom: .3rem;
    }
    .goods-title{
        font-size: .3rem;
         margin-bottom: .1rem;
    }
    .goods-shipping{
        width: .8rem;
        font-size: .26rem;
        text-align: center;
        color: #8ba0b6;
        background-color: #fee7db;
    }
    .chooseContaion li{
        height: .6rem;
    }
    .chooseContaion li,.comment li{
        list-style: none;
        border-bottom: 1px dashed #cfcfcf;
    }
    li span{
        display: block;
        float: left;
    }
    .icon{
        float: right;
    }
    .van-icon{
        display: block;
        line-height: .5rem;
    }
    .choose{
        width: 7rem;
        margin-top: .1rem;
    }
    .choose-type{
        color: #454545;
        font-size: .26rem;
        font-weight: 550;
        line-height: .5rem;
    }
    .choose-entry{
        font-size: .32rem;
        margin-left: .4rem;
    }
    .content {
        padding: 16px 16px 160px;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(60px);
        opacity: 0;
    }
    .comment-title{
        display: flex;
        font-size: .3rem;
        align-items: center;
        justify-content: space-between;
    }
    .userImg img{
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
    }
    .userImg{
        font-size: .3rem;
        display: flex;
        align-items: center;
        margin-bottom: .2rem;
    }
    .userImg span{
        margin-left: .2rem;
    }
    .text-content{
        font-size: .26rem;
        margin-bottom: .2rem;
    }
    .comment li{
        padding-top: .3rem;
    }
    .van-goods-action{
        border-top: 1px solid #ccc;
    }
</style>