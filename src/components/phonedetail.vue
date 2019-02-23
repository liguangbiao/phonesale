<template>
    <div id="wrap">
        <div id="content">
            <div class="photo"
                 @touchstart="handletouchstart()"
                 @touchend="handletouchend()"
            >
                <div :style="{width:width+'%',marginLeft:marginLeft+'%'}">
                    <div v-for="item in src" :style="{width:widths+'%'}">
                        <img  :src="item">
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
        <div id="mess">
            <span class="mess-sprice">￥{{phonedata.price}}</span>
            <p class="mess-intro">{{phonedata.modelNumber.title}}</p>
        </div>
        <div class="select">
            <span>颜色</span>
            <ul>
                <li v-for="(item,index) in phonedata.colorList" >
                    <a class="noactive" :class="{active:index === colorActive}" @click="changecolor(index)">{{item.colorName}}</a>
                </li>
            </ul>
        </div>
        <div class="select">
            <span>运存</span>
            <ul>
                <li v-for="(item,index) in phonedata.ramList" >
                    <a class="noactive" :class="{active:index === ramActive}" @click="changeram(index)">{{item.ramSize}}</a>
                </li>
            </ul>
        </div>
        <div class="select">
            <span>内存</span>
            <ul>
                <li v-for="(item,index) in phonedata.romList" >
                    <a class="noactive" :class="{active:index === romActive}" @click="changerom(index)">{{item.romSize}}</a>
                </li>
            </ul>
        </div>
        <div class="select">
            <span>成色</span>
            <ul>
                <li v-for="(item,index) in phonedata.colourList" >
                    <a class="noactive" :class="{active:index === colourActive}" @click="changecolour(index)">{{item.colour}}</a>
                </li>
            </ul>
        </div>
        <div class="select">
            <span>网络</span>
            <ul>
                <li v-for="(item,index) in phonedata.networkTypeList">
                    <a class="noactive" :class="{active:index === networkActive}" @click="changenetwork(index)">{{item.networkName}}</a>
                </li>
            </ul>
        </div>
        <div class="select">
            <span>渠道</span>
            <ul>
                <li v-for="(item,index) in phonedata.channelList">
                    <a class="noactive" :class="{active:index === channelActive}" @click="changechannel(index)">{{item.channelName}}</a>
                </li>
            </ul>
        </div>
        <div class="select" style="align-items: center;">
            <span>数量</span>
            <div class="count">
                <a @click="minus">-</a><input v-model="amount" type="number"><a @click="add">+</a>
            </div>
            <span class="kucun">库存{{phonedata.ciStock}}件</span>
        </div>
        <div id="add">
            <router-link to="/car"><img src="../../static/img/car.png"><span :class="{car:carCount >= 1}">{{carCount}}</span></router-link>
            <a @click="addcarcount">加入购物车</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "phonedetail",
        data(){
            return {
                src:[],
                phonedata:new Array(),
                isActive:0,
                carCount:null,
                amount:1,
                networkActive:null,
                colourActive:null,
                ramActive:null,
                romActive:null,
                colorActive:null,
                channelActive:null,
                sdata:{
                    channelId:null,
                    colorId:null,
                    colour:null,
                    networkType:null,
                    ramId:null,
                    romId:null,
                },
                ciId:null,
            }
        },
        computed:{

        },
        watch:{
          sdata:{
              handler(){
                  var self=this;
                  this.axios.get('/mall/commodity/screen',{
                      params:{
                          channelId:this.sdata.channelId,
                          colorId:this.sdata.colorId,
                          colour:this.sdata.colour,
                          networkType:this.sdata.networkType,
                          ramId:this.sdata.ramId,
                          romId:this.sdata.romId
                      }
                  })
                      .then(function (res) {
                          self.ciId=res.data.object.ciId;
                          console.log(res)
                      });
              },
              deep:true,
          },
        },
        mounted:function () {
//    	setInterval(this.left,3000),
            $(".lis").click(function(){
                $(".lis").removeClass("active");
                $(this).addClass("active");
            });
            var self=this;
            this.axios.post('/mall/commodity/showInfo/'+this.$route.query.id)
                .then(function (res) {
                    self.phonedata=res.data.object;
                    self.ciId=res.data.object.ciId;
                    var s=self.phonedata.modelNumber.picture.split(";");
                    s.pop();
                    self.src=s;
                    res.data.object.channelList.forEach((item,index)=>{
                        if(res.data.object.channel == item.channelId){
                            self.channelActive=index;
                            self.sdata.channelId=res.data.object.channel;
                        }
                    });
                    res.data.object.colorList.forEach((item,index)=>{
                        if(res.data.object.colorId == item.colorId){
                            self.colorActive=index;
                            self.sdata.colorId=res.data.object.colorId;
                        }
                    });
                    res.data.object.colourList.forEach((item,index)=>{
                        if(res.data.object.colour == item.colour){
                            self.colourActive=index;
                            self.sdata.colour=res.data.object.colour;
                        }
                    });
                    res.data.object.networkTypeList.forEach((item,index)=>{
                        if(res.data.object.networkType == item.id){
                            self.networkActive=index;
                            self.sdata.networkType=res.data.object.networkType;
                        }
                    });
                    res.data.object.ramList.forEach((item,index)=>{
                        if(res.data.object.ramId == item.ramId){
                            self.ramActive=index;
                            self.sdata.ramId=res.data.object.ramId;
                        }
                    });
                    res.data.object.romList.forEach((item,index)=>{
                        if(res.data.object.romId == item.romId){
                            self.romActive=index;
                            self.sdata.romId=res.data.object.romId;
                        }
                    });
                });
        },
        computed:{
            width:function () {
                return this.src.length*100
            },
            widths:function () {
                return 100/this.src.length
            },
            marginLeft:function () {
                return this.isActive*-100
            }
        },
        methods:{
            left:function(){
                this.isActive++;
                if(this.isActive == this.src.length){
                    this.isActive=0;
                }
            },
            handletouchstart:function () {
                this.startX = event.changedTouches[0].pageX;
                this.startY = event.changedTouches[0].pageY;
            },
            handletouchend:function () {
                var endX = event.changedTouches[0].pageX;
                var endY = event.changedTouches[0].pageY;
                var distanceX  = endX - this.startX;
                var distanceY = endY - this.startY;
                if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 50){
                    if(this.isActive==this.src.length-1){
                        this.isActive=0
                    }else {
                        this.isActive+=1
                    }
                }else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50){
                    if(this.isActive==0){
                        this.isActive=this.src.length-1
                    }else {
                        this.isActive-=1
                    }
                }
            },
            addcarcount:function () {
                // var params = new URLSearchParams();
                // params.append('ciId', this.ciId);
                // params.append('ciNum',this.amount);
                let params={
                    ciId:this.ciId,
                    ciNum:this.amount
                };
                var self=this;
                this.axios({
                    method:'post',
                    url:'/mall/user/addToCart',
                    data:params
                }).then(function (res) {
                        self.carCount+=1;
                    });
            },
            changechannel:function (index){
                this.channelActive = index;
                this.sdata.channelId=this.phonedata.channelList[index].channelId;
            },
            changenetwork:function (index){
                this.networkActive = index;
                this.sdata.networkType=this.phonedata.networkTypeList[index].id;
            },
            changecolour:function (index){
                this.colourActive = index;
                this.sdata.colour=this.phonedata.colourList[index].colour;
            },
            changeram:function (index){
                this.ramActive = index;
                this.sdata.ramId=this.phonedata.ramList[index].ramId;
            },
            changerom:function (index){
                this.romActive = index;
                this.sdata.romId=this.phonedata.romList[index].romId;
            },
            changecolor:function (index){
                this.colorActive = index;
                this.sdata.colorId=this.phonedata.colorList[index].colorId;
            },
            minus:function(){
                if(this.amount == 1){
                    return
                }else{
                    this.amount--;
                }
            },
            add:function(){
                if(this.amount == this.phonedata.ciStock){
                    return
                }else{
                    this.amount++;
                }
            }
        }
    }
