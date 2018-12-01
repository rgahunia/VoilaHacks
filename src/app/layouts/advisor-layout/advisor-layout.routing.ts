import { Routes } from '@angular/router';

import { AdvisorHomeComponent } from '../../advisor/home/advhome.component' // '../../home/home.component';
import { AdvisorUserComponent } from '../../advisor/user/advuser.component' // '../../user/advuser.component';
 import { AdvisorTablesComponent } from '../../advisor/tables/advtables.component' // '../../tables/tables.component';
 import { AdvisorTypographyComponent } from '../../advisor/typography/advtypography.component' //'../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdvisorLayoutRoutes: Routes = [
    { path: 'advisor',      component: AdvisorHomeComponent },
    { path: 'advuser',           component: AdvisorUserComponent },
    { path: 'advtable',          component: AdvisorTablesComponent },
    { path: 'advtypography',     component: AdvisorTypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
