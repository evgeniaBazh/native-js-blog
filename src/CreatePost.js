import { navigate } from './navigate';
import { cards } from './cards';


export function CreatePost() {
    const wrap = document.createElement('div');
    const container = document.createElement('div');
    const post = document.createElement('div');
    const header = document.createElement('input');
    const photo = document.createElement('input');
    const article = document.createElement('textarea');
    const btn = document.createElement('button');
    const p = document.createElement('p');
    const publish = () => {
        const keys = ['img', 'header', 'text'];
        const values = [photo.value, header.value, article.value];
        const obj = {};

        for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i];
        }

        return cards.push(obj);
    }
    btn.addEventListener('click', () => {
        publish();
        navigate('cards', cards);
    })
    const titleLabel = document.createElement('p');
    const urlLabel = document.createElement('p');
    const textLabel = document.createElement('p');

    wrap.className ='wrap-create-post';
    container.className = 'container-create-post';
    post.className = 'create-post';
    header.className = 'create-post__header';
    photo.className = 'create-post__photo';
    article.className = 'create-post__article';
    btn.className = 'create-post__btn';
    titleLabel.className = 'create-post__titleLabel';
    urlLabel.className = 'create-post__urlLabel';
    textLabel.className = 'create-post__textLabel';
    p.className = "create-post__textMini";


    titleLabel.textContent = 'Заголовок';
    urlLabel.textContent = 'Главное фото';
    textLabel.textContent = 'Текст поста';
    btn.textContent = 'Опубликовать';
    p.textContent = 'Вставка изображений  [img src="url"]';

    wrap.appendChild(container);
    container.appendChild(post);
    post.appendChild(titleLabel);
    post.appendChild(header);
    post.appendChild(urlLabel);
    post.appendChild(photo);
    post.appendChild(textLabel);
    post.appendChild(p);
    post.appendChild(article);
    post.appendChild(btn);
    document.body.append(wrap);

    return wrap;
}