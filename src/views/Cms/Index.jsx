import React, { Component } from 'react'
import { Layout, Row, Col, Icon } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '@/style/view-style/index.scss'

const grid = 8

// 水平样式
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
})
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  // display: 'flex',
  // flexDirection: 'column',
  padding: grid,
  // overflow: 'auto',
  width: 250
})

class Cms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 'item-0', content: 'hello' },
        { id: 'item-1', content: 'I' },
        { id: 'item-2', content: 'am' },
        { id: 'item-3', content: '卡' },
        { id: 'item-4', content: '特' },
        { id: 'item-5', content: '洛' }
      ]
    }
  }
  // a little function to help us with reordering the result
  reOrder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = this.reOrder(this.state.items, result.source.index, result.destination.index)

    this.setState({
      items
    })
  }

  render() {
    return (
      <Layout className='index animated fadeIn'>
        <Row gutter={24} className='index-header'>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId='droppable' direction='vertical'>
              {/* <Droppable droppableId="droppable" direction="horizontal"> */}
              {/* <Droppable droppableId="droppable" direction="vertical"> */}
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Row>
        <Row gutter={24} className='index-header'>
          <Col span={6}>
            <div className='base-style wechat'>
              <Icon type='wechat' className='icon-style' />
              <div>
                <span>999</span>
                <div>微信</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='base-style qq'>
              <Icon type='qq' className='icon-style' />
              <div>
                <span>366</span>
                <div>QQ</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='base-style dingding'>
              <Icon type='dingding' className='icon-style' />
              <div>
                <span>666</span>
                <div>钉钉</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='base-style weibo'>
              <Icon type='weibo' className='icon-style' />
              <div>
                <span>689</span>
                <div>微博</div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Cms
