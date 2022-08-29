<template>
    <div class="contaion">
        <div class="location">
            <div class="logo">
                <img src="../../assets/images/mima.png">
            </div>
            <!-- <div class="title">
                <span>Login to</span>
                <span>shopping</span>
            </div> -->
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
                    placeholder="请输入新密码"
                    :rules="[{ required: true, message: '请填写密码' }]">
                    <template slot="right-icon">
                        <span class="solts" @click="switchPasswordType">
                            <Icon name="eye" v-if="passwordType==='password'"/>
                            <Icon name="closed-eye" v-else />
                        </span>
                    </template>
                </Field>
                <div class="btn-container">
                    <button class="btn" @click="submitReg">重置</button>
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
                Notify({ type: 'success', message: '密码重置成功！' });
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
        width: 2rem;
        height: 2rem;
        margin-bottom: .7rem;
        text-align: center;
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
    .btn-container{
        display: flex;
        justify-content: center;
    }
    .btn{
        color: #fff;
        background-color: #000000;
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