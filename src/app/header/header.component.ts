import { Component } from '@angular/core';
import { IMenu, MenuService } from '../menu.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menus: IMenu[] = [];
  constructor(private menu: MenuService, private authService: AuthService) {
    this.menus = this.getMenus(
      this.authService.isAuthenticated(),
      this.menu.menus
    );
    this.authService.authStatusUpdate.subscribe((status) => {
      this.menus = this.getMenus(status, this.menu.menus);
    });
  }

  getMenus(status: boolean, menus: IMenu[]): IMenu[] {
    if (!status) {
      return menus;
    } else {
      return menus.filter(
        (menu) => menu.name !== 'Login' && menu.name !== 'Register'
      );
    }
  }
}
