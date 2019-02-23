<template>
    <div class="wrap">
        <div class="header">
            <div class="flex">
                <div>
                    <img src="../../static/img/user.png">
                    <span>18826107955</span>
                </div>
                <span></span>
            </div>
        </div>
        <div class="orders">
            <p>我的订单</p>
            <div class="ordlis">
                <div><router-link to="/waitlist"><img src="../../static/img/daifukuan.png"/><span>待付款</span><b class="badge">1</b></router-link></div>
                <div><a><img src="../../static/img/daifahuo.png"/><span>待发货</span><b class="badge">1</b></a></div>
                <!--<div><a><img src="../../static/img/daifahuo.png"/><span>待付款</span></a></div>-->
                <div><a><img src="../../static/img/daishouhuo.png"/><span>待收货</span><b class="badge">1</b></a></div>
                <div><a><img src="../../static/img/dingdan.png"/><span>全部订单</span><b class="badge">1</b></a></div>
            </div>
        </div>
        <div class="orders">
            <p>其他</p>
            <div class="module">
                <div><a><img src="../../static/img/shouhuodizhi.png"/><span>收货地址</span></a></div>
                <div><a><img src="../../static/img/fenjidailli.png"/><span>分级代理</span></a></div>
            </div>
        </div>
        <bottomnav :pagenum="pagenum"></bottomnav>
    </div>
</template>

<script>
    import bottomnav from '@/components/bottomnav'
    export default {
        name: "usercenter",
        data(){
            return {
                pagenum:2
            }
        },
        components:{bottomnav}
    }
</script>

<style scoped>
    .wrap{
        width: 100%;
    }
    .header{
        width: 100%;
        color: #05607f;
    }
    .flex{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        box-sizing: border-box;
    }
    .flex>div{
        display: flex;
        align-items: center;
    }
    .flex>div>img{
        width: 5rem;
        height: 5rem;
        margin-right: 0.3rem;
    }
    .orders{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 1.2rem 1.5rem;
        border-bottom:1px gray solid ;
        border-top:1px gray solid ;
        margin-top: 1rem;
        background-color:white ;
    }
    .orders>p{
        width: 100%;
        text-align: left;
        margin: 0;
        font-weight: bolder;
        color: #ff7d00;
    }
    .ordlis{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        padding: 0 0.8rem;
    }
    .ordlis>div>a>img{
        width: 2rem;
        height: 2rem;
    }
    .ordlis>div>a{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .ordlis>div>a>span{
        font-size: 0.7rem;
        color: #05607f;
    }
    .module{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .module>div{
        width: 49%;
        display: flex;
        justify-content: center;
    }
    .module>div>a>img{
        width: 2.2rem;
        height: 2.2rem;
        margin-right: 0.3rem;
    }
    .module>div>a{
        display: flex;
        align-items: center;
    }
    .module>div>a>span{
        font-size: 0.9rem;
        color:#05607f;
    }
    .badge{
        display: block;
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: -2px;
        top: -5px;
        background-color: red;
        border: red;
        border-radius: 0.5rem;
        opacity: 0.9;
        color: white;
        font-size: 0.5rem;
        line-height: 1rem;
        font-weight: lighter;
    }
</style>