import { main } from './main-layout';
import { routes } from './routes';

/**
 * Перейти к странице
 * @param {string} pageName Название страницы
 */
 export function navigate(pageName, params) {
    let newHref = `?page=${pageName}`;
    if (params.id !== undefined) {
        newHref += `&id=${params.id}`;
    }
    window.history.pushState({ path: newHref }, '', newHref);
    main.innerHTML = '';
    main.append(routes[pageName](params));
}
