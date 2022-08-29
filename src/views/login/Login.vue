<template>
    <div class="contaion">
        <div class="location">
            <div class="logo">
                <img src="../../assets/images/logo.png">
            </div>
            <div class="title">
                <span>登录到</span>
                <span>购物</span>
            </div>
            <div class="input-field">
                <Field
                    v-model="username"
                    name="用户名"
                    label="用户名"
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
                    <button class="register">
                        <router-link to="/register">
                            <img src="../../assets/images/zhuce.png">
                            注册
                        </router-link>
                    </button>
                    <button class="btn" @click="submitReg">登录</button>
                </div>
            </div>
        </div>
        <div class="forget">
            忘记密码请点 <span @click="forPas">此处</span>
        </div>
    </div>
</template>

<script>
import { Field } from 'vant';
import { Icon } from 'vant';
import { Toast } from 'vant';
export default {
    components:{
        Field,
        Icon,
        Toast,
    },
    data() {
        return {
            username:'',
            password:'',
            passwordType: 'password',//输入框类型
        }
    },
    methods: {
        switchPasswordType() {
            this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
        },
        forPas(){
            this.$router.push({path:'/forget'})
        },
        submitReg(){
            if(this.username == ''){
                Toast.fail('账号不能为空');
            }else if(this.password == ''){
                Toast.fail('密码不能为空');
            }else if(this.username !== '' || this.password == !''){
                this.$router.push({path:'/'});
                localStorage.setItem('name',this.username);
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
    .logo{
        display: flex;
        justify-content: center;
    }
    .logo img{
        width: 1rem;
        height: 1rem;
        text-align: center;
    }
    .title{
        text-align: center;
        margin-bottom: .7rem;
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
    .register a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 550;
        background-color: #e9ecf5;
    }
    a:visited{
        color: #1d1d1f;
    }
    .register img{
        width: .6rem;
        height: .6rem;
    }
    .btn-container{
        display: flex;
        justify-content: space-between;
    }
    .btn{
        color: #fff;
        border: none;
        background-color: #1989fa;
    }
    .register{
        border: 1.5px solid #1d1d1f;
    }
    .register,.btn{
        width: 2.9rem;
        font-size: .3rem;
        padding: .1rem;
        border-radius: .2rem;
    }
    .forget{
        text-align: center;
        position:fixed;
        margin:auto;
        left:0;
        right:0;
        bottom:0;
        width:6rem;
        height:3rem;
    }
    .forget,.forget span{
        font-size: .34rem;
    }
    .forget span{
        color: #184efa;
    }
</style>