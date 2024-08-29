import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './data/inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get('/findAll')
  getAllProducts(): Inventory[] {
    return this.inventoryService.findAllInventoryProductService();
  }

  @Post('/post')
  addProduct(@Body() inventoryItem: Inventory): string {
    return this.inventoryService.addInventoryProductService(inventoryItem);
  }

  @Put('/update')
  updateProduct(@Body() inventoryItem: Inventory): string {
    return this.inventoryService.addInventoryProductService(inventoryItem);
  }

  @Delete('/delete/:id')
  deleteProduct(@Param('id') bookId: string): string {
    return this.inventoryService.deleteInventoryProductService(bookId);
  }
}
