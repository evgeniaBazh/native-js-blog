import { navigate } from './navigate';
import { main } from './main-layout';
import { Header } from './Header';
import { cards } from './cards';
// Инициализация всего приложения
export function App() {
    const links = [
        'Посты',
        'Создать'
    ];


    // Добавляет блок для контента страниц, чтобы избежать перерисовки шапки
    document.body.append(Header(links));
    const newMain = document.createElement('main');
    document.body.append(newMain);
    main = newMain;

    navigate('cards', cards);
}