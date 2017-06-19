<template>
<section>
  <p>工具</p>
  <ul>
    <li class="element">我是图片</li>
  </ul>
</section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
section {
  width: 300px;
  overflow: hidden;
    color:gray;
     li {
        background: gray;
        list-style: none;
        width: 70%;
        color:white;
    }
    .element {
        -webkit-user-drag: element;
        cursor: move;
        -webkit-user-select: none;
    }
}
</style>
