import { Component, inject } from '@angular/core';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
public operationsSvc=inject(OperationsService)

}
