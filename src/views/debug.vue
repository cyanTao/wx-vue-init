<template>
  <section class="body">
    <img v-gallery:groudName src="../assets/img/cell1.png" alt="">
    <img v-gallery:groudName src="../assets/img/cell2.png" alt="">
    <img v-gallery:groudName src="../assets/img/cell3.png" alt="">
    <img v-gallery:groudName2 src="../assets/img/cell4.png" alt="">
    <img v-gallery:groudName2 src="../assets/img/cell5.png" alt="">
    <img v-gallery:groudName3 src="../assets/img/1.png" alt="">
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},

  computed: {},

  watch: {},

  methods: {},

  created() {}
}
</script>
<style lang='less' scoped>
.body {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
