<!-- DepartmentDetail -->
<template>
  <Dang-Wei-Bg pre-path="/department">

    <div class="department__wrapper">
      <div class="title">{{$route.query.name}}</div>
      <div class="department-content">
        <div v-for="(item,index) in namelist"
             :key="index"
             @click="showImg(item)">
          {{ trimNumber(item.src)}}
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="dialog__warpper"
           v-if="centerDialogVisible"
           @click.stop.prevent="centerDialogVisible =false">
        <div class="close">x</div>

        <div class="video-player__warpper"
             @click.stop.prevent="pre">

          <el-carousel :indicator-position="activeImgList&&activeImgList.length>1?'o':'none'"
                       :arrow="activeImgList&&activeImgList.length>1?'always':'never'"
                       :autoplay="false">
            <el-carousel-item v-for="item in activeImgList"
                              :key="item.src">
              <img :src="`./__imgs/departmentDetail/${item.src}.jpg`"
                   alt="">

            </el-carousel-item>
          </el-carousel>
        </div>

      </div>
    </transition>

  </Dang-Wei-Bg>
</template>

<script>
import DangWeiBg from '@/components/DangWeiBg'


let namelist1 = [
  { src: '4任志刚', imgLIst: [{ src: '4任志刚' }] },
  { src: '1田婕', imgLIst: [{ src: '1田婕' }] },
  { src: '2张兵', imgLIst: [{ src: '2张兵' }] },
  { src: '3刘震', imgLIst: [{ src: '3刘震' }] },
  { src: '5李新元', imgLIst: [{ src: '5李新元' }] },
  { src: '6申海福', imgLIst: [{ src: '6申海福' }] },
  { src: '7马玲', imgLIst: [{ src: '7马玲' }] },
  { src: '8王茜', imgLIst: [{ src: '8王茜' }] },
  { src: '9郭蔚', imgLIst: [{ src: '9郭蔚' }] },
  { src: '10战祥真', imgLIst: [{ src: '10战祥真' }] },
  { src: '11刘闻', imgLIst: [{ src: '11刘闻' }] },
  { src: '12张晓明', imgLIst: [{ src: '12张晓明' }] },
  { src: '13王晓洁', imgLIst: [{ src: '13王晓洁' }] }
]

let namelist2 = [

  { src: '吕平', imgLIst: [{ src: '吕平' }, { src: '吕平1' }] },
  { src: '陈元柏', imgLIst: [{ src: '陈元柏' }, { src: '陈元柏1' }] },
  { src: '朱国军', imgLIst: [{ src: '朱国军' }, { src: '朱国军1' }] },
  { src: '孙占功', imgLIst: [{ src: '孙占功' }, { src: '孙占功1' }] },
  { src: '王辉云', imgLIst: [{ src: '王辉云' }, { src: '王辉云1' }] },
  { src: '张磊', imgLIst: [{ src: '张磊' }, { src: '张磊1' }] },
  { src: '金宝', imgLIst: [{ src: '金宝' }, { src: '金宝1' }] },
  { src: '田明杰', imgLIst: [{ src: '田明杰' }, { src: '田明杰1' }] },



]
export default {
  name: 'DepartmentDetail',

  mixins: [],

  components: {
    DangWeiBg
  },

  props: {},

  data () {
    return {
      title: '党建部党支部',
      centerDialogVisible: false,
      namelist: [],
      activeImgList: []
    }
  },
  computed: {},

  watch: {
    '$route.query.name': {
      handler (val) {
        // eslint-disable-next-line
        console.log(val);

        if (val) {
          if (this.$route.query.name === '党建部党支部') {
            // eslint-disable-next-line
            console.log(111111);
            this.namelist = namelist1
          } else if (this.$route.query.name === '带电作业室党支部') {
            this.namelist = namelist2
          } else {
            this.namelist = []

          }

        }
      },
      immediate: true, // 立马执行一次handler


    }
  },

  created () {

  },

  mounted () { },

  destroyed () { },

  methods: {
    pre () {

    },
    trimNumber (str) {
      return str.replace(/\d+/g, '');
    },
    showImg (item) {
      this.activeImgList = Object.assign([], item.imgLIst)
      this.centerDialogVisible = true
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
    right: 2%;
    top: 2%;
    font-size: 4vw;
    color: #fff;
  }
  .video-player__warpper {
    height: 100%;
    width: 100%;
  }
}

// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 18px;
//   opacity: 0.75;
//   line-height: 300px;
//   margin: 0;
// }
</style>

<style lang="scss">
.el-carousel,
.el-carousel__container {
  height: 100%;
  padding-left: 3%;
  padding-right: 3%;
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
    max-height: 100%;
    height: auto;
  }
}
</style>

