<template lang="pug">
.content
  h1.animated.slideInDown(v-if="i>=1") 艺考生,我们的征程是星辰大海...
  .grades.animated.slideInLeft(v-if="i>=2")
    small 你现在是
    span
      input(type="radio" id="1" value="1" v-model="grade")
      label.btn(for="1") 高 一
    span
      input(type="radio" id="2" value="2" v-model="grade")
      label.btn(for="2") 高 二
    span(v-show="show3")
      input(type="radio" id="3" value="3" v-model="grade")
      label.btn(for="3") 高 三
  router-link.btn.animated.slideInRight(:to="'/result/' + grade" v-show="grade") 继 续
</template>

<script lang="coffee">
export default
  data: ->
    grade: null
  computed:
    show3: ->
      d = new Date()
      d.getMonth() < 5
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
  margin-bottom: 8px;
  text-align: center;
}
input {
  display: none;
}
input:checked+label {
  border-style: dashed;
}
a {
  position: absolute;
  right: 16px;
  bottom: 8%;
}
</style>
