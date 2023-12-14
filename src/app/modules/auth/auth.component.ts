import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { PaginatedComponent } from '@components/paginated/paginated.component'
import { FooterComponent } from '../../layout/footer/footer.component'
import { HeaderComponent } from '../../layout/header/header.component'
import { SidebarComponent } from '../../layout/sidebar/sidebar.component'

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    PaginatedComponent
  ]
})
export class AuthComponent {

}
