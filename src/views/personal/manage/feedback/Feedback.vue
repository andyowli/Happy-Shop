<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">意见反馈</div>
		</div>

        <div class="title">
            <span>请描述你遇到的问题类型</span>
            <div class="type">
                <div 
                class="type-title"  
                :class="{active: currentIndex === index}" 
                v-for="(item,index) in type" 
                :key="item.title" 
                @click="liClick(index)">
                    {{item.title}}
                </div>
            </div>
        </div>

        <div class="title">
            <span>请文字描述你的问题</span>
            <Field
                v-model="message"
                rows="2"
                autosize
                label="留言"
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />
        </div>

        <div class="title">
            <span>请上传图片</span>
            <div class="upload">
                <Uploader v-model="fileList" multiple />
            </div>
        </div>

        <div class="btn">
            <Button type="info">提交反馈</Button>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Uploader } from 'vant';
export default {
    components:{
        Icon,
        Field,
        Button,
        Uploader
    },
    data(){
        return {
            currentIndex: 0,
            message:'',
            type:[
                {title:'功能问题'},
                {title:'技术问题'},
                {title:'需求反馈'},
                {title:'其他'},
            ],
            fileList: [
                
            ],
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        liClick(index) {
            this.currentIndex = index
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
		align-items: center;
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
    .header,.type{
        display: flex;
    }
    .title{
        font-size: .3rem;
        padding: .3rem;
    }
    .title span{
        display: inline-block;
    }
    .type{
        justify-content: space-between;
    }
    .type-title{
        width: 1.2rem;
        border-radius: 1rem;
        padding: .2rem;
        font-size: .26rem;
        text-align: center;
        background-color: #d4d4d4;
    }
    .active {
        color: #fff;
        background-color: #1989fa;
    }
    .van-cell,.type,.upload,.btn{
        margin-top: .4rem;
    }
    .van-button{
        width: 6rem;
        display: block;
        margin: auto;
        border-radius: 1rem;
    }
</style>