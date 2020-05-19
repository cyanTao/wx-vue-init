<template>
  <section class="body">
    <img v-gallery:groudName src="../assets/img/cell1.png" alt="" />
    <img v-gallery:groudName src="../assets/img/cell2.png" alt="" />
    <img v-gallery:groudName src="../assets/img/cell3.png" alt="" />
    <img v-gallery:groudName2 src="../assets/img/cell4.png" alt="" />
    <img v-gallery:groudName2 src="../assets/img/cell5.png" alt="" />
    <img v-gallery:groudName3 src="../assets/img/1.png" alt="" />
    <button @click="setStu">弹窗</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Message from '@/components/Message/index.js'

Vue.use(Message)
export default {
  props: ['id', 'test'],
  data() {
    return {
      name: 'this is my name',
      student: 326
    }
  },

  components: {},

  computed: {},

  watch: {
    name: [
      'sayName1',
      function(newVal) {
        console.log(newVal)
        console.log(1111111111111111)
      },
      {
        handler: 'sayName',
        immaediate: true
      }
    ]
  },

  methods: {
    sayName1() {
      console.log(999)
    },
    setStu() {
      // this.name = 123
      this.$message({
        type: 'success',
        content: '成功信息提示',
        duration: 5000
      })
    },
    itemClick(item) {
      console.log(item)
      this.currentItem = item
    },
    sayName() {
      console.log(2222222)
      console.log(this.name)
    }
  },

  created() {
    console.log('this is created')
    console.log(this.id)
    console.log(this.test)
  }
}
</script>
<style lang='less' scoped>
.body {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
}

.test .weui-cells {
  background-color: red;
}
</style>
