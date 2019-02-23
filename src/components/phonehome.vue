<template>
    <div id="wrap">
        <!-- 轮播 -->
        <div id="content">
            <div class="photo"
                 @touchstart="handletouchstart()"
                 @touchend="handletouchend()"
            >
                <div :style="{width:width+'%',marginLeft:marginLeft+'%'}">
                    <div v-for="item in src" :style="{width:widths+'%'}">
                        <img  :src="item.majorImg">
                    </div>
                </div>
                <p>
                    <a
                            class="bannernoactive"
                            v-for="(item,index) in src"
                            :class="{'banneractive':index === isActive}">
                    </a>
                </p>
            </div>
        </div>
        <!-- 导航 -->
        <div class="navwrap">
            <ul class="nav" :style="{width:ulwid+'%'}">
                <!--<li class="lis active"><img src="../../static/img/huawei.png"><span>华为</span></li>-->
                <!--<li class="lis"><img src="../../static/img/xiaomi.png"><span>小米</span></li>-->
                <!--<li class="lis"><img src="../../static/img/apple.png"><span>苹果</span></li>-->
                <!--<li class="lis"><img src="../../static/img/samsung.png"><span>三星</span></li>-->
                <li class="lis" v-for="(item,index) in navlist" :class="{'active':index === navIsactive}" @click="changenav(index)">
                    <img :src="item.brandImg">
                    <span>{{item.brandName}}</span>
                </li>
            </ul>
        </div>
        <!-- 列表 -->
        <scroller :on-infinite="infinite"  :on-refresh = "refresh" ref="my_scroller" style="position: relative">
            <div class="ws">
                <div v-for="(item,index) in phonelist">
                    <!--<router-link to="/phonedetail">-->
                    <!--<img src="../../static/img/1536120217(1).png"/>-->
                    <!--<div>-->
                    <!--<p>苹果IphoneX 64G深灰色</p>-->
                    <!--<span>95新  4G三网通</span>-->
                    <!--<span>￥4888</span>-->
                    <!--</div>-->
                    <!--</router-link>-->
                    <router-link :to="{name:'phonedetail',query:{id:item.ciId}}">
                        <img :src="item.thumb">
                        <div>
                            <p>{{item.title}}</p>
                            <span>{{item.subhead}}</span>
                            <span>￥{{item.price}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </scroller>
        <bottomnav :pagenum="pagenum"></bottomnav>
    </div>
</template>

<script>
    import bottomnav from '@/components/bottomnav'
    import VueScroller from 'vue-scroller'
    export default {
        name: "phonehome",
        data(){
            return {
                src:[],
                isActive:0,
                navIsactive:0,
                navlist:{},
                phonelist:[],
                pagenum:0,
                phonekind:2,
               // items: [],
                offset: 1
            }
        },
        mounted:function () {
//    	setInterval(this.left,3000),
            $(".lis").click(function(){
                $(".lis").removeClass("active");
                $(this).addClass("active");
            });
            var self=this;
            // this.axios.post('/mall/user/addToCart/402881a566d3b0d00166d3cb051e0002')
            //     .then(function (res) {
            //         console.log(res)
            //     });
            this.axios.get('/mall/home/showMajorCommodity')
                .then(function (res) {
                    self.src=res.data.data
                });
            this.axios.get('/mall/home/showBrand')
                .then(function (res) {
                    self.navlist=res.data.data;
                });
            this.getdata(1,this.phonekind);
        },
        components:{bottomnav,VueScroller},
        computed:{
            width:function () {
                return this.src.length*100
            },
            widths:function () {
                return 100/this.src.length
            },
            marginLeft:function () {
                return this.isActive*-100
            },
            ulwid:function () {
                return this.navlist.length*27
            },
        },
        methods: {
            left: function () {
                this.isActive++;
                if (this.isActive == this.src.length) {
                    this.isActive = 0;
                }
            },
            handletouchstart: function () {
                this.startX = event.changedTouches[0].pageX;
                this.startY = event.changedTouches[0].pageY;
            },
            handletouchend: function () {
                var endX = event.changedTouches[0].pageX;
                var endY = event.changedTouches[0].pageY;
                var distanceX = endX - this.startX;
                var distanceY = endY - this.startY;
                if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 50) {
                    if (this.isActive == this.src.length - 1) {
                        this.isActive = 0
                    } else {
                        this.isActive += 1
                    }
                } else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50) {
                    if (this.isActive == 0) {
                        this.isActive = this.src.length - 1
                    } else {
                        this.isActive -= 1
                    }
                }
            },
            changenav: function (index) {
                this.navIsactive = index;
                this.phonekind = index;
                // this.axios.post('/mall/commodity/brand/' + this.phonekind)
                //     .then(function (res) {
                //         self.phonelist = res.data.data;
                //     });
                this.getdata(1,this.phonekind)
            },
            getdata:function(offset,phonekind){
                var self=this;
                this.axios({
                    method:'post',
                    url:'/mall/commodity/brand/'+phonekind,
                    data:{
                        pageNo:offset,
                        pageSize:10,
                    }
                }).then(function (res) {
                    if (offset == 1) {
                        self.phonelist = res.data.data   //如果是想下滑动，刷新数据 就让items等于最新数据
                        if (res.data.data.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
                            self.$refs.my_scroller.finishPullToRefresh();
                            // self.$refs.my_scroller.finishInfinite(true)
                            self.$refs.my_scroller.finishInfinite(true)
                        }
                    } else {
                        self.phonelist = self.phonelist.concat(res.data.data) //否则就把数据拼接
                        if (res.data.data.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
                            // self.$refs.my_scroller.finishPullToRefresh();
                            self.$refs.my_scroller.finishInfinite(true)
                        }
                    }
                    // if (res.data.data.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
                    //     // self.$refs.my_scroller.finishPullToRefresh();
                    //     self.$refs.my_scroller.finishInfinite(true)
                    // }

                    });
            },
            infinite() {
                this.offset++;  //每当向上滑动的时候就让页数加1
                this.getdata(this.offset ,this.phonekind)
            },
            refresh() { //这是向下滑动的时候请求最新的数据(刷新)
                this.offset = 1
                this.getdata(1,this.phonekind)
            }
        }
    }
