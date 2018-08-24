Nova.booting((Vue, router) => {
    Vue.component('index-youtube', require('./components/IndexField'));
    Vue.component('detail-youtube', require('./components/DetailField'));
    Vue.component('form-youtube', require('./components/FormField'));
})
