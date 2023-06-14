import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AbServiceBase } from "./base/ab.service.base";

@Injectable()
export class AbService extends AbServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
