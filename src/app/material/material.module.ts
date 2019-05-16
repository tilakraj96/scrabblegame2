import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogModule, MatFormFieldModule,
  MatInputModule,MatCardModule,MatButtonToggleModule,MatToolbarModule,MatSidenavModule} from '@angular/material';

const MaterialComponents=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,MatCardModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatDialogModule,MatSidenavModule
]
@NgModule({
  
  imports: [MaterialComponents,
            MatDialogModule,MatCardModule,MatButtonToggleModule],
  exports:[MaterialComponents,MatDialogModule]

})
export class MaterialModule { }
