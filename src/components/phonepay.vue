<template>
    <div id="content">
        <div class="address">
            <span>收货人:李广标</span>
            <span>18826107955</span>
            <span>收货地址:广东省某某某某某某某某某某某某某某</span>
        </div>
        <div class="addaddress"><router-link to="/auaddress">+使用新的收货地址</router-link></div>
        <!--<div class="flex">-->
            <!--<span>订单编号</span>-->
            <!--<span>{{ordernum}}</span>-->
        <!--</div>-->
        <div class="flex">
            <span>支付金额</span>
            <span style="color:red">￥{{price}}</span>
        </div>
        <!-- <div class="flex" onclick="location='setaddress.html'">
            <span>设置收货地址:</span>
            <span>{{address}}</span>
        </div> -->
        <div class="flex">
            <span>选择支付方式：</span>
        </div>
        <a href="javascript:" class="flex"  @click="choose(2)">
            <div>
                <img src="../../static/img/zfblogo.png">
                <p>支付宝支付<span>推荐支付宝用户使用</span></p>
            </div>
            <div><img src="../../static/img/choose.png" class="noactive" :class="{active:2===count}"></div>
        </a>
        <div class="foot">
            <a @click="checkpay">确认支付</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "phonepay",
        data(){
            return {
                count:0,
                ordernum:154545445646,
                price:null,
                address:null,
                orderRecord:null
            }
        },
        mounted:function(){
            this.price=this.$route.query.total;
            this.orderRecord=this.$route.query.orderRecord;
            this.axios.get('/mall/user/addr/default/show')
                .then(function (res) {
                    console.log(res)
                });
            console.log(this.price);
            console.log(this.orderRecord)
        },
        methods:{
            choose:function (num) {
                this.count=num
            },
            checkpay:function () {
                if(this.count===0){
                    alert("选择支付方式")
                }else {
                    this.axios({
                        method:'post',
                        url:'/mall/user/orders/add',
                        data:{
                            orderRecord:JSON.stringify(this.orderRecord)
                        }
                    }).then(function (res) {
                        console.log(res)
                    });
                }
            }
        }
    }
</script>

<style scoped>
    #content{
        width: 100%;
    }
    .flex{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0.8rem 0.8rem;
        box-sizing: border-box;
        border-bottom: #f0f0ea 1px solid;
        align-items: center;
        background-color:white;
    }
    .flex>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex>div:first-child>img{
        width: 3rem;
        height: 3rem;
        margin: auto;
    }
    .flex>div:last-child{
        width: 1.2rem;
        height: 1.2rem;
        border: #c6c6c0 1px solid;
        border-radius: 0.8rem;
    }
    .noactive{
        width:100%;
        height: 100%;
        transform: scale(1.45);
        opacity: 0;
    }
    .active{
        opacity: 1;
    }
    .flex>span:nth-child(2){
        width: 60%;
        text-align: right;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;

    }
    .flex>div>p{
        margin: 0 0.4rem;
        font-size: 0.9rem;
        color: #40403e;
        line-height: 1.2rem;
        text-align: left;
    }
    .flex>div>p>span{
        display: block;
        font-size: 0.8rem;
        color: #c6c6c0;
    }
    /* .flex:nth-child(4)>span:last-child{
        color: #e60012;
        font-size: 1.1rem;
    } */
    .foot{
        width: 100%;
        box-sizing: border-box;
        background-color: #05607f;
        position: fixed;
        bottom: 0;
        text-align: center;
    }
    .foot>a{
        width: 100%;
        height: 100%;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        display: block;
        color: white;
        letter-spacing: 0.2rem;
        font-size: 1.3rem;
    }
    .address{
        display:flex;
        flex-wrap:wrap;
        padding:18px 37px;
        font-size:15px;
        color:#202020;
        line-height:25px;
        background-color:white;
        border-bottom:1px gray dashed;

    }
    .address>span:nth-child(2){
        margin-left:18%;
    }
    .address>span:nth-child(3){
        color:#616161;
        font-size:14px;
    }
    .addaddress{
        background-color:white;
        text-align:center;
        color:#202020;
        line-height:45px;
        margin-bottom:5px;
    }
    .addaddress>a{
        color:#404040;
    }
</style>