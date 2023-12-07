import { sidebarRoutes } from "../interfaces/sidebar-item.interface";
import { RoutesEnum } from "./routes";


export const routes: sidebarRoutes[] = [
    { label: "Clients", href: RoutesEnum.Clients },
    { label: "Products", href: RoutesEnum.Products },
    { label: "Sales", href: RoutesEnum.Sales }
]