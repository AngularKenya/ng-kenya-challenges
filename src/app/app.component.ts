import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-kenya-challenges';

  // In this component, display the first 20 characters in a sequential manner. 
  // Utilize efficient techniques such as the async pipe and various RxJS operators to handle and present the data effectively.

  // 💡 Bonus: Present the data within a table format.

}
