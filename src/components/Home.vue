<template lang="pug">
section
  h1.animated.slideInDown(v-if="i>=1") 艺考生,我们的征程是星辰大海...
  .grades.animated.slideInLeft(v-if="i>=2")
    small 你现在是
    span
      input(type="radio" id="1" value="1" v-model="grade")
      label(for="1") 高 一
    span
      input(type="radio" id="2" value="2" v-model="grade")
      label(for="2") 高 二
    span
      input(type="radio" id="3" value="3" v-model="grade")
      label(for="3") 高 三
  router-link.has-border.animated.slideInRight(:to="'/result/' + grade" v-show="grade") 继 续
</template>

<script lang="coffee">
export default
  data: ->
    grade: null
  order:
    end: 2
</script>

<style lang="css" scoped>
h1 {
  position: absolute;
  width: 40%;
  right: 24px;
  top: 24px;
  padding: 8px 14px;
  font-size: 30px;
  line-height: 1.4;
  text-align: justify;
  border: solid 1px currentColor;
}
.grades {
  position: absolute;
  width: 25%;
  bottom: 18%;
  left: 16px;
}
label {
  display: block;
  padding: 2px 12px;
  text-align: center;
  margin-bottom: 8px;
  font-size: 18px;
  border: solid 1px #fffbe6;
}
input {
  display: none;
}
input:checked+label {
  background: #fffbe6;
  color: #000;
}
a {
  position: absolute;
  right: 16px;
  bottom: 8%;
  padding: 2px 18px;
  font-size: 18px;
}
</style>
