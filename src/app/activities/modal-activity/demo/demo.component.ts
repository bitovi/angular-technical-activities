import { Component } from '@angular/core';
import { InfoTooltipComponent } from '../components/info-tooltip/info-tooltip.component';
import { MainContentComponent } from '../components/main-content/main-content.component';

@Component({
  selector: 'app-demo-modal-activity',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [MainContentComponent, InfoTooltipComponent],
})
export class DemoComponent {}
