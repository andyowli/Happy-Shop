<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">修改密码</div>
		</div>
		
		<div>
            <AddressList
                v-model="chosenAddressId"
                :list="list"
                :disabled-list="disabledList"
                disabled-text="以下地址超出配送范围"
                default-tag-text="默认"
                @add="add"
				@edit="edit"
            />
        </div>
    </div>
</template>
<script>
import { AddressList } from 'vant';
import { Icon } from 'vant';
	export default{
		components:{
			AddressList,
            Icon
		},
		data(){
			return {
				chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                        isDefault: true,
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号',
                    },
                ],
                disabledList: [
                    {
                        id: '3',
                        name: '王五',
                        tel: '1320000000',
                        address: '浙江省杭州市滨江区江南大道 15 号',
                    },
                ],
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
            add(){
                this.$router.push({path:'/addAddress'});
            },
			edit(item,index){
				// console.log(item);
				let arr = {
					name:item.name,
					tel:item.tel,
					address:item.address
				}
				this.$store.commit('modifyModule/getAddress',arr);
				this.$router.push({path:'/modify'});
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
	.van-address-list__bottom{
		bottom: 10px;
		background-color: transparent;
	}
</style>