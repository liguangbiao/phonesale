<template>
    <div>
        <div class="flex">
            <span>收货人</span>
            <input placeholder="请输入收货人姓名">
        </div>
        <div class="flex">
            <span>手机号</span>
            <input placeholder="请输入收货人手机号">
        </div>
        <div class="flex" @click="show">
            <span>收货地区</span>
            <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
        </div>
        <div class="flex">
            <span>详细地址</span>
            <input placeholder="具体到门牌号" v-model="selctArea">
        </div>
        <div class="foot">
            <router-link to="/auaddress">确定</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "editaddress",
        data(){
            return {
                selctArea:"",
                address:null,
            }
        },
        mounted:function(){
          $(document).click(function () {
              $(".address-container").hide();
          })
        },
        methods:{
            show:function(){
                $(".address-container").show();
                event.stopPropagation();
            },
            onSelected:function (res) {
                $(".address-container").hide();
                this.address=res.province.value+res.city.value+res.area.value+this.selctArea;
            }
        }
    }
</script>

<style scoped>
    .flex{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0.5rem 0.8rem;
        box-sizing: border-box;
        border-bottom: #f0f0ea 1px solid;
        align-items: center;
        background-color:white;
        margin: 0.5rem 0;
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
    .flex>input{
        text-align: right;
        font-size: 15px;
        padding: 5px 10px;
        border: none;
        outline: none;
    }
    .foot{
        text-align: center;
        margin: 2rem 0;
    }
    .foot>a{
        padding: 8px 0;
        background-color: #05607f;
        color:white;
        width: 85%;
        display: inline-block;
    }
    .distpicker-address-wrapper>>> .address-container {
        background-color: #fff;
        height: 300px;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        display: none;
    }
    .distpicker-address-wrapper>>> .address-header ul li.active{
        border: none;
        color:#2c3e50;
    }
    .distpicker-address-wrapper>>> .address-header ul li{
        padding: 5px ;
    }
</style>