<template>
  <section v-if="visible" v-show="visible && loadend" class="card-img">
    <div class="mask" @click="handleClickMask"></div>
    <img class="top-img" :src="this.path" alt="" @load="imgOnload" />
  </section>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      loadend: false
    }
  },

  components: {},

  computed: {},

  watch: {
    visible: function(val) {
      if (val && !this.loadend) {
        Indicator.open({
          spinnerType: 'fading-circle'
        })
      }
    }
  },

  methods: {
    handleClickMask() {
      this.loadend = false
      this.$emit('close', false)
    },
    imgOnload() {
      this.loadend = true
      Indicator.close()
    }
  },

  created() {}
}
</script>
<style lang='less' scoped>
.card-img {
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  .mask {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 10000;
  }
  .top-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;
    max-width: 90%;
    max-height: 80%;
  }
}
</style>
