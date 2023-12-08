export enum RoutesEnum {
  Home = '',
  Clients = 'clients',
  Products = 'products',
  Sales = 'sales',
}

type SidebarItem = {
  label: string;
  href: string;
  name: string;
  icon?: string;
};

export const sidebarRoutes: SidebarItem[] = [
  { label: 'routeHome', href: RoutesEnum.Home, name: 'Inicio', icon: 'I' },
  {
    label: 'routeClients',
    href: RoutesEnum.Clients,
    name: 'Clientes',
    icon: 'C',
  },
  {
    label: 'routeProducts',
    href: RoutesEnum.Products,
    name: 'Productos',
    icon: 'P',
  },
  { label: 'routeSales', href: RoutesEnum.Sales, name: 'Ventas', icon: 'V' },
];
