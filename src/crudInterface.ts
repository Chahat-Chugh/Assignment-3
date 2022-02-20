import {User} from "./User.js";

export interface CRUD
{
    create() : void;
    read() : void;
    update(e:Event) : void;
    delete(e:Event) : void;

}