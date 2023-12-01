import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthComponent } from '@modules/auth/auth.component'
import { ClientsComponent } from '@modules/clients/clients.component'
import { LoginComponent } from '@modules/login/login.component'
import { ProductsComponent } from '@modules/products/products.component'
import { SalesComponent } from '@modules/sales/sales.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, AuthComponent, ClientsComponent, ProductsComponent, SalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'arb-admin-pracc'
}
