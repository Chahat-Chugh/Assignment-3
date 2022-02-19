import { UserCRUD } from "./UserCRUD.js";
class MainPage {
    constructor() {
        this.loadBtn = document.querySelector(".btn");
        this.userCRUD = new UserCRUD();
        this.loadBtn.addEventListener('click', () => this.load());
    }
    load() {
        if (this.loadBtn.innerHTML == "Load Data") {
            this.userCRUD.create();
            this.loadBtn.innerHTML = "Refresh";
        }
        else {
            this.userCRUD.refresh();
        }
    }
}
new MainPage();
