<!-- Department -->
<template>
  <Dang-Wei-Bg pre-path="/dangWei"
               @clear="clear">

    <div class="department__wrapper">
      <div class="title">{{$route.query.name}}</div>
      <div class="department-content">
        <div v-for="(item,index) in list"
             :key="index"
             @click="gotoPage('/departmentDetail',item)">
          {{item.name}}
        </div>
      </div>
    </div>

  </Dang-Wei-Bg>
</template>

<script>
import DangWeiBg from '@/components/DangWeiBg'
import json from "@/key_val.json";

export default {
  name: 'Department',

  mixins: [],

  components: {
    DangWeiBg
  },

  props: {},

  data () {
    return {
      title: '国网济南供电公司党委',
      list: [],
      serchKey: "",
      data: {},
      returnData: {},
      centerDialogVisible: false,
      activeImgList: [],
      playerOptions: {
        height: '360',
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [],
        poster: '', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。


        controlBar: {
          timeDivider: false,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  computed: {},

  watch: {
    '$route.query.name': {
      handler (val) {
        if (val) {
          this.list = JSON.parse(this.$route.query.list)
        }
      },
      immediate: true, // 立马执行一次handler


    }
  },

  created () {

    this.data = json.dw.child


  },

  mounted () { },

  destroyed () { },

  methods: {
    src (item) {
      this.playerOptions.sources = Object.assign([], [{
        // type: 'video/mp4',
        src: item// url地址
      }])
    },
    validateLowerCase (str) {
      const reg = /.+\.mp4/
      if (reg.test(str)) {
        this.src(str)
      }
      return reg.test(str)
    },
    pre () {

    },
    serch () {

      this.returnData = Object.assign({}, {})
      this.forIn(this.data)


      if (JSON.stringify(this.returnData) !== '{}') {
        // this.$message('暂无此人信息')
        this.activeImgList = this.returnData.child.reverse()
        this.centerDialogVisible = true
      } else {
        this.$message('暂无此人信息')

      }

    },

    forIn (object) {



      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          // eslint-disable-next-line

          if (element.child && JSON.stringify(element.child) !== '{}' && !Array.isArray(element.child)) {


            this.forIn(element.child)



          } else {

            if (element.name === this.serchKey) {
              this.returnData = Object.assign({}, element)
              return
            }
          }

          // this.forIn(element)
        }
      }
    },
    gotoPage (path, item) {


      let route = {
        path: path,
        query: {
          name: item.name,
        }
      }
      if (item.child) {
        route.query.list = JSON.stringify(item.child)
      } else {
        route.query.list = JSON.stringify({})
      }
      this.serchKey = ""
      this.$router.push(route)
    },
    clear () {
      this.serchKey = ""
    }
  }
}

</script>
<style lang='scss' scoped>
.department__wrapper {
  width: 100%;
  height: 73.24%;
  margin-top: 8%;

  .title {
    text-align: center;
    color: #d0121b;
    font-size: 2.8vw;
    margin-bottom: 2.8vw;
    line-height: 1;
  }
  .department-content {
    padding-left: 4vw;
    padding-right: 4vw;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 5.6vw);
    overflow: auto;
    // justify-content: space-between;
    text-align: center;
    div {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      // width: calc((100% -10vw) / 3);
      width: 30%;
      height: 4.9vw;
      background: #d0121b;
      color: #fff;
      font-size: 1.8vw;
      margin-bottom: 1.6vw;
      background: url("../../../public/__imgs/dangwei/itemBg@2x 2.png")
        no-repeat center;
      background-size: 100% 100%;
    }
    div:nth-child(3n + 2),
    div:nth-child(3n + 3) {
      margin-left: 5%;
    }
  }
}
</style>


