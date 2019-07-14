<style scoped>
.headerInfo{
    position :fixed;right:10%;top: 0px; width :80%; 
    height: 25px;z-index:9999;
    background: #c8c8c8 ;
    overflow: hidden;
}
.headerImage{
    position :fixed;right:10%;top: 25px; width :80%;
    height: 75px;z-index:9999;
    background: #db1717 ;
    overflow: hidden;
}
</style>
<template>
    <div>
        <div class="headerInfo">aa</div>
        <div class="headerImage">dd</div>
    </div>
</template>
<script>
    export default {
        name:'headerInfo',
        data(){
            return {
                list:[1,2]
            }
        },
        methods:{
            alertInfo:function(){
                alert('dd');
            }
        }
    }
</script>