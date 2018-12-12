import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, StoreOptions } from 'vuex';

Vue.use(Vuex);

interface CounterState {
  counter: number;
}

const state: CounterState = {
  counter: 1,
};

const getters: GetterTree<CounterState, CounterState> = {
  current(st: CounterState): number {
    return st.counter;
  },
};

const mutations: MutationTree<CounterState> = {
  increment(st: CounterState): void {
    st.counter += 1;
  },
};

const store: StoreOptions<CounterState> = {
  state,
  getters,
  mutations,
};

export default new Vuex.Store<CounterState>(store);
