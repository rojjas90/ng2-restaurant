import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from "./restaurant/restaurant.component";

const APP_ROUTES: Routes = [
    {
        path: '',
           component: RestaurantComponent
         }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
