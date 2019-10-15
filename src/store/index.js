import Vue from 'vue'
import Vuex from 'vuex'
import calculation from 'modules/calculation'
import buttons from 'modules/buttons'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false

export default new Vuex.Store({
    strict: debug,
    modules: {
        calculation,
        buttons
    }
})