import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		history:[],
	},
	mutations: {
		INSETHISTORY(state,value){
	        state.history.push(value)
		},
	},
	actions:{
		insetHistory({commit},value){
			commit("INSETHISTORY",value)
		},
	}
})

export default store