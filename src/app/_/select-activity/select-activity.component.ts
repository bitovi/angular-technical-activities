/*
 * This file does not need any updates.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageSwitcherComponent } from '../components/page-switcher/page-switcher.component';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrl: './select-activity.component.scss',
  standalone: true,
  imports: [RouterOutlet, PageSwitcherComponent],
})
export class SelectActivityComponent {}
