<template>
<div id="app">
  <el-row>
    <!--  工具箱-->
    <el-col :span="4">
      <p>工具箱</p>
    </el-col>
    <!-- 画布展示区 -->
    <el-col :span="16">
      <p>画布</p>
      <router-view></router-view>
    </el-col>
    <!-- 调试区 -->
    <el-col :span="4">
      <p>调试区</p>
    </el-col>
  </el-row>


</div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
