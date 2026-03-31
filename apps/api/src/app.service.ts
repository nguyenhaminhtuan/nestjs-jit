import { Injectable } from "@nestjs/common";
import { add } from "@workspace/shared"

@Injectable()
export class AppService {
    hello() {
        return add(1, 1)
    }
}