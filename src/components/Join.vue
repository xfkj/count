<template lang="pug">
section
  h1 即刻加入非凡吧！
  ul.phones
    li 全国热线:400-009-1108
    li 选考咨询: 17767162695
    li 高考咨询:400-050-9886
  img.animated.flip(src="../assets/code.jpg")
  ul.address.animated.slideInUp(v-if="i>=1")
    li 硅谷校区:富阳区九龙大道富春硅谷园区4号楼
    li 象山校区:西湖区美院南路象山国际1号楼10F
    li 银湖校区:富阳区银湖街道受降镇金子垄5号
</template>

<script lang="coffee">
export default
  order:
    end: 1
    secs: 1
</script>

<style lang="css" scoped>
h1 {
  padding-top: 40px;
  margin-bottom: 32px;
  text-align: center;
  font-size: 24px;
}
.phones {
  font-size: 18px;
  margin-bottom: 32px;
  text-align: center;
}
img {
  display: block;
  margin: auto;
  width: 180px;
  height: 180px;
}
.address {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-top: 8px;
  padding-left: 8px;
  background: rgba(0,0,25,.4);
}
</style>
