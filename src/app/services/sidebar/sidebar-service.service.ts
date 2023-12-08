import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  #isSidebarOpen = signal(false);
  get isSidebarOpen() {
    return this.#isSidebarOpen();
  }

  setIsSidebarOpen(value: boolean) {
    this.#isSidebarOpen.update(() => !value);
  }
}
