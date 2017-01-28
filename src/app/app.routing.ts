import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {SaucersComponent} from './saucers/saucers.component';

const APP_ROUTES: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'restaurants/:id/saucers', component: SaucersComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
