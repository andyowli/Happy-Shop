<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">提现</div>
		</div>

        <div style="padding:.3rem">
            <Field
                readonly
                clickable
                label="到银行卡"
                :value="backValue"
                placeholder="选择银行卡"
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
                v-model="value" 
                label="￥" 
                placeholder="请输入金额" 
                @focus="oninputCode"
                @blur="blurInput"
            />
            <NumberKeyboard
                :show="show"
                theme="custom"
                :extra-key="['00', '.']"
                close-button-text="完成"
                @blur="show = false"
                @delete="onDelete"
                @input="onInput"
                @close="onClose"
            />
            <div class="btn">
                <Button type="danger">提现</Button>
            </div>
            
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Field } from 'vant';
import { NumberKeyboard } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Button } from 'vant';
export default{
    components:{
        Icon,
        Field,
        Popup,
        Picker,
        Button,
        NumberKeyboard
    },
    data(){
        return {
            show:false,
            value:'',
            backValue:'',
            showPicker: false,
             columns: [
                '工商银行卡',
                '建设银行卡',
            ]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        //数字键盘输入数字事件
        onInput(key){
            this.value += key;
        },
        //数字键盘删除事件
        onDelete(){
           this.value = this.value.slice(0, this.value.length - 1);
        },
        onConfirm(value) {
            this.backValue = value;
            this.showPicker = false;
            console.log(this.value);
        },
        oninputCode(){
            this.show = true;
        },
        blurInput(){
            this.show = false;
        },
        onClose(){
            this.show = false;
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
    ::v-deep .van-field__label{
        font-size: 18px;
    }
    .btn{
        text-align: center;
    }
    .van-button--danger{
        width: 280px;
        border-radius: 1rem;
    }
</style>