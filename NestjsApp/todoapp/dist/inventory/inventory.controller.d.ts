import { InventoryService } from './inventory.service';
import { Inventory } from './data/inventory.dto';
export declare class InventoryController {
    private inventoryService;
    constructor(inventoryService: InventoryService);
    getAllProducts(): Inventory[];
    addProduct(inventoryItem: Inventory): string;
    updateProduct(inventoryItem: Inventory): string;
    deleteProduct(bookId: string): string;
}
