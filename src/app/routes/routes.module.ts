import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '@ACPEnviroments/environment';
import { routes } from '@ACPRoutes/app.routes';

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            enableTracing: environment.routes.enableTracing,//good for debug
            useHash: environment.routes.useHash,
        }
    )],
    exports: [RouterModule]
})

export class AppRoutesModule { }