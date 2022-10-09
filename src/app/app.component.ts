import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'John Doe'

  userData = {
    email: "john.doe@email.com",
    role: "admin"
  }

  title = 'angula-first-project';
}
