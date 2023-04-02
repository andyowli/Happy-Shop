<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">收货地址</div>
		</div>
        <div style="padding:.3rem">
            <Form>
                <Field
                    v-model="bankNumber"
                    type="number"
                    name="银行卡号"
                    label="银行卡号"
                    placeholder="请输入卡号"
                    :rules="[{ required: true, message: '请填写卡号' }]"
                />
                <!-- <Cell is-link title="基础用法" @click="show = true" />
                <ActionSheet v-model="show" :actions="actions"  close-on-click-action @select="onSelect" /> -->
                <Field
                    readonly
                    clickable
                    label="选择银行"
                    :value="value"
                    placeholder="选择银行"
                    @click="showPicker = true"
                />
                <Popup v-model="showPicker" round position="bottom">
                    <Picker
                        show-toolbar
                        :columns="columns"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                    />
                </Popup>
                <Field
                    v-model="phone"
                    type="number"
                    name="手机号"
                    label="手机号"
                    placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请填写手机号' }]"
                />
                <Field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                >
                    <template #button>
                        <Button size="small" type="primary" @click="sendSmsCode">{{sendBtnText}}</Button>
                    </template>
                </Field>
                <div style="margin: 16px;">
                    <Button round block type="info">提交</Button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Icon } from 'vant';
import { Notify } from 'vant';
export default {
    components:{
        Form,
        Field,
        Button,
        Picker,
        Popup,
        Icon,
        Notify
    },
    data(){
        return {
            bankNumber:'',
            phone:'',
            sms:'',
            sendBtnText: '发送验证码',
            showPicker: false,
            value: '', //相当于v-model
            columns: [
                '工商银行',
                '建设银行',
                '农业银行',
                '中国银行',
                '交通银行',
                '招商银行',
                '浦发银行',
                '兴业银行',
                '民生银行',
                '光大银行',
            ],
            // 计时器对象
            timer: null,
            // 倒数60秒
            counter: 60
        }
    },
    methods:{
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
            console.log(this.value);
        },
        back(){
            this.$router.go(-1);
        },
        sendSmsCode(){
            // 判断手机号是否已经输入
            if (!this.phone) {
                Notify('请输入手机号')
                return false
            }
            // 判断手机号是否符合要求
            if (this.phone.length !== 11) {
                Notify('请输入11位手机号')
                return false
            }
            this.countDown()  // 这里实现倒计时的功能
        },
        countDown () {
            // 将setInterval()方法赋值给前面定义的timer计时器对象，等用clearInterval()方法时方便清空这个计时器对象
            this.timer = setInterval(() => {
            // 替换文本，用es6里面的``这个来创建字符串模板，让秒实时改变
            this.sendBtnText = `(${this.counter}秒)后重新发送`
            this.counter--
            if (this.counter < 0) {
                // 当计时小于零时，取消该计时器
                clearInterval(this.timer)
                this.reset()
            }
            }, 1000)
        },
        reset () {
            // 重置按钮可用
            this.isSmsSend = false
            // 重置文本内容
            this.sendBtnText = '点击发送验证码'
            if (this.timer) {
            // 存在计时器对象，则清除
            clearInterval(this.timer)
            // 重置秒数，防止下次混乱
            this.counter = 60
            // 计时器对象重置为空
            this.timer = null
            }
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
		/* justify-content: space-between; */
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