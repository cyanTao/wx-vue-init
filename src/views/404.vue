<!--  -->
<template>
  <div class="success">
    <wv-icon type="info" :large="true"></wv-icon>
    <h2 class="tips">404</h2>
    <span class="desc">你要查看的网址可能已被删除或暂时不可用</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},

  computed: {},

  methods: {},
  created() {}
}
</script>
<style lang='less' scoped>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 20vh;
}

h2 {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #2d3034;
}

.weui-icon-info {
  color: #bdbbbb;
}
.tips {
  margin-top: 20px;
  display: block;
  color: #666;
  font-size: 4rem;
  font-weight: 200;
  text-align: center;
}
.desc {
  margin-top: 10px;
  display: block;
  color: #333;
  font-size: 16px;
  text-align: center;
}
</style>
