<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">修改密码</div>
		</div>
		
		<div id="submitForm">
			<Form>
				<Field
					v-model="username"
					name="用户名"
					label="用户名"
					placeholder="请输入用户名"
					:rules="[{ required: true, message: '请填写用户名' }]"
				/>
				<Field
					v-model="password"
					type="password"
					name="密码"
					label="密码"
					placeholder="请输入新密码"
					:rules="[{ required: true, message: '请填写密码' }]"
				/>
				<div style="margin: 16px;">
					<Button round block type="info" native-type="submit">提交</Button>
				</div>
			</Form>
		</div>
    </div>
</template>
<script>
import { Icon } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
	export default{
		components:{
			Icon,
			Form,
			Field,
			Button
		},
		data(){
			return {
				username: '',
				password: '',
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.cont{
		/* padding-top: var(--status-bar-height); */
	}
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
	.header button{
		margin-left: 0px;
		margin-right: .2rem;
		font-size:.4rem;
	}
	.header .name{
		font-size: .3rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.input-cont{
		padding: .2rem;
	}
	.inputWrite{
		padding: .12rem;
		border-radius: .1rem;
		box-shadow:0px 1px 10px 0px rgba(0,0,0,0.1);
	}
	.inputWrite input{
		padding: .1rem;
		font-size: .3rem;
		border-bottom: 1px dashed rgba(0,0,0,0.2);
	}
	#submitForm{
		padding: .2rem;
	}
</style>