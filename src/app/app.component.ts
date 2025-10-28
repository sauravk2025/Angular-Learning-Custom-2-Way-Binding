import { Component } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RectComponent, FormsModule,JsonPipe],
})
export class AppComponent {
  rectSize = {
    width: '100',
    height: '100',
  };

  
}
