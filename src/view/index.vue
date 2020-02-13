<!--  -->
<template>
<div>
<van-search
  v-model="searchValue"
  shape="round"
  show-action
  background="red"
  placeholder="请输入搜索关键词"
>
 <div slot="action" @click="onSearch">
<van-icon name="chat-o" info="9" size="30"/>
 </div>
</van-search>
 <!-- 主页轮播图 -->
<van-swipe :autoplay="3000">
 <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image.picUrl" height="150" width="100%"/>
  </van-swipe-item>
</van-swipe>
<van-grid :border="false" :column-num="4">
  <van-grid-item
    v-for="item in gridArr"
    :key="item.id"
  >
  <van-row>
  <van-col span="24"  offset="4"><van-icon size='40' name="https://pipefeng.oss-cn-shanghai.aliyuncs.com/shopvue/grid/%E6%89%8B%E6%9C%BA.png"></van-icon></van-col>
  <van-col span="24" offset="5">手机</van-col>
</van-row>
  <van-row>
  <van-col span="24"  offset="4"><van-icon size='40' name="https://pipefeng.oss-cn-shanghai.aliyuncs.com/shopvue/grid/%E6%89%8B%E6%9C%BA.png"></van-icon></van-col>
  <van-col span="24" offset="5">手机</van-col>
</van-row>
  </van-grid-item>
</van-grid>
</div>
</template>

<script>
import {Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, Icon, Col, Row} from 'vant'
export default {
  data () {
    return {
      searchValue: '',
      gridArr: [{id: 1, title: '手机', icon: 'gem-o'}, {id: 2, title: '电脑', icon: 'gem-o'}, {id: 3, title: '玩具', icon: 'gem-o'}, {id: 4, title: '家具', icon: 'gem-o'}],
      images: []
    }
  },
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {
    this.$get('index/getSwipe', {
      userId: '5e3275c0a4a946408ca53194'
    }).then((res) => {
      this.images = res.data.result.list
      console.log(this.images)
    })
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  },
  methods: {
    onSearch () {
      console.log(this.searchValue)
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
