//@flow
import React from 'react'
import ReactGridLayout from 'react-grid-layout'

import './Grid.css'
import 'react-grid-layout/css/styles.css'

import type { PluginInstance, LayoutItem, Layout } from '../type'

export type Item = { layout: LayoutItem, plugin: PluginInstance }
export type Props = {
  size: { height: number, width: number },
  ratio: number,
  rows: number,
  cols: number,
  layout: Item[],
  selectPlugin: PluginInstance => void,
  selectedPlugin: string,
  saveLayout: Layout => void,
}

const makePluginInstance = (selectPlugin, selectedPlugin) => item => {
  const { layout, plugin } = item
  const isSelected = selectedPlugin === plugin.instanceId
  return (
    <div
      key={plugin.instanceId}
      data-grid={layout}
      className={isSelected ? 'selected' : ''}
      onClick={() => selectPlugin(plugin)}
    >
      {plugin.name}
    </div>
  )
}

const Grid = (props: Props) => {
  const { size: { width, height }, ratio, rows, cols } = props
  const { layout, saveLayout, selectPlugin, selectedPlugin } = props
  const marginHeight: number = ReactGridLayout.defaultProps.margin[1]

  const containerRatio = width / height
  const gridWidth = containerRatio >= ratio ? ratio * height : width
  const gridHeight = containerRatio >= ratio ? height : width / ratio
  const rowHeight = (gridHeight - (rows + 1) * marginHeight) / rows

  return (
    <div className="Grid">
      <ReactGridLayout
        cols={cols}
        width={gridWidth}
        rowHeight={rowHeight}
        verticalCompact={false}
        maxRows={rows}
        isRearrangeable={false}
        onLayoutChange={saveLayout}
      >
        {layout.map(makePluginInstance(selectPlugin, selectedPlugin))}
      </ReactGridLayout>
    </div>
  )
}

export default Grid
