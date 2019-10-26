<template>
    <div id="share-left">
        <div id="share-content-recommendation">
            <h6>内容推荐区</h6>
        </div>
        <div id="share-content-list">
            <h6>内容展示区</h6>
            <span>{{showList}}</span>
        </div>
        
    </div>
</template>
<script>
import { getRequest, postRequest } from "@/request/httputil";
import { url_resource, url_user } from '@/request/apiconst'
export default {
    name : 'share-left',
    data(){
        return {
            recommendation:[],
            showList:[]
            }
    },
    methods:{
        initFunc:function(){
            // 内容展示区
            let content = { param1: "xxx", param2: "xxxx" };
            getRequest(url_resource+'view', content)
            .then(ret => {
                if (ret.status == 200) {
                    let data = ret.data;
                    console.info(data);
                    this.showList = data.result
                } 
                
            })
            .catch(err => {
                console.info(err);
            });
            // 内容推荐区
            let recommend = { param1: "xxx", param2: "xxxx" };
            getRequest(url_resource+'view', recommend)
            .then(ret => {
                if (ret.status == 200) {
                    let data = ret.data;
                    console.info(data);
                    this.showList = data.result
                } 
                
            })
            .catch(err => {
                console.info(err);
            });
            // postRequest(url_user+'query', params)
            // .then(ret => {
            //    if (ret.status == 200) {
            //         let data = ret.data;
            //         console.info(data);
            //         this.show = data.msg
            //     } 
            // })
            // .catch(err => {
            //     console.info(err);
            // });

        }
    },
    created:function(){
        this.initFunc();
    }
}
</script>

<style>
#share-left {
    position :relative;top: 150px;left: 10%; width :65%; z-index:2;height: auto;min-height: 750px;
    box-shadow:0px 3px 3px #c8c8c8 ;z-index:1;
}
#share-content-recommendation {
    height: auto;
}
#share-content-list {
    height:auto;
}
</style>

