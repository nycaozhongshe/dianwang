<!-- Department -->
<template>
  <Dang-Wei-Bg pre-path="/dangWei">

    <div class="input__warpper">
      <el-input placeholder="请输入姓名"
                v-model="serchKey"
                @keyup.enter.native="serch">
        <i slot="suffix"
           class="el-input__icon  el-icon-search"
           @click="serch">
        </i>
      </el-input>
    </div>

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
                              :key="item">
              <img :src="`./${item}`"
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
      activeImgList: []
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
    // eslint-disable-next-line
    console.log(this.data);

  },

  mounted () { },

  destroyed () { },

  methods: {
    serch () {

      this.returnData = Object.assign({}, {})
      this.forIn(this.data)
      // eslint-disable-next-line
      console.log(this.returnData);

      if (JSON.stringify(this.returnData) !== '{}') {
        // this.$message('暂无此人信息')
        this.activeImgList = this.returnData.child
        this.centerDialogVisible = true
      } else {
        this.$message('暂无此人信息')

      }

    },

    forIn (object) {
      // eslint-disable-next-line
      console.log('开始');


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
      // eslint-disable-next-line
      console.log(item);

      this.$router.push({
        path: path,
        query: {
          name: item.name,
          list: JSON.stringify(item.child)
        }
      })
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
</style>

<style lang="scss">
.input__warpper {
  width: 18vw;
  position: absolute;
  right: 4%;
  top: 5%;
  .el-input__inner {
    height: 4vw;
    line-height: 4vw;
    font-size: 1.8vw;
  }
  .el-input__icon {
    width: 4vw;
    font-size: 1.8vw;
    line-height: 1;
  }
  .el-input__inner:focus {
    border-color: #d0121b;
  }
}

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

