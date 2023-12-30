import { Component } from '@angular/core';
import { Iproduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  public product: Iproduct;
  constructor(){
    this.product = {
      id:2,
      name:'friendly bot',
      description: "A friendly robot head with two eyes \
      and smile -- great for domenstic use",
      imageName:"head-friendly.png",
      category : "Heads",
      price: 945.0,
      discount : 0.2
    };
  }
  getImageUrl(product : Iproduct){
    return "/assets/images/robot-parts/" + product.imageName;
  }

}
