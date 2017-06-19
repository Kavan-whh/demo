<template>
<div id="app">

  <el-row>
    <!--  工具箱-->
    <el-col :span="4">
      <tools></tools>
    </el-col>

    <!-- 画布展示区 -->
    <el-col :span="16">
      <!--<router-link to="/" tag="p" class="routerSec">画布</router-link>
        <router-link to="/temp" tag="p" class="routerSec">Temp</router-link>
        <router-view></router-view>-->
      <show></show>
    </el-col>

    <!-- 调试区 -->
    <el-col :span="4">
      <m-detail></m-detail>
    </el-col>
  </el-row>
  <!--<router-view></router-view>-->
</div>
</template>

<script>
import Tools from 'components/tools.vue'
import MDetail from 'components/detail.vue'
import Show from 'components/show.vue'
export default {
  components: {
    Tools,
    MDetail,
    Show
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 500px;
}
</style>
