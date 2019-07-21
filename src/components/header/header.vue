
<template>
    <div id="share-header">
        <div style="width :70%;height: 50px;">
            <ul v-for="(hTable,index) in tableList">
                <li @click="showTab(index)">
                    <div v-bind:class="{selectStyle : selected==index}">{{hTable.name}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'share-header',
        data(){
            return {
                tableList : [{name:'test'},{name:'test2'}],
                selected : '0'
            }
        },
        methods:{
            showTab:function(index){
                this.selected = index;
            }
        }
    }
</script>
<style>
#share-header{
    position :fixed; top: 100px;right:10%; width :80%; height: 50px;z-index:2;
    overflow: hidden;background: #333333;
}
#share-header button{
    height: 30px;width: 100px;top: 10px;
}
#share-header ul{
    float: left;list-style-type:none;
}
.selectStyle{
    background: #D6002A;
}
#share-header ul li div{
    width: 100px;
    height: 50px;
    line-height:50px;
    font-size: 13px;
    color: #000;
    text-align: center;
    z-index: 10;
}
.layout-footer-center{
    text-align: center;
}
</style>