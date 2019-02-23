<template>
    <div id="wrap">
        <div id="content">
            <div class="empty" :class="{show:total > 0}">
                <!--         <img src="images/empty.png">
                 -->        <span>购物车竟然空空如也</span>
            </div>
            <addphone
                    v-for="(item,index) in selectphone"
                    :item="item"
                    :index="index"
                    @addone="addone"
                    @minusone="minusone" @removeclothes="removeclothes">
            </addphone>
        </div>
        <div id="footer">
            <p>总金额：<span>￥{{total}}</span></p>
            <div><a @click="pay">结算</a></div>
        </div>
    </div>
</template>

<script>
    import addphone from './addphone'
    export default {
        name: "car",
        data(){
            return {
                selectphone:new Array(),
                pagenum:2,
            }
        },
        components:{addphone},
        computed:{
            total:function () {
                var count=0;
                this.selectphone.forEach(function (item) {
                    count+=item.price*item.ciNum
                });
                return count ;
            }
        },
        mounted:function () {
            let self=this;
            this.axios.post('/mall/user/cart/show')
                .then(function (res) {
                    self.selectphone=res.data.data;
                })
        },
        methods:{
            addone:function (index) {
                if(this.selectphone[index].ciNum == this.selectphone[index].ciStock){
                    return false
                }else {
                    this.selectphone[index].ciNum+=1
                }
            },
            minusone:function (index) {
                if(this.selectphone[index].ciNum<=1){
                    return false
                }else {
                    this.selectphone[index].ciNum-=1
                }
            },
            removeclothes:function (index) {
                this.selectphone.splice(index,1)
            },
            pay:function () {
                var self=this;
                var length=this.selectphone.length;
                if(this.total===0 || length == 0){
                    alert("购物车为空！");
                    return false
                }else {
                    this.$router.push({path:'/phonepay',query:{orderRecord:this.selectphone,total:this.total}})
                }
            }
        }
    }
</script>

<style scoped>
    #content{
        width: 100%;
        margin-bottom: 6rem;
    }
    #footer{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
        padding: 1rem 0;
        background-color: white;
    }
    #footer>div{
        width: 90%;
        height:2.5rem;
    }
    #footer>div>a{
        display: block;
        width: 100%;
        height: 100%;
        line-height: 2.5rem;
        color: white;
        background-color: #05607f;
        letter-spacing: 0.5rem;
        font-size: 1rem;
    }
    #footer>p{
        margin: 0.3rem;
        color: #7f7f7b;
        padding-right: 0.8rem;
    }
    #footer>p>span{
        font-size: 1.2rem;
        font-weight: bold;
        color: #e60012;
    }
    .hide{
        display: none;
    }
    .opa{
        opacity: 0.7;
    }
    .nav{
        background-color: #f9f9f9;
        height: 15rem;
        width: 3rem;
        position: fixed;
        right: 0.8rem;
        bottom: 4.5rem;
        border-radius: 1.5rem;
        overflow: hidden;
        padding: 1rem 0 0 0;
    }
    .navchange{
        height: 3rem;
        padding: 0;
    }
    .nav>a{
        box-sizing: border-box;
        padding: 0.3rem;
        width: 3rem;
        height: 3rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.8rem;
        color: #999999;
    }
    .nav>a>img{
        width: 1rem;
        height: 1rem;
        display: block;
        opacity: 0.8;
        filter: grayscale(1);
    }
    .nav>a>span{
        display: block;
        margin:auto;
        font-size: 2rem;
    }
    .show{
        position: absolute;
        left: -999rem;
    }
    .empty{
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #4c4c4c;
    }
    .empty>img{
        width: 6rem;
        height: 6rem;
        filter: grayscale(1);margin: 1rem 0;
    }
    .empty>a{
        color: #ff7d00;
        margin: 0.5rem 0;
    }
    .show{
        display: none;
    }
</style>