</script>

<style scoped>
    #wrap{
        margin-bottom: 4rem;
    }
    .photo{
        width: 100%;
        height: 10rem;
        overflow: hidden;
        background-color: white;
    }
    .photo>p{
        position: relative;
        color: black;
        bottom: 2.3rem;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .photo>p>a{
        margin: 0 0.4rem;
    }
    .photo>div{
        /*width: 100%;*/
        height: 100%;
        position: relative;
        transition: margin-left 1s;
    }
    .photo>div>div{
        height: 100%;
        text-align: center;
        display: inline-block;
    }
    .photo>div>div>img{
        width: 100%;
        height: 100%;
        display: inline-block;
        /*     transform: scale(0.9); */
    }
    .bannernoactive{
        display: block;
        width: 1rem;
        height: 1rem;
        background-color: #cdcdcd;
        opacity: 0.7;
        border-radius: 0.5rem;
    }
    .banneractive{
        background-color: #ff7d00;
    }
    .ws{
        display:flex;
        width: 100%;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .ws>div{
        width:100%;
        height:8.1rem;
        text-align:center;
        background-color:white;
        margin-top:0.6rem;
    }
    .ws>div>a{
        display:flex;
        width:100%;
        height:100%;
        justify-content: center;
        flex-wrap: wrap;
    }
    .ws>div>a>img{
        width:40%;
        height:100%
    }
    .ws>div>a>div{
        width:60%;
        height:95%
    }
    .ws>div>a>div>p{
        font-size:1rem;
        color:black;
        text-align:left;
        margin-top:1rem;
        margin-left:1rem;
        margin-bottom: 0.6rem;
        height: 1.3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .ws>div>a>div>span:nth-child(2){
        font-size:0.9rem;
        color:gray;
        display:block;
        text-align:left;
        margin-left:1rem;
        height: 1.2rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .ws>div>a>div>span:last-child{
        font-size:1.5rem;
        color:red;
        text-align:left;
        display:block;
        margin-left:1rem;
        margin-top:1.3rem;
    }
    .nav{
        display:flex;
        list-style: none;
        /*justify-content: space-around;*/
        margin:0.6rem 0 0 0;
        flex-wrap: nowrap;
        width: 200%;
    }
    .nav>li{
        display:flex;
        background-color:white;
        text-align:center;
        height:2rem;
        line-height:2.2rem;
        font-size: 0.8rem;
        width: 27%;
        box-sizing: border-box;
        justify-content: center;
        margin: 0.2rem 1px;
        letter-spacing: 3px;
    }
    .nav>li>img{
        width: 2rem;
        height: 2rem;
    }
    .nav>li>span{
        margin-left:5px;
    }
    .active{
        /*border-bottom:1px solid #36abb5;*/
        line-height:1.8rem;
        color:#36abb5;
    }
    .navwrap{
        width: 100%;
        overflow: hidden;
        overflow-x: scroll;
        padding-bottom: 3px;
    }
    .first{
        position: absolute;
        left:0;
        width: 2%;
    }
    .last{
        position: absolute;
        right:0;
        width: 0.3rem;
    }
</style>