import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTodos: [
      { text: 'Just a thing to see.', isDone: false},
    ],
    week: [
      {dayNum: 0, dayTodos: []},
      { dayNum: 1, dayTodos: [{text: 'aaaaa', isDone: false}]},
      {dayNum: 2, dayTodos: []},
      {dayNum: 3, dayTodos: []},
    ],
  },
  getters: {
    //allTodosの内チェックされたものだけの配列
    doneTodos: state => state.week[0].dayTodos.filter(function (todo) {
      return todo.isDone;
    }),
    dayTodos: state => state.week[0].dayTodos
  },
  mutations: {
    setDayTodos(state, dayTodos) {
      this.dayTodos = dayTodos;
    }
  }
  
})