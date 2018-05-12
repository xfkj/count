<template lang="pug">
section
  video(src="/night.mp4" :style="{left}" autoplay loop muted)
  .shade
  router-view.animated.fadeIn
</template>

<script lang="coffee">
export default
  computed:
    left: -> @$store.state.bgLeft
</script>

<style lang="css" scoped>
section {
  height: 100vh;
}
.shade {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,20,.3);
}
video {
  position: absolute;
  z-index: -2;
  height: 100%;
  width: auto;
  transition: left .7s;
}
</style>
