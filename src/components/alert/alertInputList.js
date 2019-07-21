import Vue from 'vue'
import alert from './alert.vue'

let loginAlert = (function(){
    let defaluts = {
        title : '提示',
        body : '',
        confirm : null,
        cancel : null
    };


    let loginAlertComponent = Vue.extend(alert);

    return function(opts){
        for(let attr in opts) {
            defaluts[attr] = opts[attr];
        }
        let vm = new loginAlertComponent({
            el : document.createElement('div'),
            data : {
                customTitle : defaluts.title,
                customBody : defaluts.body,
                confirm : defaluts.confirm,
                cancel : defaluts.cancel
            }
        });
        document.body.appendChild(vm.$el);
    }
})();

export default loginAlert;