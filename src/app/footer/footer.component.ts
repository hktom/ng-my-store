import { Component } from '@angular/core';
import { IMenu, MenuService } from '../menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menus: IMenu[] = [];

  constructor(private menu: MenuService) {
    this.menus = menu.menus;
  }
}
