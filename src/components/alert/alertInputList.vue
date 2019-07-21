<template>
    <div id="login-alert" ref="loginAlert">
        <div class="login_show">
            <div class="show_title">{{customTitle}}</div>
            <div class="show_body">body</div>
            <div class="show_btn">
                <button class="show_btn_ok">确定</button>
                <button class="show_btn_cen">取消</button>
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
    top:25%;width: 200px;height: 150px;background: white;border-radius: 5px;margin: auto;position: relative;
}
#login-alert .show_title{
    padding: 10px;border-bottom: 1px #cccccc solid;
}
#login-alert .show_body{
    height: 50px;line-height: 50px;text-align: center;
}
#login-alert .show_btn{
    position: absolute;right: 0;bottom: 0;
}
#login-alert .show_btn button{
    margin: 10px;padding: 5px;
}
</style>
