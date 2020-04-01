<template>
  <section class="index-page">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- 底部tabbar -->
    <template>
      <wv-tabbar>
        <wv-tabbar-item
          v-for="(item, index) in menus"
          :key="index"
          :to="item.to"
          :is-on="isActive(item.to)"
        >
          <span slot="icon" style="display: inline-block; position: relative;">
            <img
              class="weui-tabbar__icon"
              :src="isActive(item.to) ? item.activeIcon : item.icon"
              slot="icon"
            />
          </span>
          {{ item.name }}
        </wv-tabbar-item>
      </wv-tabbar>
    </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: '报表',
          to: '/report',
          icon: require('@/assets/img/report.png'),
          activeIcon: require('@/assets/img/report-active.png')
        },
        {
          name: '我的',
          to: '/mine',
          icon: require('@/assets/img/mine.png'),
          activeIcon: require('@/assets/img/mine-active.png')
        }
      ]
    }
  },
  computed: {},
  methods: {
    isActive(type) {
      return this.$route.path === type
    }
  }
}
</script>
<style lang='less'>
.index-page {
  .weui-tabbar {
    background-color: #fafafa;
    .weui-tabbar__item {
      &.weui-bar__item_on {
        .weui-tabbar__label {
          color: #2f7dcd;
        }
      }
    }
  }
}
</style>
