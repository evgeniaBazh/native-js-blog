import { navigate } from './navigate';

// Отрисовка карточки в памяти
export function Card(props) {
    const card = document.createElement('div');
    const media = document.createElement('img');
    const content = document.createElement('div');
    const headLine = document.createElement('h2');
    const text = document.createElement('p');

    card.addEventListener('click', () => {
        navigate('post', props)
    })

    card.className = 'posts__card';
    media.className = 'posts__media';
    content.className = 'posts__content';
    headLine.className = 'posts__headLine';
    text.className = 'posts__text'

    media.src = props.img;
    headLine.textContent = props.header;
    text.textContent = props.text;

    card.appendChild(media);
    card.appendChild(content);
    content.appendChild(headLine);
    content.appendChild(text);

    return card;
}