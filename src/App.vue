<template>
  <div>
    <headerInfo></headerInfo>
    <Header></Header>
    <Hello class="Content-left">
      <router-view/>
    </Hello>
    <Hello2 class="Content-right"></Hello2>
  </div>
</template>

<script>
import Hello from '@/components/hello'
import Hello2 from '@/components/hello2'
import Header from'@/components/header/header'
import headerInfo from'@/components/header/headerInfo'

export default {
  name: 'App',
  components:{
    headerInfo,
    Hello,
    Hello2,
    Header
  }
}
</script>

<style>
.Content-right {
  position :fixed;top: 150px;right: 10%; width :15%; z-index:9997;height: 700px;
  -webkit-box-shadow:0px 3px 3px #c8c8c8 ;
  -moz-box-shadow:0px 3px 3px #c8c8c8 ;
  box-shadow:0px 3px 3px #c8c8c8 ;
}
.Content-left {
  position :relative;top: 150px; width :80%; z-index:9997;height: auto;
  -webkit-box-shadow:0px 3px 3px #c8c8c8 ;
  -moz-box-shadow:0px 3px 3px #c8c8c8 ;
  box-shadow:0px 3px 3px #c8c8c8 ;
}

</style>
