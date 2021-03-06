//  https://ant.design/components/icon-cn/

// interface MenuItem {
//   key: string;
//   title: string;
//   icon?: string;
//   auth?: number[];
//   subs?: MenuItem[];
// }

const menu: MenuItem[] = [
  {
    key: '/index',
    title: '首页',
    icon: 'HomeOutlined',
    auth: [1]
  },
  {
    key: '/cms',
    title: 'CMS',
    icon: 'BorderOuterOutlined',
    auth: [1]
  },
  {
    title: '系统',
    key: '/system',
    icon: 'SettingOutlined',
    auth: [1],
    subs: [
      { title: '用户管理', key: '/system/user', icon: 'UserOutlined' },
      { title: 'Jenkins应用管理', key: '/system/application', icon: '', auth: [1], subs: [
        { title: '我的应用', key: '/system/application/mine', icon: '', auth: [1] },
        { title: '应用审核', key: '/system/application/all', icon: '', },
        { title: '权限分配记录', key: '/system/application/distribution', icon: '', },
      ] },
    ]
  },
  {
    title: '通用',
    key: '/public',
    icon: 'AppstoreOutlined',
    auth: [1],
    subs: [{ title: '按钮', key: '/public/button', icon: '' }, { title: '图标', key: '/public/icon', icon: '' }]
  },
  {
    title: '导航',
    key: '/nav',
    icon: 'BulbOutlined',
    subs: [
      { title: '下拉菜单', key: '/nav/dropdown', icon: '' },
      { title: '导航菜单', key: '/nav/menu', icon: '' },
      { title: '步骤条', key: '/nav/steps', icon: '' }
    ]
  },
  {
    title: '表单',
    key: '/form',
    icon: 'FormOutlined',
    subs: [
      { title: '基础表单', key: '/form/base-form', icon: '' },
      { title: '步骤表单', key: '/form/step-form', icon: '' }
    ]
  },
  {
    title: '展示',
    key: '/show',
    icon: 'PieChartOutlined',
    subs: [
      { title: '表格', key: '/show/table', icon: '' },
      { title: '折叠面板', key: '/show/collapse', icon: '' },
      { title: '树形控件', key: '/show/tree', icon: '' },
      { title: '标签页', key: '/show/tabs', icon: '' }
    ]
  },
  {
    title: '其它',
    key: '/others',
    icon: 'PaperClipOutlined',
    auth: [1],
    subs: [
      { title: '进度条', key: '/others/progress', icon: '' },
      { title: '动画', key: '/others/animation', icon: '' },
      { title: '上传', key: '/others/upload', icon: '' },
      { title: '富文本', key: '/others/editor', icon: '' },
      { title: '404', key: '/404', icon: '' },
      { title: '500', key: '/500', icon: '' }
    ]
  },
  {
    title: '多级导航',
    key: '/one',
    icon: 'BarsOutlined',
    subs: [
      {
        title: '二级',
        key: '/one/two',
        icon: '',
        subs: [{ title: '三级', key: '/one/two/three', icon: '' }]
      }
    ]
  },
  {
    title: '关于',
    key: '/about',
    icon: 'UserOutlined',
    auth: [1]
  }
]

export default menu
