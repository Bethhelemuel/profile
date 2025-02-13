import { Component } from '@angular/core';
import { CopyTextComponent } from "../copy-text/copy-text.component";

@Component({
  selector: 'app-navbar',
  imports: [CopyTextComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
