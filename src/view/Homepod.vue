<template>
  <div>
    <ul class="nav">
      <li>Mac</li>
      <li>iPhone</li>
      <li>iPad</li>
      <li>Watch</li>
      <li>Music</li>
    </ul>
    <Other-section></Other-section>
    <Others-section></Others-section>
    <OthersSE-section></OthersSE-section>
    <OthersSEcolor-section></OthersSEcolor-section>
    <OthersA13-section></OthersA13-section>
  </div>
</template>
<script>
import Othersection from '../components/Othersection.vue'
import Section from '../components/Section.vue'
import SectionIphoneSE from '../components/iphoneSe/SectionIphoneSE.vue'
import IphoneSEcolor from '../components/IphoneSEcolor.vue'
import IphoneA13 from '../components/IphoneA13.vue'
export default {
  components: {
    'Other-section': Othersection,
    'Others-section': Section,
    'OthersSE-section': SectionIphoneSE,
    'OthersSEcolor-section': IphoneSEcolor,
    'OthersA13-section': IphoneA13,
  },
}
</script>
<style scoped>
ul.nav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: aliceblue;
  padding: 20px 0;
  backdrop-filter: saturate(180%) blur(20px);
  width: 100%;
  z-index: 9999;
}
</style>
