import { Component } from '@angular/core';
import { SubscribeComponent } from '../subscribe/subscribe.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubscribeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
