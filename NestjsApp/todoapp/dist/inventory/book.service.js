"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
let InventoryService = class InventoryService {
    constructor() {
        this.inventoryArray = [];
    }
    addInventoryProductService(inventoryObject) {
        this.inventoryArray.push(inventoryObject);
        return 'Item has been succesfully inserted to the Inventory';
    }
    updateInventoryProductService(inventoryObject) {
        let index = this.inventoryArray.findIndex((inventoryItem) => {
            return inventoryItem.id === inventoryObject.id;
        });
        this.inventoryArray[index] = inventoryObject;
        return 'Prdouct details has been updated';
    }
    deleteInventoryProductService(inventoryObjectId) {
        this.inventoryArray = this.inventoryArray.filter((inventoryItem) => {
            return inventoryItem.id !== inventoryObjectId;
        });
        return 'Product has been succesfully deleted from the Inventory';
    }
    findAllInventoryProductService() {
        return this.inventoryArray;
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)()
], InventoryService);
//# sourceMappingURL=book.service.js.map