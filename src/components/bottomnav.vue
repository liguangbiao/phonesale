<template>
    <div id="bottom-nav">
        <div class="bottom-wrap">
            <router-link  v-for="(item,index) in hrefs"
                          :class="{addborder:index === isactive}"
                          @click="change(index)"
                          :to="item.href"
            >
                <img :src="item.src"
                     class="normal"
                     :class="{changecolor:index === isactive}">
                <span
                        class="nocolor" :class="{addcolor:index===isactive}">{{item.name}}
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bottomnav',
        data() {
            return {
                hrefs: [
                    {
                        src: "../../static/img/index.png",
                        href: "/phonehome",
                        name: "首页"
                    },

                    {
                        src: "../../static/img/shopcar.png",
                        href: "/car",
                        name: "购物车"
                    },
                    {
                        src: "../../static/img/user1.png",
                        href: "/usercenter",
                        name: "个人中心"
                    }
                ],
                isactive:0,
            }
        },
        props:["pagenum"],

        mounted(){
            this.isactive=this.pagenum;
        },
        methods: {
            change: function (index) {
                this.isactive = index
            }
        }

    }

</script>

<style scoped>
    .price {
        font-size: 1.7rem;
        color: #e60012;
    }

    .likenum {
        font-size: 0.9rem;
        color: #a5a5a5;
        line-height: 3rem;
    }

    #bottom-nav {
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: white;
        box-sizing: border-box;
    }

    .bottom-wrap {
        width: 100%;
        display: flex;
        justify-content: space-around;
        /*height:5.8rem;*/
        align-items: center;
    }

    .bottom-wrap > a {
        width: 4rem;
        /*height: 3.6rem;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 0.4rem;
        box-sizing: border-box;
        text-align: center;
    }

    .nocolor {
        font-size: 0.5rem;
        color: #6f6f6f;
        letter-spacing: 0.1rem;
        line-height: 0.2rem;
    }

    .addborder {
        /*border-bottom: #ff7d00 0.2rem solid;*/
    }

    .addcolor {
        color: #ff7d00;
    }

    .normal {
        width: 75%;
        height: 3rem;
        filter: grayscale(1);
        transform: scale(0.6);
        display: block;
    }

    .changecolor {
        filter: grayscale(0);
    }
</style>