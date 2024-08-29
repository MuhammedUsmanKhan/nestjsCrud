import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { MedicalModule } from './medical/medical.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [InventoryModule,MedicalModule,OrderModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    // console.log('Root world');
  }
}
