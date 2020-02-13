<template>
    <van-tabbar route v-model="active" :fixed="true">
        <van-tabbar-item
                replace
                to="/user"
                icon="home-o"
        >
            主页
        </van-tabbar-item>
        <van-tabbar-item
                replace
                to="/login"
                icon="friends-o"
        >
            关于我
        </van-tabbar-item>
    </van-tabbar>
</template>
<script>
import {
  Tabbar,
  TabbarItem
} from 'vant'
export default {
  name: 'TabBar',
  data () {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style scoped>

</style>
