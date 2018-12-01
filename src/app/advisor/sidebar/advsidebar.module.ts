import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvSidebarComponent } from './advsidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ AdvSidebarComponent ],
    exports: [ AdvSidebarComponent ]
})

export class AdvSidebarModule {}
