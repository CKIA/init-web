import Vue from 'vue'
import alert from './alertInputList.vue'

let loginAlert = (function(){
    let defaluts = {
        title : '提示',
        btn_ok:'确定',
        btn_cen:'取消',
        inputList:[],
        confirm : null,
        cancel : null
    };


    let loginAlertComponent = Vue.extend(alert);

    return function(opts){

        let vm = new loginAlertComponent({
            el : document.createElement('div'),
            data : {
                customTitle : opts.title,
                customBody : opts.body,
                btn_ok : opts.btn_ok,
                btn_cen : opts.btn_cen,
                inputList : opts.inputList,
                confirm : function(){
                    console.log(opts.inputList)
                    this.$emit('loginInputData',opt.inputList)
                },
                cancel : defaluts.cancel
            }
        });
        document.body.appendChild(vm.$el);
    }
})();

export default loginAlert;