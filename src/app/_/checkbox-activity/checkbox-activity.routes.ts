/*
 * This file does not need any updates.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ui',
    loadComponent: () =>
      import('../../activities/checkbox-activity/ui/ui.component').then(
        (m) => m.UiComponent,
      ),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('../../activities/checkbox-activity/demo/demo.component').then(
        (m) => m.DemoComponent,
      ),
  },
];
