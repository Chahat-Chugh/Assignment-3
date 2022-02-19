import {User} from "./User.js";

export interface CRUD
{
    create() : void;
    read() : void;
    update(this:HTMLElement) : void;
    delete() : void;

}