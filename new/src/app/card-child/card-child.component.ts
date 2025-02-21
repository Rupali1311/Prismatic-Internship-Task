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
  @Input() clickCount!:number;

  @Output() cardClicked = new EventEmitter<void>;

  onCardClick(){
    this.cardClicked.emit();
  }

}
