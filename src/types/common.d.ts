interface MenuItem {
  key: string;
  title: string;
  icon?: string;
  auth?: number[];
  subs?: MenuItem[];
}

interface RouteSchema {
  path: string;
  exact?: boolean;
  name: string;
  auth?: number[];
  component: ComponentType;
}

/** 自定义axios config结构 */
interface CustomAxiosConfig {
  token?: boolean;
  loading?: boolean;
  mock?: boolean;
  errorBizAction?: 'message' | 'alert' | ''
}