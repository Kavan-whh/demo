<template lang="html">
  <section>
    <svg class="svg__wrap--active" width="100%" height="100%">
      <my-circles cx="20%" cy="28%" r="15%"></my-circles>
      <my-rects x="55%" y="13%" width="25%" height="50px"></my-rects>


    </svg>

  </section>

</template>

<script>
import myCircles from '@/components/circles'
import myRects from '@/components/rects'

export default {
  components:{
    myCircles,myRects
  }
}
</script>

<style lang="css">
</style>
