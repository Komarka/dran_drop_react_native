import { observable, action, computed, when } from "mobx";
import { UsersApi } from "@api";
class CounterStore {
  @observable counters = {
    first: 0,
    second: 0,
    third: 0
  };
  @computed get first() {
    return this.counters.first;
  }

  @computed get second() {
    return this.counters.second;
  }

  @computed get third() {
    return this.counters.third;
  }

  @action("increase counter") incr(counter) {
    this.counters[counter]++;
  }
}

export default new CounterStore();
