import Vue from 'vue'
import alert from './alert.vue'
let busVm = new Vue();
let routineAlert = (function(){
    let defaluts = {
        title : '提示',
        body : '',
        confirm : null
    };


    let routineAlertComponent = Vue.extend(alert);

    return function(opts){
        // for(let attr in opts) {
        //     defaluts[attr] = opts[attr];
        // }
        let vm = new routineAlertComponent({
            el : document.createElement('div'),
            data : {
                customTitle : opts.title,
                customBody : opts.body,
                confirm : function(){
                    document.body.removeChild(document.getElementById('routine-alert'));
                }
            }
        });
        document.body.appendChild(vm.$el);
    }
})();

export default routineAlert;