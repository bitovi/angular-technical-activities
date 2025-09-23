import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-ui-button-activity',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [ButtonComponent],
})
export class UiComponent {}
