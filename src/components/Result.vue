<template lang="pug">
section
  .header.animated.slideInDown
    h1: span.has-border {{res.days}}天{{res.hours}}小时{{res.mins}}分{{res.secs}}秒
    .subtitle
      small 你离高考
      small 你还可以
  ul
    li(v-if="i>=1").animated.slideInRight: span 吃{{res.days * 3}}顿饭
    li(v-if="i>=2").animated.slideInLeft: span 背{{res.days * 15}}个单词
    li(v-if="i>=3").animated.slideInRight: span 刷{{res.days * 2}}张试卷
    li(v-if="i>=4").animated.slideInLeft: span 画{{Math.floor (res.days / 2)}}幅画
    li(v-if="i>=5").animated.slideInRight: span 上{{res.days * 8}}节课
  .link.animated.fadeIn(v-if="i>=6")
    router-link(to="/feifan") 继 续
</template>

<script lang="coffee">
export default
  computed:
    end: ->
      i = +@$route.params.role
      now = new Date()
      year = now.getFullYear()
      year = year + 3 - i
      new Date(year + '/6/7 8:00')
    res: ->
      t = (@end - Date.now())/1000

      days: Math.floor(t/(3600 * 24))
      hours: Math.floor((t/3600) % 24)
      mins: Math.floor((t/60) % 60)
      secs:  Math.floor(t%60)
  order:
    end: 6
    secs: 1.5
</script>

<style lang="css" scoped>
.header {
  padding: 40px 16px;
  text-align: center;
}
h1 span {
  margin-bottom: 4px;
  padding: 0 12px;
  font-size: 20px;
  letter-spacing: 1px;
  background: rgba(0,0,25,.4);
}
.subtitle {
  display: flex;
  justify-content: space-between;
}
ul {
  position: absolute;
  width: 100%;
  top: 30%;
  font-size: 18px;
}
li {
  margin-bottom: 12px;
}
li span{
  padding: 2px 8px;
  border: solid 1px currentColor;
  background: rgba(0,0,25,.4);
}
li:nth-child(odd) {
  text-align: right;
}
li:nth-child(odd) span {
  padding-right: 16px;
  border-right: none;
}
li:nth-child(even) span {
  padding-left: 16px;
  border-left: none;
}
.link {
  position: absolute;
  width: 100%;
  bottom: 56px;
  text-align: center;
}
a {
  padding: 2px 18px;
  font-size: 18px;
  border: solid 1px currentColor;
}
</style>
