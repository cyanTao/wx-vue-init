<template>
  <section class="body">
    <!-- 头部banner图 -->
    <div class="banner"></div>
    <!-- 图表列表 -->
    <div class="chart-list" v-if="list.length">
      <div class="list-item" v-for="item in list" :key="item.id" @click="goChartDetail(item)">
        <img :src="item.image || defaultImg" alt="" />
        <span class="chart-name">{{ item.name }}</span>
      </div>
    </div>
    <!-- 图表列表为空时显示 -->
    <div class="no-chart" v-else>
      <div class="wx-noresult-new9"></div>
      <div class="no-result guide-page" style="border-top: 0;height: auto;">
        <h2 class="no-result-title">生成您企业流程专属报表</h2>
        <div class="no-result-label">
          只需登录移步到微后台
          <span class="guide-link" @click="go_to_qy">{{ qy_link }}</span>
          <span>进行自定义可视化编辑，即可生成你的流程表单汇总报表</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      defaultImg: require('@/assets/img/form.png'),
      vipChart: [],
      list: [],
      qy_link: this.$url.qy_link
    }
  },
  methods: {
    async getList() {
      return this.$common.http({
        url: this.$url.getChartList,
        data: { page: 1, keywords: '', page_size: 9999 }
      })
    },
    goChartDetail(item) {
      var type = item.type,
        id = item.id
      if (type == 1) {
        window.location.href = '/index.php?debug=1&app=finstat&a=chart&id=' + id
      } else if (type == 2) {
        this.$common
          .http({
            method: 'get',
            url: '/index.php?app=finstat&m=ajax&a=report_detail&json=1&id=' + id
          })
          .then(data => {
            var link = data.link
            window.location.href = '/view/index/page/load.html?link=' + link
          })
      } else if (type == 3) {
        window.location.href = '/index.php?app=expense&a=index&menuType=1&id=' + id
      }
    },
    go_to_qy() {
      const url = this.$url.qy_link
      if (
        navigator.userAgent.indexOf('WindowsWechat') !== -1 ||
        navigator.userAgent.indexOf('Macintosh') !== -1
      ) {
        location.href = url
      } else {
        this.$common.copyUrl(url)
      }
    }
  },
  async created() {
    //anync异常捕获
    const [err, res] = await this.$common.errorCaptured(this.getList)
    console.log(err, res)

    function test(a, b, time, cb) {
      setTimeout(() => {
        cb(a + '-' + b)
      }, time)
    }

    // promisify
    const newFn = this.$common.promisify(test)
    newFn(1, 3, 2000).then(res => {
      console.log(2222222, res)
    })
  }
}
</script>
<style lang="less" scoped>
.body {
}

.banner {
  width: 100%;
  height: 200px;
  background-image: url('https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1189779147,4248115718&fm=202&mola=new&crop=v1');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

// 图表列表
.chart-list {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  .list-item {
    width: calc(100% / 3);
    padding: 15px 10px;
    border-bottom: 1px solid gainsboro;
    border-right: 1px solid gainsboro;

    &:nth-child(3n) {
      border-right: none;
    }
    &:active {
      background-color: #eee;
    }
    img {
      width: 50px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    .chart-name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 100%;
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

// 没有表单
.no-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wx-noresult-new9 {
    width: 200px;
    height: 200px;
    background-image: url('/view/index/static/Contents/images/image-new/zonghebaobiao@2x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .no-result-title {
    margin: 20px 0;
    text-align: center;
    color: #000;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    font-weight: normal;
  }
  .no-result-label {
    color: #9b9b9b;
    padding: 0 20px;
    word-break: break-all;
    text-align: center;
    line-height: 20px;
  }
  .guide-link {
    color: black;
  }
}
</style>
