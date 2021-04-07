import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import { DingdingOutlined, QqOutlined, WechatOutlined, WeiboCircleOutlined } from '@ant-design/icons'
import screenfull from 'screenfull'
import '@/style/view-style/index.scss'

import PieEcharts from './pie.jsx'
import LineEcharts from './line.jsx'
import ScatterEcharts from './scatter.jsx'
import PictorialBarEcharts from './pictorialBar.jsx'

class Main extends Component {
  fullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.request(document.getElementById('bar') || undefined)
    }
  }
  render() {
    return (
      <Layout className="index animated fadeIn">
        <Row gutter={24} className="index-header">
          <Col span={6}>
            <div className="base-style wechat">
              <WechatOutlined />
              {/* <Icon type="wechat" className="icon-style" /> */}
              <div>
                <span>999</span>
                <div>微信</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style qq">
              <QqOutlined />
              {/* <Icon type="qq" className="icon-style" /> */}
              <div>
                <span>366</span>
                <div>QQ</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style dingding">
              <DingdingOutlined />
              {/* <Icon type="dingding" className="icon-style" /> */}
              <div>
                <span>666</span>
                <div>钉钉</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style weibo">
              <WeiboCircleOutlined />
              {/* <Icon type="weibo" className="icon-style" /> */}
              <div>
                <span>689</span>
                <div>微博</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="base-style">
              <LineEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <PieEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <ScatterEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <PictorialBarEcharts />
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Main
