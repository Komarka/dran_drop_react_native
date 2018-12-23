import { wrapper } from "./Helpers";

const URL = "https://reqres.in/api/users";

export default class UsersApi {
  static getUsers() {
    return wrapper(fetch(`${URL}?page=2`).then(data => data.json()));
  }
}
