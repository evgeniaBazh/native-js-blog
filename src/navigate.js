import { main } from './main-layout';
import { routes } from './routes';

/**
 * Перейти к странице
 * @param {string} pageName Название страницы
 */
 export function navigate(pageName, params) {
    main.innerHTML = '';
    main.append(routes[pageName](params));
}
