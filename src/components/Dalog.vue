<!-- Dalog -->
<template>

  <transition name="fade">
    <div class="dialog__warpper"
         v-if="centerDialogVisible"
         @click="centerDialogVisible =false">
      <div class="close">x</div>

      <div class="video-player__warpper"
           @click.stop.prevent="pre">
        <el-carousel :indicator-position="activeImgList&&activeImgList.length>1?'o':'none'"
                     :arrow="activeImgList&&activeImgList.length>1?'always':'never'"
                     :autoplay="false">
          <el-carousel-item v-for="item in activeImgList"
                            :key="item">

            <div v-if="validateLowerCase(item)"
                 style="width:100%;height:100%">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions">
              </video-player>
            </div>
            <img v-else
                 :src="`./${item}`"
                 alt="">

          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'Dalog',

  mixins: [],

  components: {},

  props: {
    activeImgList: {}
  },

  data () {
    return {
      centerDialogVisible: false,
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
  computed: {

  },

  watch: {},

  created () { },

  mounted () {

  },

  destroyed () { },

  methods: {
    close () {
      console.log(1111);
    },
    pre () {

    },
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
  }
}

</script>
<style lang='scss' scoped>
.dialog__warpper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  padding: 4%;
  z-index: 9999;
  .close {
    position: absolute;
    right: 10%;
    top: 3%;
    font-size: 4vw;
    color: #fff;
    z-index: 9999;
  }
  .video-player__warpper {
    height: 100%;
    width: 100%;
  }
}
</style>

<style lang='scss'>
.dialog__warpper {
  .el-carousel {
    padding-left: 13%;
    padding-right: 13%;
  }
  .el-carousel,
  .el-carousel__container {
    height: 100%;
  }
  .el-carousel__arrow {
    background: red;
    height: 5vw;
    width: 5vw;
    font-size: 4vw;
  }
  .el-carousel__button {
    height: 1vw;
    width: 4vw;
  }
  .el-carousel__arrow--right {
    right: -0.9vw;
  }
  .el-carousel__arrow--left {
    left: -0.9vw;
  }
  .el-carousel__item {
    display: flex;
    align-items: center;
    img {
      height: auto;
    }
  }

  .video-player {
    height: 100%;
    width: 100%;
    .video-js.vjs-fluid {
      height: 100% !important;
      padding: 0 !important;
    }
    .video-js .vjs-big-play-button {
      top: 50%;
      left: 50%;
      margin-left: -1.5em;
      margin-top: -1em;
      background-color: rgba(0, 0, 0, 0.45);
      font-size: 3.5em;
      height: 2em !important;
      line-height: 2em !important;
      margin-top: -1em !important;
    }
  }
}
</style>
