import { CommonModule, NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgClass,
    SidebarItemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isSidebarOpen = false

  toggleSidebar() {
    console.log(this.isSidebarOpen)
    this.isSidebarOpen = !this.isSidebarOpen
  }
}
