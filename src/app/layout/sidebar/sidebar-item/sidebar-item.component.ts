import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '@services/sidebar/sidebar-service.service';
import { RouteItem } from 'src/app/interfaces/sidebar-item.interface';
import { routes } from '../../../constants/sidebar-routes';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  @Input() itemData!: RouteItem;

  public SidebarRoutes = routes;

  isOpen: boolean = this.sidebarService.isSidebarOpen;
  constructor(private sidebarService: SidebarService) {}

  // ngOnInit(): void {}
}
