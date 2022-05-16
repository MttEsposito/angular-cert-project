import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import("../pages/home/home.module")).HomeModule,
    },
    {
        path: 'sentiment/:symbol',
        loadChildren: async () => (await import("../pages/detail/detail.module")).DetailModule,
    },
    { path: '**', redirectTo: '' }
];

export { routes };   