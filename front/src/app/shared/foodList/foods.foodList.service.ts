import {Injectable} from '@angular/core';
import {RestDataService} from '../services/rest-data.service';

@Injectable()
export class FoodsFoodListService {

  constructor(private restDataService: RestDataService) {
  }

  getFoodList(selectedSubCatListID, first, last) {
    let listID = '';
    selectedSubCatListID.map(id => {
      listID += String(id.id) + ',';
    });
    const dataGet = {SubcategoryList: listID, first: first, last: last};
    return this.restDataService.getProducts(dataGet)
      .map(productList => {
        return productList.map(product => {
          product['picture'] = product['picture'].replace('%', '%25');
          // {...product, picture: product['picture'], boxWeight: '', selectAmount: ''};
          return {
            id: product['id'],
            name: product['name'],
            allPrice: product['price'],
            discount: product['discount'],
            totalPrice: product['discountPrice'],
            boxWeight: '',
            idStrore: product['chainId'],
            img: product['picture'],
            selected: false,
            selectAmount: 1
          };
        });
      });
}}


