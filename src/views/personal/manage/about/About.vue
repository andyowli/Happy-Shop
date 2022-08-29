<template>
    <div>
        <div class="header">
			<Icon name="arrow-left" size="20" style="margin-left:.2rem;" @click="back"/>
			<div class="name">关于我</div>
		</div>

        <div class="logo">
            <img src="../../../../assets/images/logo.png">
            <span class="ver">Version 1.0</span>


            <div>
                <ul class="chooseContaion">
                    <li v-for="(item,index) in list" :key="index" >
                        <div class="choose">
                            <span class="choose-type">{{item.chooseType}}</span>
                        </div>
                        <div class="icon">
                            <span class="choose-entry">{{item.chooseEntry}}</span>
                            <Icon name="arrow" size="16"/>
                        </div>

                    </li>
                </ul>
            </div>
        </div>

        
    </div>
</template>

<script>
import { Icon } from 'vant';
export default {
    components:{
        Icon
    },
    data(){
        return {
            list:[
                {
                    chooseType:'新版本',
                    chooseEntry:'暂无更新',
                    method:'toSku'
                }
            ]
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
    .logo{
        position: absolute;
        top:45%;
        left: 50%;
        transform: translate(-50%, -50%); 
    }
    .logo img{
        width: 1.8rem;
        height: 1.8rem;
        display: block;
        margin: auto;
    }
    .logo .ver{
        display: block;
        font-size: .5rem;
        margin-top: .2rem;
        text-align: center;
        margin-bottom: .8rem;
    }

    .chooseContaion li{
        height: .6rem;
        list-style: none;
        /* background-color: #fff; */
        border-bottom: 1px dashed #cfcfcf;
    }
    .choose{
        width: 6rem;
        margin-top: .1rem;
    }
    .choose-type{
        color: #454545;
        font-size: .3rem;
        font-weight: 550;
        line-height: .5rem;
    }
    .choose-entry{
        font-size: .3rem;
        margin-left: .4rem;
    }
    li span{
        display: block;
        float: left;
    }
    .icon{
        width: 2rem;
        float: right;
    }
    .van-icon{
        display: block;
        line-height: .5rem;
    }
</style>