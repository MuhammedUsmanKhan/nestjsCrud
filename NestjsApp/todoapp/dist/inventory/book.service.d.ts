import { Inventory } from './data/inventory.dto';
export declare class InventoryService {
    inventoryArray: Inventory[];
    addInventoryProductService(inventoryObject: Inventory): string;
    updateInventoryProductService(inventoryObject: Inventory): string;
    deleteInventoryProductService(inventoryObjectId: string): string;
    findAllInventoryProductService(): Inventory[];
}
