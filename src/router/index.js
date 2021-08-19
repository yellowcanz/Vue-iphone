import Vue from 'vue'
import Router from 'vue-router'
import Section from '../components/Section.vue'
import Othersection from '../components/Othersection.vue'
import Homepod from '../view/Homepod.vue'
import SectionIphoneSE from '../components/iphoneSe/SectionIphoneSE.vue'
import IphoneSEcolor from '../components/IphoneSEcolor.vue'
import IphoneSEA13 from '../components/IphoneA13.vue'

Vue.use(Router)
const  routes = [
  {
    path:'/',
    component:Homepod
  }, 
  {
    path:'/section',
    component:Section
  },  
  {
    path:'/othersection',
    component:Othersection
  },  
  {
    path:'/sectioniphonese',
    component:SectionIphoneSE
  },
  {
    path:'/iphonesecolor',
    component:IphoneSEcolor
  },
  {
    path:'/iphonea13',
    component:IphoneSEA13
  }
]
const router =  new Router({
  routes,
  mode:'history',
})
export default router
