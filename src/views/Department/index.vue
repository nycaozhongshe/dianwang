<!-- Department -->
<template>
  <Dang-Wei-Bg pre-path="/dangWei">

    <div class="department__wrapper">
      <div class="title">{{$route.query.name}}</div>
      <div class="department-content">
        <div v-for="(item,index) in list"
             :key="index"
             @click="gotoPage('/departmentDetail',item)">
          {{item}}
        </div>
      </div>
    </div>
  </Dang-Wei-Bg>
</template>

<script>
import DangWeiBg from '@/components/DangWeiBg'

import data from '../DangWei/data.js'
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
      list: []
    }
  },
  computed: {},

  watch: {
    '$route.query.name': {
      handler (val) {
        if (val) {
          let arr = data.filter(item => {
            return item.name === val
          })

          this.list = arr[0].children
          // eslint-disable-next-line
          console.log(this.list);

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
    gotoPage (path, item) {
      this.$router.push({
        path: path,
        query: {
          name: item
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
</style>
