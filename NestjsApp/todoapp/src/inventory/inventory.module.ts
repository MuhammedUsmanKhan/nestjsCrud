import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
// import { ChatModule } from './chat.module';
// import { UsersModule } from './users.module';
// import { OrdersModule } from './orders.module';

@Module({
  imports: [],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {
  constructor() {
    // console.log('Root world');
  }
}
