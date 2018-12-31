import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule,
        MatButtonModule, MatCheckboxModule, MatSelectModule, MatTableModule,
        MatPaginatorModule, MatMenuModule, MatBottomSheetModule, MatExpansionModule, 
        MatGridListModule, MatDialogModule, MatSidenavModule, MatToolbarModule, MatListModule  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatExpansionModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule 
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatExpansionModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule 
  ],
  declarations: []
})
export class MaterialModule { }
