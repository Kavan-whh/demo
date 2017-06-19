<template>
  <div id="app">
  
    <el-row>
      <!--  工具箱-->
      <el-col :span="4">
        <p>工具箱</p>
        <!--<my-tools></my-tools>-->
      </el-col>
  
      <!-- 画布展示区 -->
      <el-col :span="16">
        <!--<router-link to="/" tag="p" class="routerSec">画布</router-link>
        <router-link to="/temp" tag="p" class="routerSec">Temp</router-link>
        <router-view></router-view>-->
        <p>fsd</p>
      </el-col>
  
      <!-- 调试区 -->
      <el-col :span="4">
        <p>调试区</p>
      </el-col>
    </el-row>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
