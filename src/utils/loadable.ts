import React, { Component, ComponentType } from 'react'
import Loadable, { LoadingComponentProps } from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class loadingComponent extends Component {
  constructor(props: any) {
    super(props)
    NProgress.start()
  }
  componentDidMount() {
    NProgress.done()
  }
  // render() {
  //   return <div></div>
  // }
  render () {
    return ''
  }
}

export default (loader: any, loading = loadingComponent as ComponentType<LoadingComponentProps>) => {
  return Loadable({
    loader,
    loading
  })
}
