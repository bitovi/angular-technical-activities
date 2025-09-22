/*
 * This file does not need any updates.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageSwitcherComponent } from '../components/page-switcher/page-switcher.component';

@Component({
  selector: 'app-button-activity',
  templateUrl: './button-activity.component.html',
  styleUrl: './button-activity.component.scss',
  standalone: true,
  imports: [RouterOutlet, PageSwitcherComponent],
})
export class ButtonActivityComponent {}
