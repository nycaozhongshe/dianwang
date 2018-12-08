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
      bottomDataList: []
    }
  },
  computed: {},

  watch: {},

  created () {


    this.initJson().forEach((item, index) => {
      if (index < 3) {
        this.topDatalist.push(item)
      } else {
        this.bottomDataList.push(item)
      }

    })


    // eslint-disable-next-line
    console.log(this.topDatalist);


  },

  mounted () { },

  destroyed () { },

  methods: {
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
