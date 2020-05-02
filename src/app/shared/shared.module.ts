import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import { MatCommonModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
             MatCommonModule,
             MatAutocompleteModule,
             MatTableModule,
             MatTableModule,
             MatTooltipModule,
             MatCheckboxModule,
             MatToolbarModule,
             MatRadioModule],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCommonModule,
        MatAutocompleteModule,
        MatTableModule,
        MatTableModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatRadioModule]
})
export class SharedModule {}