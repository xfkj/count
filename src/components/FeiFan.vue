<template lang="pug">
.content
  h1.animated.bounceInDown 非凡是怎样炼成的
  ul
    li(v-if="i==0").animated.bounceInLeft
      h2 2007，
      p 非凡文化课席卷杭州各大画室!
    li(v-if="i==1").animated.bounceInLeft
      h2 2008，
      p 非凡教育正式成立!
    li(v-if="i==2").animated.bounceInLeft
      h2 2009，
      p 非凡开创国内首届“艺术生文化课冲刺营”!
    li(v-if="i==3").animated.bounceInLeft
      h2 2010，
      p 非凡开创国内首届“艺术生文化课冲刺营”!
    li(v-if="i==4").animated.bounceInLeft
      h2 2011，
      p 非凡搬迁离国美3公里的大美创意园!
    li(v-if="i==5").animated.bounceInLeft
      h2 2012，
      p 非凡出版全国首套“艺术生专用教材”!
    li(v-if="i==6").animated.bounceInLeft
      h2 2013，
      p 非凡重金打造“阅卷与评测”系统，把控教学!
    li(v-if="i==7").animated.bounceInLeft
      h2 2014，
      p 非凡学员突破400，成为杭州最大文补学校之一!
    li(v-if="i==8").animated.bounceInLeft
      h2 2015，
      p 非凡奖励高考状元谢智伟，宝马一辆!
    li(v-if="i==9").animated.bounceInLeft
      h2 2016，
      p 非凡送出2辆奔驰，90万奖学金鼓励学员!
    li(v-if="i==10").animated.bounceInLeft
      h2 2017，
      p 非凡重金打造VanSchool系统，价值两千万!
    li(v-if="i==11").animated.bounceInLeft
      h2 2018，
      p 非凡至今有7548名学员，1373人录取九大美院等院校!
    li(v-if="i==12").animated.bounceInLeft
      h2 2019，
      p 人生无限，我们在路上...
    .continue.animated.bounceInLeft
      button.btn(@click="i += 1" v-if="i<12") >>
  router-link.animated.fadeIn(to="/join" v-if="i==12") 继 续
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
h1 {
  position: absolute;
  top: 32px;
  right: 32px;
  width: 50px;
  font-size: 30px;
  text-align: center;
  border: solid 1px currentColor;
}
ul {
  position: absolute;
  width: 70%;
  top: 20%;
  padding-left: 16px;
  font-size: 18px;
}
li {
  height: 125px;
}

h2 {
  font-size: 28px;
}
.continue {
  text-align: center;
}
button.btn {
  font-size: 20px;
  padding: 0 10px;
  transform: all .7s;
}
button.btn:active {
  padding: 2px 20px;
}

a {
  position: absolute;
  left: 16px;
  bottom: 30%;
  padding: 2px 18px;
  font-size: 18px;
  border: solid 1px currentColor;
}
</style>
