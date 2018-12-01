import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdvisorLayoutRoutes } from './advisor-layout.routing';

import { AdvisorHomeComponent } from  '../../advisor/home/advhome.component';
import { AdvisorUserComponent } from '../../advisor/user/advuser.component' // '../../user/user.component';
 import { AdvisorTablesComponent } from '../../advisor/tables/advtables.component' // '../../tables/tables.component';
 import { AdvisorTypographyComponent } from '../../advisor/typography/advtypography.component' // '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdvisorLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    AdvisorHomeComponent,
     AdvisorUserComponent,
     AdvisorTablesComponent,
     AdvisorTypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent
  ],
  exports: [AdvisorHomeComponent,AdvisorUserComponent,AdvisorTablesComponent,AdvisorTypographyComponent],
})

export class AdvisorLayoutModule {}
