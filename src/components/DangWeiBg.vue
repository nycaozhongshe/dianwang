<!-- DangWeiBg -->
<template>
  <div class="background-img"
       :style="{backgroundImage:`url(${$baseUrl}__imgs/dangwei/bg@2x.jpg)`} ">

    <div class="content">
      <slot />
    </div>

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

    <Dalog ref="dalog"
           :active-img-list="activeImgList">
    </Dalog>

  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Dalog from "@/components/Dalog";
import json from "@/key_val.json";

export default {
  name: 'DangWeiBg',

  mixins: [],

  components: {
    Icon,
    Dalog
  },

  props: {

  },

  data () {
    return {
      serchKey: "",
      activeImgList: [],
      returnData: {},
      data: {}
    }
  },
  computed: {},

  watch: {},

  created () {
    this.data = json.dw.child
  },

  mounted () { },

  destroyed () { },

  methods: {
    gotoPage () {
      // eslint-disable-next-line
      this.$router.go(-1)
      this.clear()
    },
    gotoHome () {
      this.$router.push('/')
      this.clear()
    },
    serch () {
      if (!this.serchKey) return this.$message.warning('请输入姓名')

      this.returnData = Object.assign({}, {})
      this.forIn(this.data)
      if (JSON.stringify(this.returnData) !== '{}') {
        // this.$message('暂无此人信息')
        let item = this.returnData.child
        this.$refs.dalog.centerDialogVisible = true
        let arr = []
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const element = item[key];
            arr.push(element)
          }
        }
        this.activeImgList = arr
      } else {
        this.$message('暂无此人信息')
      }

    },
    forIn (object) {

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          // eslint-disable-next-line
          if (element.child && JSON.stringify(element.child) !== '{}' && !Array.isArray(element.child)) {
            // eslint-disable-next-line
            if (element.name === this.serchKey) {
              this.returnData = Object.assign({}, element)
              return
            }
            this.forIn(element.child)
          }
        }
      }
    },
    clear () {
      this.serchKey = ""
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
</style>
