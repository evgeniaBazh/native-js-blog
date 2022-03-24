import { parser } from './parser';

// Отрисовка полного содержимого поста при нажатии на карточку
export function Post(props) {
    const post = document.createElement('div');
    const wrap = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const containerPost = document.createElement('div');
    const p = document.createElement('p');

    wrap.className = 'wrap';
    img.className = 'wrap__media';
    h1.className = 'wrap__header wrap__header--centered';
    containerPost.className = 'container-post';
    p.className = 'text';

    img.src = props.img;
    h1.textContent = props.header;
    p.innerHTML = parser(props.text);

    wrap.appendChild(img);
    wrap.appendChild(h1);
    post.appendChild(wrap);
    post.appendChild(containerPost)
    containerPost.appendChild(p);
   
    return post;
}