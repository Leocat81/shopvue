<template>
  <div>
    <NavBar title="个人中心"></NavBar>
    <div class="user-header">
      <div class="user-avatar">
        <div style="height: auto;float: left">
          <van-image
                  round
                  width="80"
                  height="80"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="user-content">
          <div>
            张三
          </div>
          <div>
            20194534222
          </div>
        </div>
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="underway-o" color="#1989fa" />
        计划
      </van-col>
      <van-col span="6">
        <van-icon name="orders-o" color="#07c160"/>
        订单
      </van-col>
      <van-col span="6">
        <van-icon name="/static/images/progress.png" />
        进度
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" color="#DFB176"/>
        工序委外收货
      </van-col>
    </van-row>
    <van-panel title="代办任务" style="padding-bottom: 50px">
      <van-card
              :centered="true"
              v-for="(item,index) of taskArr" :key='index'
      >
        <div slot="title">
          物料代码：{{foodCode}}
        </div>
        <div slot="title">
          创建时间：{{createTime}}
        </div>
        <div slot="title">
          操作类型：{{handleType}}
        </div>
      </van-card>
    </van-panel>
    <div></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Panel, Field, Card, Image, GridItem, Grid } from 'vant'
import { mapState } from 'vuex'
import NavBar from '../../components/NavBar'
import TabBar from '../../components/TabBar'
export default {
  data () {
    return {
      foodCode: '20190106',
      createTime: new Date(),
      handleType: '人工操作',
      taskArr: [0, 1, 2, 4, 5]
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Panel.name]: Panel,
    [Field.name]: Field,
    [Card.name]: Card,
    [Image.name]: Image,
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    NavBar,
    TabBar
  },
  computed: {
    ...mapState({
      token: state => state.account.token
    })
  }
}
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }
  &-header{
    width: auto;
    height: 200px;
    text-align: center;
    background: url(~@/assets/v2_q35he1.jpg);
  }
  &-avatar{
    display:inline-block;
    margin-top: 30px;
    width: 90%;
    height: 40%;
  }
  &-content{
    float: left;
    width: 80px;
    height: 80px;
    margin-top: 10px
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
