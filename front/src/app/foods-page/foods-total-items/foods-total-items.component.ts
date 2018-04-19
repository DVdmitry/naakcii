import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {FoodList} from '../../shared/foodList/foods.foodList.model';

@Component({
  selector: 'app-foods-total-items',
  templateUrl: './foods-total-items.component.html',
  styleUrls: ['./foods-total-items.component.css']
})
export class FoodsTotalItemsComponent implements OnInit {
  foodTotalList: FoodList[] = [];
  private curFoodCard: FoodList;

  constructor(@Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
  }

  ngOnInit() {
    this.foodTotalList = [];

    this.stateEvents.subscribe((update) => {
      if (update.mode === MODES.SELECT_FOOD_CARD) {
        console.log('receive TotalItems: ' + update.foodCard.id);
        this.putToTotalList(update.foodCard);
      }
    });
  }

  putToTotalList(newFoodCard: FoodList) {
    console.log('put newFoodCard.id:' + newFoodCard.id);
    if (!this.isAvailable(newFoodCard)) {
      this.putNewFoodCard(newFoodCard);
      return;
    }
  }

  isAvailable(newFoodCard: FoodList): boolean {
    for (let i = 0; i < this.foodTotalList.length; i++) {
      console.log('foodTotalList.id: ' + this.foodTotalList[i].id);
      console.log('newFoodCard.id: ' + newFoodCard.id);
      if (this.foodTotalList[i].id === newFoodCard.id) {
        this.foodTotalList[i].selectAmount += newFoodCard.selectAmount;
        return true;
      }
    }
    return false;
  }

  putNewFoodCard(newFoodCard: FoodList) {
    console.log('putNew.id: ' + newFoodCard.id);
    this.curFoodCard = new FoodList;
    this.curFoodCard.id = newFoodCard.id;
    this.curFoodCard.name = newFoodCard.name;
    this.curFoodCard.allPrice = newFoodCard.allPrice;
    this.curFoodCard.discount = newFoodCard.discount;
    this.curFoodCard.totalPrice = newFoodCard.totalPrice;
    this.curFoodCard.boxWeight = newFoodCard.boxWeight;
    this.curFoodCard.idStrore = newFoodCard.idStrore;
    this.curFoodCard.img = newFoodCard.img;
    this.curFoodCard.selectAmount = newFoodCard.selectAmount;
    this.foodTotalList.push(this.curFoodCard);
  }

  deleteFoodCard(curFood: FoodList) {
    for (let i = 0; i < this.foodTotalList.length; i++) {
      if (this.foodTotalList[i].id === curFood.id) {
        this.foodTotalList.splice(i, 1);
      }
    }
  }

  subItem(curFood: FoodList) {
    if (curFood.selectAmount > 1) {
      curFood.selectAmount = curFood.selectAmount - 1;
    }
  }

  addItem(curFood: FoodList) {
    curFood.selectAmount = curFood.selectAmount + 1;
  }
}
