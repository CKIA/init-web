
<template>
    <div id="header-login-info">
        <div v-show="isLogin()" >
            <Badge dot class="info-left">
                <a href="#">消息</a>
            </Badge>
            <Badge dot class="info-left">
                <a href="#">我的</a>
            </Badge>
        </div>
        <div v-show="!isLogin()">
            <Badge dot class="info-left">
                <!-- <a href="#" @click="toLogin">注册</a> -->
                <a href="#" @click="alertInfo">注册</a>
            </Badge>
            <Badge dot class="info-left">
                <a href="#" @click="handleRender">登录</a>
            </Badge>
        </div>
    </div>
</template>
<script>
import Alert from'@/components/alert/alert.js'

let busVm = new Vue();
    export default {
        name:'header-login-info',
        data(){
            return {
                showModal:false,
                name: '',
                password: '',
                modal1:false
            }
        },
        updated:function(){
                console.info(this);
            
        },
        methods:{
            ok : function () {
                this.$Message.info('Clicked ok');
            },
            cancel : function () {
                this.$Message.info('Clicked cancel');
            },
            alertInfo:function(){
                Alert({title : '注册',body : 'dfa'})
            },
            isLogin:function(){
                return this.showModal;
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
                                    value: this.name,
                                    autofocus: true,
                                    placeholder: 'Please enter your name...'
                                },
                                on: {
                                    input: (val) => {
                                        this.name = val;
                                        console.info(this.name);
                                    }
                                }
                            }),
                            h('H5', 'Please enter your password'),
                            h('Input', {
                                props: {
                                    value: this.password,
                                    autofocus: true,
                                    placeholder: 'Please enter your password...'
                                },
                                on: {
                                    input: (val) => {
                                        this.password = val;
                                        console.info(this.password);
                                    }
                                }
                            })
                        ])
                    },
                    onOk:function(){
                        this.toLogin();
                        console.log(this.$Modal.confirm)
                    }.bind(this),
                    onCancel:function(){
                        alert('aa');
                    }.bind(this)
                })
            }
        }
    }
</script>
<style>
#header-login-info{
    position :fixed;right:10%;top: 0px; width :80%; 
    height: 30px;z-index:1;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: #D6002A ;
    
}
#header-login-info .info-left{
    float: right;
    right: 25px;
    top: 10px;
    margin-left: 10px;
}
</style>