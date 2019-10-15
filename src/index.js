import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
    render: h => h(App),
    store
}).$mount("#calculator")

// service worker register
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then(reg => {
            console.log('SW registered: ', reg.scope);
        }).catch(error => {
            console.error('SW registration failed: ', error);
        })
    })
}