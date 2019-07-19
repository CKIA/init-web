<style scoped>
.layout{
    position :fixed; top: 100px;right:10%; width :80%; height: 50px;z-index:-1;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #dce2f0;
    border-radius: 3px;
    float: right;
    position: relative;
    top: 10px;
    right: 5px;
}
.layout-button{
    height: 30px;
    float: right;
    position: relative;
    top: 10px;
}
.layout-nav{
    float: left;
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="home">
                <div>
                    <Button type="primary" class="layout-button">搜搜看</Button>
                    <Input placeholder="Enter something..." class="layout-logo"/>
                </div>
                <div class="layout-nav" > 
                    <!-- <router-link to="/hello3">
                    </router-link> -->
                    <MenuItem name="home" style="top: -5px;" on-select=“home” @click.native="alertInfo">
                        <Icon type="ios-navigate"></Icon>
                        主页
                    </MenuItem>
                    <MenuItem name="all" style="top: -5px;" on-select=“all”>
                        <Icon type="ios-navigate"></Icon>
                        杂谈
                    </MenuItem>
                    <MenuItem name="other" style="top: -5px;" on-select=other>
                        <Icon type="ios-navigate"></Icon>
                        其他
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        </div>
</template>
<script>
    export default {
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