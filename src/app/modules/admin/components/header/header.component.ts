import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userName: string | null = null;
  
    constructor(private auth: AuthService) { }
  
    ngOnInit(): void {

      if (this.auth.isLoggedIn()) {
        const user = this.auth.getUser();
        if (user) {      
         this.userName = user.name;
        }
        
      }
    }

    logout(): void {
      this.auth.logout();
    }

}
