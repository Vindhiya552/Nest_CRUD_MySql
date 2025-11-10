import { UserService } from "./user.service";
import { createuserdto } from "src/dto/user.dto";
export declare class UserController {
    private readonly appService;
    constructor(appService: UserService);
    Createuser(dto: createuserdto): Promise<import("./user.entities").userentities>;
    findall(): Promise<import("./user.entities").userentities[]>;
    Updateuser(id: number, dto: createuserdto): Promise<import("./user.entities").userentities>;
    deleteuser(id: number): Promise<import("./user.entities").userentities>;
}
