import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// Components
// Example: import { MyComponent } from './components/my.component';
// ... add other components

// Models
// Example: import { MyModel } from './models/my.model';
// ... add other models

const COMPONENTS = [
  // Example: MyComponent,
  // ... add other components here
];

const MODELS = [
  // Example: MyModel,
  // ... add other models here
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  exports: [
    ...COMPONENTS,
    ...MODELS
  ]
})
export class SharedModule { }