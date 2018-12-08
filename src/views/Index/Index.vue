<!-- Index -->
<template>
  <div style="height:100%">

    <div class="background-img"
         :style="{backgroundImage:`url(${$baseUrl}__imgs/entry/bg.jpg)`} ">

      <div class="list__warpper">

        <div class="list__item"
             :style="{backgroundImage:`url(${$baseUrl}__imgs/entry/1.1.png)`} "
             @click="gotoPage('/dangWei')">

        </div>
      </div>
      <div class="list__warpper">

        <div v-for="(item,index) in list"
             class="list__item"
             :key="index"
             @click="gotoPage(item)"
             :style="{backgroundImage:`url(${$baseUrl}__imgs/entry/${index+2}.1.png)`} ">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// 'model',
let list = ['/model', 'modelList',]
export default {
  name: 'Index',

  mixins: [],

  components: {
  },

  props: {},

  data () {
    return {
      list
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    gotoPage (path) {
      this.$router.push(path)
    }
  }
}

</script>
<style lang='scss' scoped>
.background-img {
  width: 100%;
  height: 100%;
  background: no-repeat center;
  background-size: 100% 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  .list__warpper {
    width: 63.8vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5vw;
    .list__item {
      cursor: pointer;
      width: 24vw;
      height: 6.7vw;
      background: no-repeat center;
      background-size: 100% 100%;
      position: relative;

      // // & + & {
      // margin-left: 15.8vw;
      // // }
    }
  }
}
</style>
