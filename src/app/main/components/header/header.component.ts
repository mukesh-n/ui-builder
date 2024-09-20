import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { StorageService } from 'src/app/core/service/storage.service';
import { colours } from 'src/app/core/util/colours';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  colours = colours;

  UserRoles = UserRoles;
  constructor(
    public _authService: AuthService,
    public storageService: StorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  logout() {
    this._authService.logout();
  }
}
