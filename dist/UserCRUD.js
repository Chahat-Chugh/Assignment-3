import { User } from "./User.js";
import data from "./data.json" assert { type: "json" };
import { Role } from "./Role.js";
export class UserCRUD {
    constructor() {
        this.users = [];
        this.col = [];
        this.tableContainer = document.querySelector('.table');
        this.initializeCol();
    }
    initializeCol() {
        for (let key in data[0]) {
            this.col.push(key);
        }
    }
    addData() {
        data.forEach(ob => {
            this.users.push(new User(ob["First Name"], ob["Middle Name"], ob["Last Name"], ob.Email, ob.Phone, Role.subscriber, ob.Address));
        });
    }
    create() {
        this.addData();
        this.createTable();
    }
    createTable() {
        let tableEle = document.createElement("table");
        let tr = tableEle.insertRow(-1);
        for (let i = 0; i < this.col.length; i++) {
            let th = tr.insertCell(i);
            th.innerHTML = this.col[i];
        }
        for (let i = 0; i < this.users.length; i++) {
            tr = document.createElement("tr");
            let editBtn = document.createElement("button");
            editBtn.innerHTML = "Edit";
            editBtn.addEventListener('click', this.update);
            editBtn.classList.add("edit");
            let deleteBtn = document.createElement("button");
            deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.addEventListener('click', this.delete);
            deleteBtn.classList.add("dlt");
            //   deleteBtn.addEventListener('click',() => this.delete(i));
            tr.innerHTML = `<td>${this.users[i].firstName}</td>
                            <td>${this.users[i].middleName}</td>
                            <td>${this.users[i].lastName}</td>
                            <td>${this.users[i].email}</td>
                            <td>${this.users[i].phone_no}</td>
                            <td>${this.users[i].role}</td>
                            <td>${this.users[i].address}</td>
                            `;
            tr.append(editBtn);
            tr.append(deleteBtn);
            tableEle.append(tr);
        }
        this.tableContainer.innerHTML = "";
        this.tableContainer.append(tableEle);
    }
    read() {
    }
    update() {
        let row = this.parentElement;
        let nextSibling = this.nextElementSibling;
        if (this.innerHTML === "Edit") {
            row.contentEditable = 'true';
            this.contentEditable = 'false';
            this.innerHTML = "Save";
            nextSibling.innerHTML = "Cancel";
        }
        else {
            row.contentEditable = "false";
            this.innerHTML = "Edit";
            nextSibling.innerHTML = "Delete";
        }
    }
    delete() {
        let row = this.parentElement;
        if (this.innerHTML === "Delete") {
            row.remove();
        }
        else {
            let prevSibling = this.previousElementSibling;
            this.innerHTML = "Delete";
            row.contentEditable = "false";
            prevSibling.innerHTML = "Edit";
            let usercrud = new UserCRUD();
            usercrud.create();
        }
    }
    refresh() {
        this.users = [];
        this.create();
    }
}
