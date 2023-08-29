<template>
  <div>
    <Header v-show="$route.name === 'Home'"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

/*  height : 100%;
  overflow : scroll;*/
Header{display: inline-block; overflow: hidden;}
</style>
