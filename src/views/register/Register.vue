<template>
    <div class="contaion">
        <div class="location">
            <div class="header">
                <div class="back" @click="back">
                    <Icon name="arrow-left" size="20"/>
                </div>
                <div class="name">
                    <span>Sign up</span>
                </div>
            </div>
            <div class="input-field">
                <Field
                    v-model="username"
                    name="账号"
                    label="账号"
                    placeholder="请输入账号"
                    :rules="[{ required: true, message: '请填写账号' }]">
                </Field>
                <Field
                    v-model="password"
                    :type="passwordType"
                    name="密码"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]">
                    <template slot="right-icon">
                        <span class="solts" @click="switchPasswordType">
                            <Icon name="eye" v-if="passwordType==='password'"/>
                            <Icon name="closed-eye" v-else />
                        </span>
                    </template>
                </Field>
                <div class="btn-container">
                    <button class="btn" @click="submitReg">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Field } from 'vant';
import { Icon } from 'vant';
import { Toast } from 'vant';
import { Notify } from 'vant';
export default {
    components:{
        Field,
        Icon,
        Toast,
        Notify
    },
    data() {
        return {
            username:'',
            password:'',
            passwordType: 'password',//输入框类型
        }
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        switchPasswordType() {
            this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
        },
        submitReg(){
            if(this.username == ''){
                Toast.fail('账号不能为空');
            }else if(this.password == ''){
                Toast.fail('密码不能为空');
            }else if(this.username !== '' || this.password == !''){
                Notify({ type: 'success', message: '注册成功！' });
            }
        }
    }
}
</script>

<style scoped>
    .contaion{
        height: 100%;
        position: relative;
    }
    .location{
        position: absolute;
        top:30%;
        left: 50%;
        transform: translate(-50%, -30%); 
    }
    .header{
        width: 100%;
        height: .88rem;
        margin-bottom: .3rem;
        position: relative;
    }
    .header .name{
        font-size: .3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .header,.back,.register{
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
    }
    .back,.register{
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .back{
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
        background-color: #fff;
        margin-left: .4rem;
    }
    .van-icon{
        display: block;
    }
    span{
        font-size: .45rem;
        font-weight: 550;
    }
    span:nth-child(2){
        margin-left: .15rem;
        color: #184efa;
    }
    .input-field{
        width: 6rem;
        padding: .3rem;
    }
    .van-field{
        border-radius: .2rem;
        margin-bottom: .4rem;
    }
    .register{
        font-weight: 550;
        background-color: #e9ecf5;
    }
    .btn{
        width: 6rem;
        display: block;
        color: #fff;
        font-size: .34rem;
        padding: .2rem;
        margin: auto;
        border: none;
        border-radius: .2rem;
        background-color: #1989fa;
    }
</style>