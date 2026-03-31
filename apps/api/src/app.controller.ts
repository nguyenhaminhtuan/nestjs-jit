import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller("/")
export class AppController {
    constructor(private readonly _appService: AppService) {
    }

    @Get()
    hello() {
        return this._appService.hello()
    }
}