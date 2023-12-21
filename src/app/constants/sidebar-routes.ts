import { SidebarRoutes } from '../interfaces/sidebar-item.interface'
import { RoutesEnum } from './routes'

export const routes: SidebarRoutes[] = [
  { label: 'Home', href: RoutesEnum.Home, name: 'Inicio', icon: 'I' },
  { label: 'Clients', href: RoutesEnum.Clients, name: 'Clientes', icon: 'C' },
  {
    label: 'Products',
    href: RoutesEnum.Products,
    name: 'Productos',
    icon: 'P',
  },
  { label: 'Sales', href: RoutesEnum.Sales, name: 'Ventas', icon: 'V' },
]
