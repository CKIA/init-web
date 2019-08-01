<template>
    <div id="login-alert" ref="loginAlert">
        <div class="login_show">
            <div class="show_title">{{customTitle}}</div>
            <div class="show_body" v-for="inp in inputList">
                <div class="body_name">{{inp.name}}
                    <div style="display: inline;">
                        <input type="text" v-model="inp.value">
                    </div>
                </div>
            </div>
            <div class="show_btn">
                <button class="show_btn_cen">{{btn_cen}}</button>
                <button class="ivu-btn ivu-btn-primary ivu-btn-large" @click="confirm">
                    {{btn_ok}}</button>
            </div>
        </div>
    </div>
</template>
<script>
let busVm = new Vue();
export default {
}
</script>

<style>
#login-alert{
    width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);position: fixed;left: 0;top: 0;z-index: 100;display: flax;
}
#login-alert .login_show{
    top:25%;width: 400px;height: 300px;background: white;border-radius: 5px;margin: auto;position: relative;
}
#login-alert .show_title{
    padding: 10px;border-bottom: 1px #cccccc solid;
}
#login-alert .show_body{
    height: 50px;line-height: 30px;text-align: center;float: left;
}
#login-alert .show_body input{
    width: 40%;height: 30px;float: left; margin-left: 10px;margin-top: 10px;
    display: inline;
}
#login-alert .body_name{
    width: 30%;background: rgba(0, 0, 0, 0.5);
}
#login-alert .show_btn{
    position: absolute;right: 0;bottom: 0;
}
#login-alert .show_btn button{
    margin: 10px;padding: 5px;
}
</style>
