const state = {
    log: '',
    currentNumber: 0,
    result: 0,
    operation: '',
    operated: false,
    finished: false
}

const getters = {
    log(state) {
        return state.log
    },
    result(state) {
        return state.result
    },
    currentNumber(state) {
        return state.currentNumber
    }
}

const actions = {
    inputNumber({ state, commit }, number) {
        if (state.finished) {
            commit('resetCalculator')
        }
        commit('setCurrentNumber', number)
    },
    operation({ state, commit }, operation) {
        if (operation === '=') {
            commit('setLog')
            commit('setOperation', operation)
            commit('setResult')
        } else if(operation === '+-') {
            commit('toggleSign')
        } else if(operation === 'clear') {
            commit('resetCalculator')
        } else if(operation === '.') {
            commit('setDecimals')
        } else {
            commit('setLog')
            commit('setOperation', operation)
            if (state.finished) {
                commit('resetLog')
            }
        }
    }
}

const mutations = {
    setCurrentNumber(state, number) {
        state.operated = false
        state.currentNumber = Number(state.currentNumber.toString() + number)
    },
    setLog(state) {
        if (!state.operated) {
            state.log = state.log + ` ${state.operation} ${state.currentNumber}`
            state.currentNumber = 0
        }
    },
    setOperation(state, operation) {
        state.operation = operation
        state.operated = true
    },
    setResult(state) {
        let result = eval(state.log)
        state.result = result
        state.currentNumber = result
        state.finished = true
    },
    setDecimals(state) {
        let stringCurrentNumber = state.currentNumber.toString()
        if (stringCurrentNumber.indexOf('.') < 0) {
            state.currentNumber = stringCurrentNumber += '.'
        }
    },
    resetCalculator(state) {
        state.log = ''
        state.currentNumber = 0
        state.operation = ''
        state.finished = false
    },
    resetLog(state) {
        state.log = state.currentNumber
        state.currentNumber = 0
        state.finished = false
    },
    toggleSign(state) {
        let minusSign = state.currentNumber > 0 ? '-' : '' 
        state.currentNumber = minusSign +  Math.abs(state.currentNumber)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

