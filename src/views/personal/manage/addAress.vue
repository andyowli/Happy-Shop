<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">收货地址</div>
		</div>

        <div>
            <AddressEdit
                :area-list="areaList"
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
            />
        </div>
    </div>
</template>

<script>
import { AddressEdit } from 'vant';
import { Icon } from 'vant';
import { areaList } from '@vant/area-data';
export default {
    components:{
        Icon,
        AddressEdit
    },
    data(){
        return {
            areaList,
            searchResult: [],
            address:[]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        onSave(content){
            this.address.push(content);
            console.log( this.address);
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
</style>