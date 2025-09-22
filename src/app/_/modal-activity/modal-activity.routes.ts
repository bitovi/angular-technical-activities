/*
 * This file does not need any updates.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ui',
    loadComponent: () =>
      import('../../activities/modal-activity/ui/ui.component').then(
        (m) => m.UiComponent,
      ),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('../../activities/modal-activity/demo/demo.component').then(
        (m) => m.DemoComponent,
      ),
  },
];
