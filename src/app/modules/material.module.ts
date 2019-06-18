import { NgModule } from '@angular/core';

import {
    MatListModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    exports: [
        MatListModule,
        MatIconModule
    ]
})

export class MaterialModule { }