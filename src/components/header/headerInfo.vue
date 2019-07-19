<style scoped>
.headerInfo{
    position :fixed;right:10%;top: 0px; width :80%; 
    height: 30px;z-index:1;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    /* box-shadow: 0px 3px 3px #c8c8c8; */
    background: #ffffff ;
    
}
.info-left{
    float: right;
    right: 25px;
    top: 10px;
    margin-left: 10px;
}
.headerImage{
    position :fixed;right:10%;top: 30px; width :80%;
    height: 75px;z-index:-1;
    background: #db1717 ;
    overflow: hidden;
}
</style>
<template>
    <div>
        <div class="headerInfo">
            <div v-if="isLogin()" >
                <Badge dot class="info-left">
                    <a href="#">消息</a>
                </Badge>
                <Badge dot class="info-left">
                    <a href="#">我的</a>
                </Badge>
            </div>
            <div v-else>
                <Badge dot class="info-left">
                    <!-- <a href="#" @click="toLogin">注册</a> -->
                    <a href="#" @click="handleRender">注册</a>
                </Badge>
                <Badge dot class="info-left">
                    <a href="#">登录</a>
                </Badge>
            </div>
            <!-- <div v-show="showModal"> -->
                <!-- <p>
                    Name: {{ value }}
                </p>
                <p>
                    <Button @click="toLogin">Custom content</Button>
                </p> -->
            <!-- </div> -->
        </div>
        <div class="headerImage"></div>
    </div>
</template>
<script>
    export default {
        name:'headerInfo',
        data(){
            return {
                showModal:false,
                value: '',
                value2: '',
                modal1:false
            }
        },
        methods:{
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            alertInfo:function(){
                alert('dd');
            },
            isLogin:function(){
                return false;
            },
            toLogin:function(){
                this.showModal = true;
            },
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('div',[
                        h('H5', 'Please enter your name'),
                        h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                    console.log(this.value)
                                }
                            }
                        }),
                        h('H5', 'Please enter your password'),
                        h('Input', {
                            props: {
                                value: this.value2,
                                autofocus: true,
                                placeholder: 'Please enter your password...'
                            },
                            on: {
                                input: (val) => {
                                    this.value2 = val;
                                    console.log(this.value2)
                                }
                            }
                        }),
                        h('Input', {
                            props: {
                                value: this.value2,
                                autofocus: true,
                                placeholder: 'Please enter your password...'
                            },
                            on: {
                                input: (val) => {
                                    this.value2 = val;
                                    console.log(this.value2)
                                }
                            }
                        }),
                        h('Input', {
                            props: {
                                value: this.value2,
                                autofocus: true,
                                placeholder: 'Please enter your password...'
                            },
                            on: {
                                input: (val) => {
                                    this.value2 = val;
                                    console.log(this.value2)
                                }
                            }
                        })
                    ])
                    },
                    onOk:function(){
                        alert('dd');
                    },
                    onCancel:function(){
                        alert('aa');
                    }
                })
            }
        }
    }
</script>