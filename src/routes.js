import {createRouter, createWebHashHistory} from 'vue-router';

const routerHistory = createWebHashHistory();

import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';


const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            // Путь (url)
            path: '/',
            // Имя компонента (для последующего обращения к ним)
            name: 'home',
            // Компонент который хотим отобразить
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            // Обработка 404 ошибки (ловим все пути которые не совпадают с выше указанными)
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFoundPage
        },

    ]
});

export default routers
