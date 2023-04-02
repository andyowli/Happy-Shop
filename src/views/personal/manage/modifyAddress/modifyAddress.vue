<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">修改地址</div>
		</div>

        <div>
            <AddressEdit
                :address-info="info"
                :area-list="areaList"
                show-set-default
                show-search-result
                
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
var _ = require("lodash");
export default {
    components:{
        Icon,
        AddressEdit
    },
    data(){
        return {
            areaList,
            areaCode:'',
            searchResult: [],
            address:[],
            info:{
                name:this.$store.state.modifyModule.address.name,
                tel:this.$store.state.modifyModule.address.tel,
                addressDetail:this.$store.state.modifyModule.address.address
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        onSave(content){
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
</style>