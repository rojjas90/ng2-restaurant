import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {SaucersComponent} from './saucers/saucers.component';
import {CommentsComponent} from './comments/comments.component';

const APP_ROUTES: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'restaurants/:id/saucers', component: SaucersComponent },
  { path: 'restaurants/:restaurantId/saucers/:saucerId/comments', component: CommentsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
