import { Injectable } from '@nestjs/common';
import { Inventory } from './data/inventory.dto';


@Injectable()
export class InventoryService {
  // initialized it with an array
  public inventoryArray: Inventory[] = [];

  //add
  //here we define type of
  // object that
  //we are going to recieve   //here we define
  //function return
  addInventoryProductService(inventoryObject: Inventory): string {
    this.inventoryArray.push(inventoryObject);
    return 'Item has been succesfully inserted to the Inventory';
  }

  //update

  updateInventoryProductService(inventoryObject: Inventory): string {
    let index = this.inventoryArray.findIndex((inventoryItem) => {
      return inventoryItem.id === inventoryObject.id;
    });
    this.inventoryArray[index] = inventoryObject;
    return 'Prdouct details has been updated';
  }

  //delete
  deleteInventoryProductService(inventoryObjectId: string): string {
    this.inventoryArray = this.inventoryArray.filter((inventoryItem)=>{
       return inventoryItem.id !== inventoryObjectId
    })
    return 'Product has been succesfully deleted from the Inventory'
  }

  //find all product
findAllInventoryProductService(): Inventory[] {
  return  this.inventoryArray
}

}
