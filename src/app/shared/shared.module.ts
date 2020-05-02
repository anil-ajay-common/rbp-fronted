import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import { MatCommonModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [MatButtonModule,MatCommonModule, MatAutocompleteModule, MatTableModule],
    exports: [MatButtonModule,MatCommonModule, MatAutocompleteModule, MatTableModule]
})
export class SharedModule {}