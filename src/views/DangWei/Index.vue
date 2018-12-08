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
      data,
      topDatalist: [],
      bottomDataList: []
    }
  },
  computed: {},

  watch: {},

  created () {


    this.data.forEach((item, index) => {
      if (index < 3) {
        this.topDatalist.push({ name: item.name })
      } else {
        this.bottomDataList.push({ name: item.name })
      }

    })

    // eslint-disable-next-line


  },

  mounted () { },

  destroyed () { },

  methods: {
    gotoPage (path, item) {
      this.$router.push({
        path,
        query: {
          name: item.name
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
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
