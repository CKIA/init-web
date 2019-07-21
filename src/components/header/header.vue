
<template>
    <div id="share-header">
        <div class="header_left">
            <ul v-for="(hTable,index) in tableList">
                <li @click="showTab(index)">
                    <div v-bind:class="{selectStyle : selected==index}">{{hTable.name}}</div>
                </li>
            </ul>
        </div>
        <div class="header_seach">
            <select>
                <option v-for="(hTable,index) in tableList" value="hTable.index">{{hTable.name}}</option>
            </select>
            <input type="text">
            <button>搜索</button>
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
#share-header .header_left{
    width :70%;height: 50px;float: left;
}
#share-header .header_seach{
    width: 30%;height: 50px;display: inline;float: left;
}
#share-header .header_seach select{
    width: 35%;height: 30px;float: left;margin-top: 10px;
}
#share-header .header_seach input{
    width: 40%;height: 30px;float: left; margin-left: 10px;margin-top: 10px;
}
#share-header .header_seach button{
    width: 50px;height: 30px;float: right;margin-right: 10px;margin-top: 10px;
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
</style>