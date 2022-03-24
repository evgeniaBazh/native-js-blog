import { navigate } from './navigate';
import { cards } from './cards';

// Отрисовка шапки
export function Header(arr) {
    console.log(cards);
    const header = document.createElement('header');
    const nav = document.createElement('div');
    const img = document.createElement('img');

    header.classList.add('head');
    nav.classList.add('head__nav');
    img.classList.add('head__logo');

    header.append(img);
    img.src = './img/logo.svg';

    for (let i = 0; i < arr.length; i++) {
        const link = document.createElement('a');
        link.classList.add('head__link');
        link.textContent = arr[i];
        nav.append(link);

        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.textContent === 'Посты') {
                navigate('cards', cards)
            } else if (link.textContent === 'Создать') {
                navigate('addCard', cards)
            }
        });
    }


    header.append(nav);

    return header;
}