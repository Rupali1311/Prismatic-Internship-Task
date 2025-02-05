import { Component,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-card-child',
  templateUrl: './card-child.component.html',
  styleUrls: ['./card-child.component.scss']
})
export class CardChildComponent {
  @Input() label!: string;
  @Input() value!: string;
  @Input() color!: string;

  // @Output() cardClicked: EventEmitter<string> = new EventEmitter<string>();

  // onButtonClick() {
  //   this.cardClicked.emit(this.label); // Emit the card label when the button is clicked
  // }
}
