<template>
    <div>
        <div id="wrap">
            <div class="address1">
                <span>收货人:李广标</span>
                <span>18826107955</span>
                <div class="sel"><img src="../../static/img/choose.png" class="noactive"></div>
                <p>收货地址:</p><p>广东省某某某某某某某某某某某某某某</p>
            </div>
            <div class="addaddress1"><router-link to="/editaddress">编辑</router-link><a>删除</a></div>

            <div class="address1">
                <span>收货人:李广标</span>
                <span>18826107955</span>
                <div class="sel"><img src="../../static/img/choose.png" class="noactive"></div>
                <p>收货地址:</p><p>广东省某某某某某某某某某某某某某某</p>
            </div>
            <div class="addaddress1"><a>编辑</a><a>删除</a></div>

            <div class="address1">
                <span>收货人:李广标</span>
                <span>18826107955</span>
                <div class="sel"><img src="../../static/img/choose.png" class="noactive"></div>
                <p>收货地址:</p><p>广东省某某某某某某某某某某某某某某</p>
            </div>
            <div class="addaddress1"><a>编辑</a><a>删除</a></div>

            <div class="address1">
                <span>收货人:李广标</span>
                <span>18826107955</span>
                <div class="sel"><img src="../../static/img/choose.png" class="noactive"></div>
                <p>收货地址:</p><p>广东省某某某某某某某某某某某某某某</p>
            </div>
            <div class="addaddress1"><a>编辑</a><a>删除</a></div>

            <div class="add"><router-link to="/addaddress">+添加新的收货地址</router-link>></div>
        </div>
        <div class="foot">
            <a @click="setaddress">设为收货地址</a>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "auaddress",
        data(){
            return {

            }
        },
        mounted:function () {
            $(".address1").click(function(){
                $(".address1").find("img").removeClass("active");
                $(this).find("img").addClass("active");
            });
            this.axios.get('/mall/user/addr/show')
                .then(function (res) {
                    console.log(res)
                })
        },
        methods:{
            setaddress:function () {
                this.axios.get('/mall/user/addr/setDefault/{id}')
                    .then(function (res) {
                        console.log(res)
                    })
            }
        }
    }
</script>

<style scoped>
    #wrap{
        margin-top:3.7rem;
    }
    .address1{
        display:flex;
        flex-wrap:wrap;
        padding:18px 10%;
        font-size:15px;
        color:#202020;
        line-height:25px;
        background-color:white;
        border-bottom:1px gray dashed;

    }
    .address1>p{
        margin: 10px 0;
        color: #616161;
    }
    .address1>p:last-child{
        width: 70%;
        text-align: left;
    }
    .address1>span:nth-child(2){
        margin-left:18%;
    }
    .address1>span:last-child{
        color:#616161;
        font-size:15px;
        width: 72%;
        text-align: left;
        margin: 10px 0;
    }
    .addaddress1{
        background-color:white;
        text-align:center;
        color:#202020;
        line-height:18px;
        margin-bottom:13px;
        display:flex;
        justify-content:space-around;
        padding: 7px 0;
        font-size:14px;
    }
    .addaddress1>a{
        color:#05607f;
        display:block;
        width:49%;
    }
    .addaddress1>a:first-child{
        border-right:1px gray dashed
    }
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
        font-size: 1rem;
    }
    .sel{
        width: 1.2rem;
        height: 1.2rem;
        border: #c6c6c0 1px solid;
        border-radius: 0.8rem;
        position: relative;
        right: -60px;
        top: 27px;
    }
    .noactive{
        width:100%;
        height: 100%;
        transform: scale(1.65);
        opacity: 0;
    }
    .active{
        opacity: 1;
    }
    .add{
        background-color:white;
        text-align:center;
        color:#202020;
        line-height:45px;
        margin: 12px 0;
        margin-bottom: 4rem;
    }
    .add>a{
        color: #05607f;
        font-size: 13px;
    }
</style>