import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent } from '../../layout/footer/footer.component'
import { HeaderComponent } from '../../layout/header/header.component'
import { SidebarComponent } from '../../layout/sidebar/sidebar.component'

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
