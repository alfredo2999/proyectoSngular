import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private operationsSvc=inject(OperationsService)
  number = new FormControl <number|null> (null);
  calculate () { 
    if (!this.number.value || this.number.value <= 0)return;
    this.operationsSvc.number.set(this.number.value)
    console.log(this.number.value)
   }

}
