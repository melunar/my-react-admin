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