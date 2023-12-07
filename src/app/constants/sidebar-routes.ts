import { sidebarRoutes } from "../interfaces/sidebar-item.interface";
import { RoutesEnum } from "./routes";


export const routes: sidebarRoutes[] = [
    { label: "Recurso 1", href: RoutesEnum.Recurso1 },
    { label: "Recurso 2", href: RoutesEnum.Recurso2 },
]