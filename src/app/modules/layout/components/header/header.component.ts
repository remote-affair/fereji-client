import { Component, OnInit } from '@angular/core';
import { User } from '@fereji/models/user';
import { TokenStorageService } from '@fereji/services/token-storage/token-storage.service';

@Component({
  selector: 'frj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: User;

  constructor(private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
  }

  get isLoggedIn() {
    return Boolean(this.tokenService.getToken());
  }

  get userName() {
    return `${this.user.first_name} ${this.user.last_name}`;
  }

  logout() {
    this.tokenService.signOut();
  }
}
