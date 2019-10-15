const state = {
    operationButton: [{
        operation: '+',
        symbol: '&#43;',
        text: 'add'
    }, {
        operation: '-',
        symbol: '&#8722;',
        text: 'subtract'
    }, {
        operation: '*',
        symbol: '&#215;',
        text: 'multiple'
    }, {
        operation: '/',
        symbol: '&#247;',
        text: 'divide'
    }, {
        operation: '=',
        symbol: '&#61;',
        text: 'equal'
    }, {
        operation: '+-',
        symbol: '&#43;/&#8722;',
        text: 'absolute'
    }, {
        operation: 'clear',
        symbol: 'C',
        text: 'clear'
    }, {
        operation: '.',
        symbol: '.',
        text: 'decimal'
    }]
}

export default {
    namespaced: true,
    state
}