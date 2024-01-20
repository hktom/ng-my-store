import { Component } from '@angular/core';
import { IMenu, MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menus: IMenu[] = [];
  constructor(private menu: MenuService) {
    this.menus = menu.menus;
  }
}
