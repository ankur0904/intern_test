import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AbService } from "./ab.service";
import { AbControllerBase } from "./base/ab.controller.base";

@swagger.ApiTags("abs")
@common.Controller("abs")
export class AbController extends AbControllerBase {
  constructor(
    protected readonly service: AbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
