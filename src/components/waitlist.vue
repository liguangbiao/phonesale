<template>
    <div>
        <router-link class="list" to="/order">
            <div class="flexhead">
                <p>下单时间：<span>2018-9-3 18:30</span></p>
                <span>待付款...</span>
            </div>
            <a class="flex">
                <div class="flex1"><img src="../../static/img/1536120217(1).png"></div>
                <div class="flex2">
                    <p>小米标题</p>
                    <span>蓝色/规格/规格/规格/4g/6g</span>
                </div>
                <div class="flex3">
                    <span>￥8888</span>
                    <p>x4</p>
                    <!--<span>待付款...</span>-->
                </div>
            </a>
            <a class="flex">
                <div class="flex1"><img src="../../static/img/1536120217(1).png"></div>
                <div class="flex2">
                    <p>小米标题</p>
                    <span>蓝色/规格/规格/规格/4g/6g</span>
                </div>
                <div class="flex3">
                    <span>￥8888</span>
                    <p>x4</p>
                    <!--<span>待付款...</span>-->
                </div>
            </a>
        </router-link>
        <bottomnav :pagenum="pagenum"></bottomnav>
    </div>
</template>

<script>
    import bottomnav from '@/components/bottomnav'

    export default {
        name: "waitlist",
        data() {
            return {
                pagenum: 2
            }
        },
        components: {bottomnav}
    }
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .list{
        margin-top: 0.5rem;
        display: block;
    }
    .flexhead{
        width: 100%;
        background-color: white;
        text-align: left;
        border-bottom: 1px gray dashed;
        color: #575757;
        padding: 0.6rem 0.8rem ;
        font-size: 0.9rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .flexhead>p>span{
        margin-left: 0.3rem;
    }
    .flexhead>span{
        color:#ff7d00 ;
    }
    .flex {
        display: flex;
        /*align-items: center;*/
        box-sizing: border-box;
        padding: 0.5rem 0.5rem;
        background-color: white;
        justify-content: space-between;
        color: black;
        border-bottom: 1px #dcdcdc solid;
    }

    .flex1 {
        width: 24%;
    }

    .flex1 > img {
        width: 5rem;
        height: 5rem;
        transform: scale(0.8);

    }

    .flex2 {
        text-align: left;
        width: 43%;
    }

    .flex2 > p {
        margin: 0.5rem 0;
    }

    .flex2 > span {
        font-size: 0.7rem;
        color: gray;
    }

    .flex3 {
        width: 20%;
        text-align: right;
    }

    .flex3 > span:first-child {
        display: block;
        margin: 0.5rem;
        font-size: 1.1rem;
        color: red;
    }

    .flex3 > p {
        margin: 0 0.5rem;
    }

    .flex3 > span:last-child {
        display: block;
        font-size: 0.8rem;
        margin: 0.5rem;
        color: #ff7d00;
    }
</style>