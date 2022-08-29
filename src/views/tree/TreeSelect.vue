<template>
    <div id="treeList">
        <TreeSelect 
        :items="items"
        :main-active-index.sync="active">
            <template #content>
               <ul class="list" v-if="active === 0">
                    <li class="cateItem" v-for="(item, index) in arr[0].subCateList" :key="index">
                        <a href="javascript:;">
                            <div class="cateImgWrapper">
                                <img :src="item.wapBannerUrl" alt="" class="cateImg">
                                <div class="name">{{item.name}}</div>
                            </div>
                        </a>
                    </li>
               </ul>

                <ul class="list" v-if="active === 1">
                        <li class="cateItem" v-for="(item, index) in arr[1].subCateList" :key="index">
                            <a href="javascript:;">
                                <div class="cateImgWrapper">
                                    <img :src="item.wapBannerUrl" alt="" class="cateImg">
                                    <div class="name">{{item.name}}</div>
                                </div>
                            </a>
                        </li>
                </ul>

                <ul class="list" v-if="active === 2">
                    <li class="cateItem" v-for="(item, index) in arr[2].subCateList" :key="index">
                        <a href="javascript:;">
                            <div class="cateImgWrapper">
                                <img :src="item.wapBannerUrl" alt="" class="cateImg">
                                <div class="name">{{item.name}}</div>
                            </div>
                        </a>
                    </li>
               </ul>
        </template>
        </TreeSelect>
    </div>
</template>

<script>
import { TreeSelect } from 'vant';
import model from './SortModel'
export default {
    components:{
        TreeSelect
    },
    data () {
        return {
            items: [{ text: '推荐' }, { text: '服饰' }, { text: '出行' }],
            active: 0,
            subInfo: null,
            arr:[]
        }
    },
    async created (){
        this.arr = model.categoryList;
        console.log(this.arr)
    }
}
</script>

<style scoped>
    .cateItem .name {
        height: .4rem;
        font-size: .24rem;
        color: #333;
        text-align: center;
        line-height: .34rem;
    }
    .cateItem {
        padding: .18rem;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        float: left;
    }
    .cateItem .cateImg{
        width: 1.3rem;
        height: 1.3rem;
    }
    #treeList{
        height: 100%;
    }
    .van-tree-select{
        height: 100% !important;
    }
</style>