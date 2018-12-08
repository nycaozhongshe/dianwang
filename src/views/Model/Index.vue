<!-- Index -->
<template>
  <div style="height:100%">
    <!-- <progressive-background :src="$baseUrl+ '__imgs/index/index.jpg'"
                              aspect-ratio=".625" /> -->

    <div class="background-img"
         :style="{backgroundImage:`url(${$baseUrl}__imgs/index/index.jpg)`} "
         @click="$router.push('/')">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Model',

  mixins: [],

  components: {
  },

  props: {},

  data () {
    return {

    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {}
}

</script>
<style lang='scss' scoped>
a {
  display: block;
  height: 100%;
}
.background-img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: no-repeat center;
  background-size: 100% 100%;
}
</style>
