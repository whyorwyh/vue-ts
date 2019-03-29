import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import TodoApp from './components/TodoApp.vue';

Vue.use(Router);
const viewNames = ['completed', 'active', '*'];
const routes = viewNames.map((view): RouteConfig => ({
    path: '/' + view,
    component: TodoApp,
    props: {
        currentView: view === '*' ? 'all' : view,
    },
}));

export default new Router({
  routes
});
