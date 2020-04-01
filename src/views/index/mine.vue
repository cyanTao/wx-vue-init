<template>
  <section class="mine">
    <div class="ope-guide">
      <div class="title">
        <img class="icon" src="../../assets/img/document.png" alt="" />
        操作手册
      </div>
      <div class="guides">
        <img
          v-for="(item, index) in guides"
          :key="index"
          :src="item.path"
          alt=""
          @click="handleClick(item)"
        />
      </div>
    </div>
    <wv-group v-for="(group, index) in groups" :key="index">
      <wv-cell
        v-for="(cell, i) in group"
        :key="index + '' + i"
        :title="cell.title"
        is-link
        @click="handleClick(cell)"
      >
        <img class="icon cell-icon" :src="cell.icon" slot="icon" />
      </wv-cell>
    </wv-group>
    <card-img
      :visible="visible"
      :path="path"
      @close="
        val => {
          visible = val
        }
      "
    ></card-img>
  </section>
</template>

<script>
import cardImg from '@/components/cardImg'

export default {
  data() {
    return {
      guides: [
        {
          path: require('@/assets/img/1.png')
        },
        {
          path: require('@/assets/img/2.png'),
          to: 'http://baidu.com'
        }
      ],
      groups: [
        [
          {
            icon: require('@/assets/img/cell1.png'),
            title: '提建议,免费领取VIP'
          }
        ],
        [
          {
            icon: require('@/assets/img/cell2.png'),
            title: '专属客服咨询',
            event: item => {
              console.log(item)
              this.path = require('../../assets/img/test.png')
              this.visible = true
            }
          },
          {
            icon: require('@/assets/img/cell3.png'),
            title: '企业微信学院'
          },
          {
            icon: require('@/assets/img/cell4.png'),
            title: '关于企业微信PLUS'
          },
          {
            icon: require('@/assets/img/cell5.png'),
            title: '企业如何自定义报表'
          }
        ]
      ],
      visible: false,
      path: ''
    }
  },
  components: {
    cardImg
  },
  methods: {
    handleClick(item) {
      if (item.to) {
        window.location.href = item.to
      } else if (item.event && item.event instanceof Function) {
        item.event(item)
      } else {
        console.log(item)
      }
    }
  },
  created() {}
}
</script>
<style lang="less" scoped>
.icon {
  width: 18px;
  height: 18px;
}

.weui-cell {
  .weui-cell_hd {
    .cell-icon {
      margin-right: 5px;
      position: relative;
      transform: translateY(15%);
    }
  }
}

.ope-guide {
  padding: 15px 15px 7px 15px;
  background-color: white;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;
    .icon {
      margin-right: 5px;
    }
  }
  .guides {
    img {
      margin-right: 15px;
      margin-bottom: 10px;
      border: 1px solid gainsboro;
    }
  }
}
</style>
<style lang="less">
.mine {
  .weui-cells {
    margin-top: 10px !important;
  }
  .weui-cell::before,
  .weui-cell::after {
    z-index: 0;
  }
}
</style>
