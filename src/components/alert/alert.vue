<template>
    <div id="routine-alert">
        <div class="login_show">
            <div class="show_title">
                {{customTitle}}
            </div>
            <div class="show_body">{{customBody}}</div>
            <div class="show_btn">
                <button class="ivu-btn ivu-btn-primary ivu-btn-large" @click="confirm">确定</button>
                <!-- <button class="show_btn_cen" @click="cancel">取消</button> -->
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
#routine-alert{
    width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);position: fixed;left: 0;top: 0;z-index: 100;display: flex;font-size: 14px;
}
#routine-alert .login_show{
    width: 350px;height: 180px;background: white;border-radius: 5px;margin: auto;position: relative;
}
#routine-alert .show_title{
    padding: 10px;border-bottom: 1px #cccccc solid;
}
#routine-alert .show_body{
    height: 50px;line-height: 50px;text-align: center;
}
#routine-alert .show_btn{
    position: absolute;right: 0;bottom: 0;
}
#routine-alert .show_btn button{
    color: #fff;
    width: 60px;height: 40px;
    margin: 10px;padding: 5px;
}
#routine-alert .show_btn button:hover{/*当鼠标悬浮在超链接上时，超链接的样式*/
    transform:scale(1.05) ;/* rotate(90deg);/*设置缩放、旋转角度*/
    transition:all 1s linear 0;/*设置动画时间*/
}

</style>
