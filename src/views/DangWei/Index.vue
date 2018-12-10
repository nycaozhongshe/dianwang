<!-- Dangwei -->
<template>
  <Dang-Wei-Bg pre-path="/">

    <div class="flex-box__warpper">
      <div class="row">
        <div class="col"
             v-for="(item,index) in topDatalist"
             @click="gotoPage('/department',item)"
             :class="{active:index===1}"
             :key="index">
          <img :src="`${$baseUrl}__imgs/dangwei/${index+1}@2x.png`"
               alt="">
        </div>

      </div>

      <div class="row">
        <div class="col"
             v-for="(item,index) in bottomDataList"
             @click="gotoPage('/department',item)"
             :key="index">
          <img :src="`${$baseUrl}__imgs/dangwei/${index+4}@2x.png`"
               alt="">
        </div>

      </div>
    </div>
  </Dang-Wei-Bg>
</template>

<script>
import DangWeiBg from '@/components/DangWeiBg'
import json from "@/key_val.json";
import data from './data.js'
export default {
  name: 'Dangwei',

  mixins: [],

  components: {
    DangWeiBg
  },

  props: {},

  data () {
    return {
      topDatalist: [],
      bottomDataList: [],
      serchKey: ""
    }
  },
  computed: {},

  watch: {},

  created () {
    /* eslint-disable */
    let b = {}
    let a = data[6].children.map((item) => {
      b[item] = { name: item }
    })
    console.log(JSON.stringify(b));


    this.initJson().forEach((item, index) => {
      if (index < 3) {
        this.topDatalist.push(item)
      } else {
        this.bottomDataList.push(item)
      }

    })

    this.data = json.dw.child

    // eslint-disable-next-line
    console.log(this.topDatalist);


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
    pre () {

    },
    initJson () {
      let object = json.dw.child
      let data = []
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          data.push(element)
        }
      }

      return data
    },
    gotoPage (path, item) {
      this.$router.push({
        path,
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
.flex-box__warpper {
  height: 60%;
  margin-top: 8%;
  .row {
    display: flex;
    justify-content: space-around;
    padding-left: 1%;
    padding-right: 0.8%;
    height: 50%;
    .col {
      width: calc((100% - 6vw) / 4);
      height: 100%;
      // border: 1px solid red;
      & + & {
        margin-left: 2vw;
      }
      display: flex;
      align-items: center;
      &.active {
        margin-top: -5vw;
        img {
          margin-top: 33%;
          transform: scale(1.3);
        }
      }
    }
  }
}
</style>

<style lang="scss">
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
</style>

