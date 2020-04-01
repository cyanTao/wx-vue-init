<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang="less">
#app {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #000000;
  padding-bottom: 50px;
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
div,
span,
p,
ul,
li {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
