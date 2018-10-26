import Vue from 'vue'
import Router from 'vue-router'


// GIS一张图
import GisMap from '@/components/Pages/GisMap'

//#region 设计成果
import EnginDesign from '@/components/Pages/EnginDesign'

import DesignResult from '@/components/Pages/EnginDesign/DesignResult'
import DesignMGT from '@/components/Pages/EnginDesign/DesignResult/DesignMGT'
import EngineeringDOC from '@/components/Pages/EnginDesign/DesignResult/EngineeringDOC'

import DesignSetUp from '@/components/Pages/EnginDesign/DesignSetUp'
import ClassSetUp from '@/components/Pages/EnginDesign/DesignSetUp/ClassSetUp'

//#endregion

// 维修养护
import RepairCuring from '@/components/Pages/RepairCuring'

// 突发事件
import Emergencies from '@/components/Pages/Emergencies'

// 工程信息
import EngineeringInfo from '@/components/Pages/EngineeringInfo'






Vue.use(Router)


// 首页
const home = {
  path: "/",
  redirect: "/gis-map"
}


// GIS一张图
const gisMap = {
  path: '/gis-map',
  name: 'GisMap',
  component: GisMap
}

//#region 工程设计成果
const enginDesignIndex = {
  path: "",
  name: "工程设计成果",
  redirect: "design-result"
}

const designResult = {
  path: "design-result",
  meta: "设计成果",
  component: DesignResult,
  children: [{
    path: "/",
    redirect: "design-mgt"
  }, {
    path: "design-mgt",
    meta: "设计管理",
    component: DesignMGT
  }, {
    path: "engineering-doc",
    meta: "工程文档",
    component: EngineeringDOC
  }]
}

const designSetUp = {
  path: "design-setUp",
  meta: "成果分类设置",
  component: DesignSetUp,
  children: [{
    path: "",
    redirect: "class-setUp"
  }, {
    path: "class-setUp",
    meta: "成果分类设置",
    component: ClassSetUp
  }]
}

const enginDesign = {
  path: "/engin-design",
  meta: "工程设计成果",
  component: EnginDesign,
  children: [enginDesignIndex, designResult, designSetUp]
}
//#endregion




// 维修养护
const repairCuring = {
  path: "/repair-curing",
  name: "RepairCuring",
  component: RepairCuring,
}

// 突发事件
const emergencies = {
  path: "/emergencies",
  name: "Emergencies",
  component: Emergencies,
}

// 工程信息
const engineeringInfo = {
  path: "/engineering-info",
  name: "EngineeringInfo",
  component: EngineeringInfo,
}


// 其他
const other = {
  path: "*",
  redirect: "/"
}

export default new Router({
  linkActiveClass: "link-active",
  routes: [home, gisMap, enginDesign, repairCuring, emergencies, engineeringInfo, other]
})
