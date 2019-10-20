<template>
    <div id="share-left">
        <span>{{show}}</span>
    </div>
</template>
<script>
import { getRequest, postRequest } from "@/request/httputil";
import { url_resource, url_user } from '@/request/apiconst'
export default {
    name : 'share-left',
    data(){
        return {
            show:''
            }
    },
    methods:{
        initFunc:function(){
            let params = { param1: "xxx", param2: "xxxx" };
            getRequest(url_resource+'view', params)
            .then(ret => {
                if (ret.status == 200) {
                    let data = ret.data;
                    console.info(data);
                    this.show = data.result
                } 
                
            })
            .catch(err => {
                console.info(err);
            });

            postRequest(url_user+'query', params)
            .then(ret => {
               if (ret.status == 200) {
                    let data = ret.data;
                    console.info(data);
                    this.show = data.result
                } 
            })
            .catch(err => {
                console.info(err);
            });

        }
    },
    created:function(){
        this.initFunc();
    }
}
</script>

<style>
#share-left {
    position :relative;top: 150px;left: 10%; width :65%; z-index:2;height: auto;min-height: 700px;
    box-shadow:0px 3px 3px #c8c8c8 ;z-index:1;
}
</style>

