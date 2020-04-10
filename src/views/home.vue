<template>
  <div class="home">
    <van-search
      placeholder="请输入搜索关键词"
      disabled
    />
    <van-skeleton :row="3" :loading="loading">
      <van-swipe class="home-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </van-skeleton>
    <van-skeleton :row="3" :loading="loading">
    <ul class="goods-types">
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类一</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类二</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类三</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类四</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类五</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类六</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类七</div>
      </li>
      <li>
        <div class="img-wrap"><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></div>
        <div class="name">品类八</div>
      </li>
    </ul>
    </van-skeleton>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar.vue'
export default {
  name: 'Home',
  data () {
    return {
      loading: true
    }
  },
  components: {
    Tabbar
  },
  mounted () {
    this.loading = false
  }
}
</script>
<style lang="scss" scoped>
.home-swipe {
  margin: 0 12px;
  border-radius: 10px;
  background-color: #39a9ed;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
}
.goods-types {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  li {
    width: 25%;
    text-align: center;
    margin-bottom: 10px;
    .img-wrap {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 5px;
    }
    .name {
      font-size: 13px;
    }
  }
}
</style>

