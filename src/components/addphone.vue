<template>
    <div class="choose">
        <a><img :src="item.thumb"></a>
        <div><span><a href="">{{item.title}}</a><span>￥{{item.price}}</span></span><span>{{item.colour}}/{{item.color}}/{{item.ram}}/{{item.rom}}</span>
            <div class="count">
                <div><a @click="minus(index)" :class="{opa:item.ciNum<=1}">-</a><span class="cinum">{{item.ciNum}}</span><a
                        @click="add(index)">+</a><span class="cistock">(库存{{item.ciStock}}件)</span></div>
                <a @click="remove(index)">×</a></div>
        </div>
        <p>花费：<em :class="{hide:item.ciNum<=1}"><span>￥{{item.price}}</span>×{{item.ciNum}}=</em><span>￥{{item.price*item.ciNum}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "addphone",
        data(){
          return {

          }
        },
        props:["item","index"],
        methods:{
            add:function (index) {
                this.$emit("addone",index)

            },
            minus:function (index) {
                this.$emit("minusone",index)
            },
            remove:function (index) {
                this.$emit("removeclothes",index)
            }
        }
    }
</script>

<style scoped>
    .choose{
        width: 100%;
        padding: 1rem 0.5rem 0.5rem 0.5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-bottom: #cdcdcd 1px solid;
        flex-wrap: wrap;
        background-color: white;
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
        border-bottom: #e2e2db 1px dashed;
    }
    .choose>div>span:first-child{
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 0 0;
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
        text-align: left;
        line-height: 1.9rem;
    }
    .choose>div>span:first-child>span{
        font-size: 1.5rem;
        color: black;
    }
    .choose>div>span:nth-child(2){
        display: block;
        font-size: 0.6rem;
        color: #cdcdcd;
        margin: 0.4rem 0.1rem;
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
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1.5rem 0 0;
        box-sizing: border-box;
    }
    .count>div>a{
        width: 1.3rem;
        height: 1.3rem;
        line-height: 1.3rem;
        text-align: center;
        display: inline-block;
        background-color: #cdcdcd;
        font-size: 1rem;
    }
    .cistock{
        font-size: 0.1rem;
        margin-left: 0.5rem;
    }
    .cinum{
        display: inline-block;
        width: 3rem;
        height: 1.3rem;
        line-height: 1.3rem;
        background-color: #f0f0e9;
        text-align: center;
        font-size: 1rem;
    }
    .count>a{
        font-size: 1.5rem;
        color: #3f443b;
        line-height: 1.6rem;
    }

</style>