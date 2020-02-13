<template>
  <div>
    <form @submit.prevent="onLogin">
      <div style="text-align: center;font-size: 25px;padding: 40px 20px;">商城</div>
      <van-cell-group class="login-info">
        <van-field
          v-model="username"
          required
          label="用户名"
          name="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="passwd"
          type="password"
          label="密码"
          placeholder="请输入密码"
          right-icon="question-o"
          name='密码'
          required
          autocomplete
          @click-right-icon="$toast('忘记密码')"
        />
      </van-cell-group>
      <van-button
        type="primary"
        size="large"
      >
        登录
      </van-button>
    </form>
  </div>
</template>
<script>
import {
  Field,
  Cell,
  CellGroup,
  Button,
  Image,
  Panel,
  Notify,
  Icon
} from 'vant'
import { mapMutations } from 'vuex'

export default {
  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Image.name]: Image,
    [Panel.name]: Panel,
    [Icon.name]: Icon,
    [Notify.name]: Notify
  },

  data () {
    return {
      username: '',
      passwd: ''
    }
  },
  methods: {
    ...mapMutations({
      setToken: 'account/setToken',
      setUser: 'account/setUser',
      ycloudToken: 'setting/ycloudToken'
    }),
    onLogin () {
      if (!this.username) {
        Notify({ type: 'danger', message: '账号不能为空' })
        return
      }
      if (!this.passwd) {
        Notify({ type: 'danger', message: '密码不能为空' })
        return
      }
      this.$post('admin/login', {
        username: this.username,
        password: this.passwd
      }).then((res) => {
        if (res.data.status === '0') {
          this.$router.push({name: 'index'})
        } else {
          Notify({ type: 'danger', message: res.data.msg })
        }
      })
    }
  }
}
</script>

<style lang="less">
</style>
