<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    border
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <van-icon
      name="search"
      slot="left"
      v-show="title !== '个人中心' && title !== '关于我'"
      >sd</van-icon
    >
    <van-icon
      name="close"
      slot="right"
      v-show="title === '关于我'"
      @click="test"
    ></van-icon>
  </van-nav-bar>
</template>

<script>
import { NavBar, Icon } from 'vant'
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods: {
    onClickLeft () {
      console.log('ds')
    },
    onClickRight () {
      console.log('sa')
    },
    test () {
      console.log('dsds')
    }
  }
}
</script>

<style scoped></style>
