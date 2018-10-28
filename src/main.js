// import $ from 'jquery'
// import './css/index.css'
// console.log('ok')


import Vue from 'vue'

//导入APP根组件
import app from './App.vue'



import './lib/mui/css/mui.min.css'

import {Header} from 'mint-ui'

Vue.component(Header.name,Header)




var vm = new Vue({
    el: '#app',

    render: c => c(app)

})

