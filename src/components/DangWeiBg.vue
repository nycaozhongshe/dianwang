<!-- DangWeiBg -->
<template>
  <div class="background-img"
       :style="{backgroundImage:`url(${$baseUrl}__imgs/dangwei/bg@2x.jpg)`} ">

    <div class="content">
      <slot />
    </div>

    <div class="position__warpper fanhui"
         @click="gotoPage()">
      <Icon icon-class="2fanhui"
            class-name="icon">
      </Icon>
      <span class="back">返回</span>

    </div>

    <div class="position__warpper zhuye"
         @click="gotoHome">
      <Icon icon-class="zhuye"
            class-name="icon">
      </Icon>
    </div>

  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'DangWeiBg',

  mixins: [],

  components: {
    Icon
  },

  props: {

  },

  data () {
    return {

    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    gotoPage () {
      // eslint-disable-next-line
      this.$router.go(-1)
      this.$emit('clear')
    },
    gotoHome () {
      this.$router.push('/')
      this.$emit('clear')
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
  padding: 0 4%;
  .content {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .position__warpper {
    cursor: pointer;
    position: absolute;
    left: 4%;
    bottom: 4%;
    display: inline-block;
    font-size: 1.6vw;
    display: inline-flex;
    align-items: center;
    background: #fff;
    color: #d0121b;
    padding: 0.3em 0.8em;
    .back {
      font-size: 1.4vw;
    }
  }
  .fanhui {
    border-radius: 60px;
    .icon {
      margin-right: 0.2em;
    }
  }
  .zhuye {
    right: 4%;
    padding: 0.5em 0.5em;
    left: auto;
    border-radius: 50%;
  }
}
</style>
