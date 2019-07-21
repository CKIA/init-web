<template>
  <div id="app">
    <share-header></share-header>
    <header-login-info></header-login-info>
    <header-image></header-image>
    <share-right></share-right>
    <share-left></share-left>
  </div>
</template>

<script>
import Header from'./components/header/header.vue'
import headerImage from'./components/header/headerImage.vue'
import headerLoginInfo from'./components/header/headerLoginInfo.vue'
import left from'./components/view/left.vue'
import right from'./components/view/right.vue'

// Vue.component(right.name,right);
// Vue.component(left.name,left);
// Vue.component(headerLoginInfo.name,headerLoginInfo);
// Vue.component(headerImage.name,headerImage);
// Vue.component(Header.name,Header);

export default {
  name: 'App',
  components :{
    'header-login-info': headerLoginInfo,
    'header-image': headerImage,
    'share-header': Header,
    'share-left': left,
    'share-right':right
  },
  methods:{
    confromBtn : function(){
      alert(33);
    },
    cancelBtn : function(){
      alert(44);
    }

  }
}
</script>

<style>
html,body {
  width :auto; height:auto; margin:0 auto;font-family: sans-serif;z-index: -1;
}
</style>
