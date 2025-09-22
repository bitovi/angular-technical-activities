/*
 * This file does not need any updates.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'select-activity', pathMatch: 'full' },
  {
    path: 'select-activity',
    loadComponent: () =>
      import('./_/select-activity/select-activity.component').then(
        (m) => m.SelectActivityComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./activities/select-activity/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./activities/select-activity/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'button-activity',
    loadComponent: () =>
      import('./_/button-activity/button-activity.component').then(
        (m) => m.ButtonActivityComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./activities/button-activity/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./activities/button-activity/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'checkbox-activity',
    loadComponent: () =>
      import('./_/checkbox-activity/checkbox-activity.component').then(
        (m) => m.CheckboxActivityComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./activities/checkbox-activity/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./activities/checkbox-activity/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'modal-activity',
    loadComponent: () =>
      import('./_/modal-activity/modal-activity.component').then(
        (m) => m.ModalActivityComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./activities/modal-activity/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./activities/modal-activity/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
];
