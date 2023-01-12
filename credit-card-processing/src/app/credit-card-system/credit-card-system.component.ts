import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-credit-card-system',
  templateUrl: './credit-card-system.component.html',
  styleUrls: ['./credit-card-system.component.css']
})
export class CreditCardSystemComponent implements OnInit {
  formdata: any;
  CREDIT_CARD_DATA: Array<any>= [];
  card_data:any =[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name: new FormControl(""),
      cardNumber: new FormControl(""),
      limit: new FormControl("")
   });
  }

  onClickSubmit(data:any){
    let collectedData = {
      userName:  data.name,
      cardNumber: data.cardNumber,
      cardLimit: data.limit,
      balance:0
    };

    this.CREDIT_CARD_DATA.push(collectedData);

    this.cardService.createCardDetails(collectedData).subscribe((data: {}) => {
      this.cardService.getCardDetails().subscribe((data: {}) => {
        this.card_data = data;
        console.log("this.card_data" + JSON.stringify(this.card_data));
      });
    });

  }

   

}
