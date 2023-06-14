import { Module } from "@nestjs/common";
import { AbModuleBase } from "./base/ab.module.base";
import { AbService } from "./ab.service";
import { AbController } from "./ab.controller";
import { AbResolver } from "./ab.resolver";

@Module({
  imports: [AbModuleBase],
  controllers: [AbController],
  providers: [AbService, AbResolver],
  exports: [AbService],
})
export class AbModule {}
