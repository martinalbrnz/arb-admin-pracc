import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarService } from '@services/sidebar/sidebar-service.service'
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen: boolean = this.sidebarService.isSidebarOpen
  constructor(private sidebarService: SidebarService) {}

  open() {
    this.sidebarService.setIsSidebarOpen(this.sidebarService.isSidebarOpen)
    this.isOpen = this.sidebarService.isSidebarOpen
  }
}
