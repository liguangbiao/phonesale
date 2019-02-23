<template>
    <div>
        <div id="head">
            <div>
                <p>等待付款</p>
                <p>待付款...</p>
            </div>
            <div>
                <a>取消订单</a>
                <a>完成付款</a>
            </div>
        </div>

        <div id="content">
            <p><span>订单号：</span>16549874654</p>
            <p><span>下单时间：</span>2018-9-28 12:25</p>
            <div>
                <span>收货信息：</span>
                <div>
                    <span>张三</span><span>18826107956</span>
                    <p>广东广东广东广东广东广东广东</p>
                </div>
            </div>
        </div>

        <div class="choose">
            <a><img src="../../static/img/1536120217(1).png"></a>
            <div>
                <span><a href="clothesdetails.html">苹果IphoneX 64G深灰</a></span>
                <span>6+128g/黑色/黑色/黑色/黑色<span class="count">x6</span><span class="money">￥8888</span></span>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped>
    #head{
        margin-top:3.4rem;
        background-color:white;
        display:flex;
        padding:0 1rem;
        justify-content:space-between;
        align-items: center;
    }
    #head>div>p:first-child{
        margin:0.6rem 0.6rem 0.3rem 0.6rem;
        color:#FF4645;
        font-size:16px;
    }
    #head>div>p:last-child{
        margin:0 0.6rem 0.2rem 0.6rem;
        font-size:12px;
    }
    #head>div>a{
        display:inline-block;
        padding:0.4rem 0.8rem;
        border:1px #FF4645 solid;
        color:#FF4645;
        border-radius:5px;
        font-size:15px;
    }
    #content{
        background-color:white;
        padding:0.6rem 1.3rem;
        margin-top:0.5rem;
        color:#515154;
        text-align: left;
    }
    #content p,span{
        color:#515154
    }
    #content>p{
        margin:0.2rem;
    }
    #content>p>span{
        display:inline-block;
        width:5rem;
    }
    #content>div{
        display:flex;
        padding:0 0.2rem;
    }
    #content>div>span{
        display:inline-block;
        width:5rem;
        font-size:14px;
        color:#515154
    }
    #content>div>div>span{
        display:inline-block;
        font-size:14px;
        color:#515154
    }
    #content>div>div>span:nth-child(2){
        margin-left:2rem;
    }
    .choose{
        width: 100%;
        padding: 1rem 0.5rem 0.5rem 0.5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-bottom: #cdcdcd 1px solid;
        flex-wrap: wrap;
        background-color:white;
        margin-top:0.5rem;
    }
    .choose>a{
        display: inline-block;
        width: 20%;
        height: 4rem;
    }
    .choose>a>img{
        width: 100%;
        height: 100%;
    }
    .choose>div{
        display: inline-block;
        width:73%;
        padding-bottom: 0.3rem;
    }
    .choose>div>span:first-child{
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 0 0;
        text-align: left;
    }
    .choose>div>span:first-child>a{
        width: 65%;
        display: block;
        font-size: 0.8rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        color: #3f413b;
    }
    .choose>div>span:first-child>span{
        font-size: 1.5rem;
        color: black;
    }
    .choose>div>span:nth-child(2){
        display: block;
        font-size: 0.6rem;
        color: #cdcdcd;
        margin: 0.8rem 0.1rem 0.2rem 0.1rem;
        letter-spacing: 1px;
        text-align: left;
    }
    .choose>p{
        width: 100%;
        display: block;
        margin: 0.3rem 0 0.1rem 0;
        text-align: right;
        padding: 0 1rem;
        color: #8a8a83;
        font-size: 0.8rem;
    }
    .choose>p>span{
        font-size: 0.9rem;
        color: #e60012;
    }
    .count{
        margin-left:1rem;
        font-size:24px;
    }
    .money{
        position: absolute;
        right: 0;
        font-size: 1.5rem;
        color: #FF4645;
        margin-right: 10px;
        margin-top: -39px;
    }
</style>