import { Card } from './Card';

// Отрисовка постов
export function PostCards(cards) {
    const posts = document.createElement('div');
    const container = document.createElement('div');

    posts.className = 'posts';
    container.className = 'container';

    posts.appendChild(container);

    cards.forEach((card) => {
        container.append(Card(card));
    })

    return posts;
}