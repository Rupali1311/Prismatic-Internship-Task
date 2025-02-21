import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent {
  @Input() data: any[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  editEntry(index: number) {
    this.edit.emit(index);
  }

  deleteEntry(index: number) {
    this.delete.emit(index);
  }
}
