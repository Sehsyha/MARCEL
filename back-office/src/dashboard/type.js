//@flow
import type { Plugin, Prop } from '../plugins'
import type { State } from '../store'

import type {
  LayoutItem as LayoutItemT,
  Layout as LayoutT,
} from 'react-grid-layout/build/utils.js.flow'

export type Layout = LayoutT
export type LayoutItem = LayoutItemT
export type LayoutMap = { [instanceId: string]: ?LayoutItem }

export type PluginInstance = Plugin & {
  instanceId: string,
  x: number,
  y: number,
  columns: number,
  rows: number,
}

export type PluginInstanceMap = { [instanceId: string]: PluginInstance }
export type Dashboard = {
  name: string,
  description: string,
  rows: number,
  cols: number,
  ratio: number,
  plugins: PluginInstanceMap,
}

// Redux
export type SelectPluginAction = {
  type: 'DASHBOARD/SELECT_PLUGIN',
  payload: {
    instanceId: string,
  },
}

export type AddPluginAction = {
  type: 'DASHBOARD/ADD_PLUGIN',
  payload: {
    plugin: Plugin,
  },
}

export type DeletePluginAction = {
  type: 'DASHBOARD/DELETE_PLUGIN',
  payload: {
    plugin: Plugin,
  },
}
export type SaveLayoutAction = {
  type: 'DASHBOARD/SAVE_LAYOUT',
  payload: {
    layout: LayoutMap,
  },
}

export type ChangePropAction = {
  type: 'DASHBOARD/CHANGE_PROP',
  payload: {
    instanceId: string,
    prop: Prop,
    value: mixed,
  },
}

export type UploadStartedAction = {
  type: 'DASHBOARD/UPLOAD_STARTED',
}

export type UploadSuccesedAction = {
  type: 'DASHBOARD/UPLOAD_SUCCESSED',
}

export type UploadFailedAction = {
  type: 'DASHBOARD/UPLOAD_FAILED',
  payload: { error: string },
}

export type UpdateConfigAction = {
  type: 'DASHBOARD/UPDATE_CONFIG',
  payload: { property: string, value: string | number },
}

// eslint-disable-next-line no-use-before-define
export type DashboardThunk = ((DashboardAction) => mixed, () => State) => void

export type DashboardAction =
  | SelectPluginAction
  | AddPluginAction
  | DeletePluginAction
  | ChangePropAction
  | SaveLayoutAction
  | UploadStartedAction
  | UploadSuccesedAction
  | UploadFailedAction
  | DashboardAction

export type DashboardState = {
  selectedPlugin: string | null,
  dashboard: Dashboard,
}
