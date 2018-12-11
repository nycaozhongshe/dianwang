<!-- DepartmentDetail -->
<template>
  <Dang-Wei-Bg pre-path="/department">

    <div class="department__wrapper">
      <div class="title">{{$route.query.name}}</div>
      <div class="department-content">
        <div v-for="(item,index) in namelist"
             :key="index"
             @click="showImg(item)">
          {{item.name}}
        </div>
      </div>
    </div>
    <Dalog ref="dalog"
           :active-img-list="activeImgList">
    </Dalog>
  </Dang-Wei-Bg>
</template>

<script>
import DangWeiBg from '@/components/DangWeiBg'
import Dalog from "@/components/Dalog";

import json from "@/key_val.json";

export default {
  name: 'DepartmentDetail',

  mixins: [],

  components: {
    DangWeiBg,
    Dalog
  },

  props: {},

  data () {
    return {
      title: '党建部党支部',
      // '带电工作室党支部'
      centerDialogVisible: false,
      namelist: [],
      activeImgList: [],
      serchKey: "",
    }
  },
  computed: {},

  watch: {
    '$route.query.name': {
      handler (val) {
        if (val) {
          // eslint-disable-next-line
          let arr = JSON.parse(this.$route.query.list)
          this.namelist = arr

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
    trimNumber (str) {
      return str;
    },
    showImg (item) {
      // eslint-disable-next-line
      this.$refs.dalog.centerDialogVisible = true
      let arr = []
      for (const key in item.child) {
        if (item.child.hasOwnProperty(key)) {
          const element = item.child[key];
          arr.push(element)
        }
      }
      this.activeImgList = arr
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


