import { Repository } from 'typeorm';
import { userentities } from './user.entities';
import { createuserdto } from 'src/dto/user.dto';
export declare class UserService {
    private readonly userrepository;
    constructor(userrepository: Repository<userentities>);
    create(dto: createuserdto): Promise<userentities>;
    findmany(): Promise<userentities[]>;
    update(id: number, dto: createuserdto): Promise<userentities>;
    delete(id: number): Promise<userentities>;
}
