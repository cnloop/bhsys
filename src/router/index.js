import Vue from 'vue'
import Router from 'vue-router'


// GIS一张图
import GisMap from '@/components/Pages/GisMap'


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
import EnginDesign from '@/components/Pages/EnginDesign'

import DesignResult from '@/components/Pages/EnginDesign/DesignResult'
import DesignMGT from '@/components/Pages/EnginDesign/DesignResult/DesignMGT'
import EngineeringDOC from '@/components/Pages/EnginDesign/DesignResult/EngineeringDOC'

import DesignSetUp from '@/components/Pages/EnginDesign/DesignSetUp'
import ClassSetUp from '@/components/Pages/EnginDesign/DesignSetUp/ClassSetUp'
const enginDesignIndex = {
  path: "",
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




//#region 维修养护

import RepairCuring from '@/components/Pages/RepairCuring'
import Model from '@/components/Pages/RepairCuring/Model'
import ModelProject from '@/components/Pages/RepairCuring/Model/ModelProject'
import Budget from '@/components/Pages/RepairCuring/Budget'
import BudgetProject from '@/components/Pages/RepairCuring/Budget/BudgetProject'
import Decision from '@/components/Pages/RepairCuring/Decision'
import DecisionProject from '@/components/Pages/RepairCuring/Decision/DecisionProject'
import Progress from '@/components/Pages/RepairCuring/Progress'
import ProgressProject from '@/components/Pages/RepairCuring/Progress/ProgressProject'
import Check from '@/components/Pages/RepairCuring/Check'
import CheckProject from '@/components/Pages/RepairCuring/Check/CheckProject'
import DocRepair from '@/components/Pages/RepairCuring/Doc'
import DocRepairProject from '@/components/Pages/RepairCuring/Doc/DocProject'
import ChartProject from '@/components/Pages/RepairCuring/Doc/ChartProject'



const repairCuringIndex = {
  path: "",
  redirect: "model"
}
const model = {
  path: "model",
  meta: "标准化模型",
  component: Model,
  children: [{
    path: "/",
    redirect: "model-project"
  }, {
    path: "model-project",
    meta: "维护方案模型",
    component: ModelProject
  }]
}
const budget = {
  path: "budget",
  meta: "维护方案及预算",
  component: Budget,
  children: [{
    path: "/",
    redirect: "budget-project"
  }, {
    path: "budget-project",
    meta: "方案及预算",
    component: BudgetProject
  }]
}
const decision = {
  path: "decision",
  meta: "重大工程辅助决策",
  component: Decision,
  children: [{
    path: "/",
    redirect: "decision-project"
  }, {
    path: "decision-project",
    meta: "辅助决策",
    component: DecisionProject
  }]
}
const progress = {
  path: "progress",
  meta: "维护实时过程记录",
  component: Progress,
  children: [{
    path: "/",
    redirect: "progress-project"
  }, {
    path: "progress-project",
    meta: "进度管理",
    component: ProgressProject
  }]
}
const check = {
  path: "check",
  meta: "工程维护验收",
  component: Check,
  children: [{
    path: "/",
    redirect: "check-project"
  }, {
    path: "check-project",
    meta: "项目验收",
    component: CheckProject
  }]
}
const docRepair = {
  path: "doc",
  meta: "文档资料归档",
  component: DocRepair,
  children: [{
    path: "/",
    redirect: "doc-project"
  }, {
    path: "doc-project",
    meta: "文档资料",
    component: DocRepairProject
  }, {
    path: "chart-project",
    meta: "统计报表",
    component: ChartProject
  }]
}

const repairCuring = {
  path: "/repair-curing",
  meta: "工程维修养护",
  component: RepairCuring,
  children: [repairCuringIndex, model, budget, decision, progress, check, docRepair]
}
//#endregion




//#region 突发事件
import Emergencies from '@/components/Pages/Emergencies'
import Manage from '@/components/Pages/Emergencies/Manage'
import ManageProject from '@/components/Pages/Emergencies/Manage/ManageProject'
import Make from '@/components/Pages/Emergencies/Make'
import MakeProject from '@/components/Pages/Emergencies/Make/MakeProject'
import Start from '@/components/Pages/Emergencies/Start'
import StartProject from '@/components/Pages/Emergencies/Start/StartProject'
import Note from '@/components/Pages/Emergencies/Note'
import NoteProject from '@/components/Pages/Emergencies/Note/NoteProject'
import DocManage from '@/components/Pages/Emergencies/Doc'
import DocManageProject from '@/components/Pages/Emergencies/Doc/DocProject'



const emergenciesIndex = {
  path: "",
  redirect: "manage"
}
const manage = {
  path: "manage",
  meta: "预案管理编制",
  component: Manage,
  children: [{
    path: "/",
    redirect: "manage-project"
  }, {
    path: "manage-project",
    meta: "预案管理编制",
    component: ManageProject
  }]
}

const make = {
  path: "make",
  meta: "方案制定",
  component: Make,
  children: [{
    path: "/",
    redirect: "make-project"
  }, {
    path: "make-project",
    meta: "方案制定",
    component: MakeProject
  }]
}

const start = {
  path: "start",
  meta: "方案实施计划",
  component: Start,
  children: [{
    path: "/",
    redirect: "start-project"
  }, {
    path: "start-project",
    meta: "方案实施计划",
    component: StartProject
  }]
}


const note = {
  path: "note",
  meta: "实施情况记录",
  component: Note,
  children: [{
    path: "/",
    redirect: "note-project"
  }, {
    path: "note-project",
    meta: "实施情况记录",
    component: NoteProject
  }]
}

const docManage = {
  path: "doc",
  meta: "文档资料",
  component: DocManage,
  children: [{
    path: "/",
    redirect: "doc-project"
  }, {
    path: "doc-project",
    meta: "资料归档",
    component: DocManageProject
  }]
}

const emergencies = {
  path: "/emergencies",
  meta: "突发事件",
  component: Emergencies,
  children: [emergenciesIndex, manage, make, start, note, docManage]
}
//#endregion 突发事件




//#region 工程信息
import EngineeringInfo from '@/components/Pages/EngineeringInfo'
import Base from '@/components/Pages/EngineeringInfo/Base'
import BaseProject from '@/components/Pages/EngineeringInfo/Base/BaseProject'
import Run from '@/components/Pages/EngineeringInfo/Run'
import RunProject from '@/components/Pages/EngineeringInfo/Run/RunProject'
import Other from '@/components/Pages/EngineeringInfo/Other'
import OtherProject from '@/components/Pages/EngineeringInfo/Other/OtherProject'
import Table from '@/components/Pages/EngineeringInfo/Table'
import TableProject from '@/components/Pages/EngineeringInfo/Table/TableProject'


const engineeringInfoIndex = {
  path: "",
  redirect: "base"
}
const base = {
  path: "base",
  meta: "工程基础信息",
  component: Base,
  children: [{
    path: "/",
    redirect: "base-project"
  }, {
    path: "base-project",
    meta: "工程基础信息",
    component: BaseProject
  }]
}

const run = {
  path: "run",
  meta: "运行维护信息",
  component: Run,
  children: [{
    path: "/",
    redirect: "run-project"
  }, {
    path: "run-project",
    meta: "运行维护信息",
    component: RunProject
  }]
}

const other = {
  path: "other",
  meta: "工程附属设施",
  component: Other,
  children: [{
    path: "/",
    redirect: "other-project"
  }, {
    path: "other-project",
    meta: "工程附属设施",
    component: OtherProject
  }]
}


const table = {
  path: "table",
  meta: "工程附属设施",
  component: Table,
  children: [{
    path: "/",
    redirect: "table-project"
  }, {
    path: "table-project",
    meta: "工程附属设施",
    component: TableProject
  }]
}


const engineeringInfo = {
  path: "/engineering-info",
  meta: "工程信息",
  component: EngineeringInfo,
  children: [engineeringInfoIndex, base, run, other, table]
}

//#endregion


// 其他
const error = {
  path: "*",
  redirect: "/"
}

export default new Router({
  linkActiveClass: "link-active",
  routes: [home, gisMap, enginDesign, repairCuring, emergencies, engineeringInfo, error]
})
