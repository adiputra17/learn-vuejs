import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import ToDoList from '@/components/ToDoList'  

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/todo',
            name: 'ToDoList',
            component: ToDoList
        }
    ]
})
