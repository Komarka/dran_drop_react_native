import { observable, action, computed, when } from "mobx";
import { UsersApi } from "@api";
class TestStore {
  constructor() {
    when(
      // once...
      () => this.list.length > 2,
      // ... then
      () => this.fire()
    );
  }

  @observable list = ["test", "test"];
  @observable users = {};
  @computed get total() {
    return this.list.length;
  }

  @action("add item") addItem() {
    this.list.push("Test");
  }

  @action("delete item") deleteItem() {
    this.list.pop();
  }

  @action("get users") async getUsers() {
    const { error, data } = await UsersApi.getUsers();
    console.log("Users", data);
    console.log("ERROR", error);
  }

  @action("fire") fire() {
    console.log("I have fired");
  }
}

export default new TestStore();
