import { Routes } from '@angular/router'
import { AuthComponent } from '@modules/auth/auth.component'
import { ClientsComponent } from '@modules/clients/clients.component'
import { LoginComponent } from '@modules/login/login.component'
import { ProductsComponent } from '@modules/products/products.component'
import { SalesComponent } from '@modules/sales/sales.component'

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        children: [
            {
                path: "clients",
                component: ClientsComponent
            },
            {
                path: "products",
                component: ProductsComponent
            },
            {
                path: "sales",
                component: SalesComponent
            }
        ]
    },

    {
        path: "login", component: LoginComponent
    }

]