</script>

<style scoped>
    #wrap{
        margin-bottom:4rem;
    }
    .photo{
        width: 100%;
        height: 14rem;
        padding-top: 3rem;
        overflow: hidden;
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
        /*     transform: scale(0.9);
         */}
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
    #mess{
        background-color:white;
        padding-bottom:2px;
        padding-top: 0.5rem;
        margin-top: 0.5rem;
        text-align: left;
    }
    .mess-sprice{
        padding:0.3rem 0.6rem;
        font-size:1.5rem;
        color:red;
        line-height: 2.1rem;
    }
    .mess-intro{
        padding: 0.2rem 0.8rem;
        margin: 0;
    }
    .select{
        display:flex;
        width:100%;
        padding:0.3rem 1rem;
        background-color:white;
        box-sizing: border-box;
    }
    .select>span{
        color:#838383;
        display:block;
        width:20%;
        line-height:2.1rem;
    }
    .select>ul{
        display:flex;
        width:80%;
        margin:0;
        padding:0;
        list-style: none;
        flex-wrap:wrap;
    }
    .select>ul>li{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .noactive{
        padding:0.3rem 1.2rem;
        display:inline-block;
        margin:2px 5px;
        color:#8a8a8a;
        font-size:0.8rem;
        border:1px #C4C4C4 solid;
    }
    .active{
        border:1px red solid;
        color:red
    }
    #add{
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        background-color: white;
    }
    #add>a{
        height: 3rem;
        display: inline-block;
        border: #ececec 1px solid;
        border-radius: 0.8rem;
        text-align: center;
    }
    #add>a:first-child{
        width: 30%;
        height: 2.7rem;
        background-color: #e1e1e1;
        display: flex;
    }
    #add>a>img{
        width: 1.8rem;
        height: 1.8rem;
        margin: auto;
    }
    #add>a:last-child{
        width: 56%;
        background-color: #05607f;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        line-height: 3rem;
        color: #fafafa;
    }
    .car{
        width: 1.6rem;
        height: 1.6rem;
        display: block;
        background-color: #e60012;
        border-radius: 0.8rem;
        position: absolute;
        left: 27%;
        bottom: 2.5rem;
        color: #f0f0f0;
        line-height: 1.6rem;
        text-align: center;
    }
    .count{
        margin-left:4px;
    }
    .count>input{
        display: inline-block;
        width: 3rem;
        height: 1.25rem;
        line-height: 1.3rem;
        background-color: #f0f0e9;
        text-align: center;
        font-size: 0.9rem;
        border:none;
        padding:0;
        margin:0;
    }
    .count>a{
        width: 1.3rem;
        height: 1.3rem;
        line-height: 1.3rem;
        text-align: center;
        display: inline-block;
        background-color: #cdcdcd;
        font-size: 1rem;
        color:gray;
    }
    .banner{
        width:100%;
        margin-top:1rem;
    }
    .banner>img{
        width:100%
    }
    .kucun{
        font-size: 0.7rem;
        margin-left: 2px;
    }
</style>