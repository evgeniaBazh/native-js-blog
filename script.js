// Название компонентов пишется с заглавной буквы


let main = null;

const routes = {
    cards: Cards,
    post: Post,
}

/**
 * Перейти к странице
 * @param {string} pageName Название страницы
 */

// Переход на другую страницу
function navigate(pageName, params) {
    main.innerHTML = '';
    main.append(routes[pageName](params));
}

// Отрисовка шапки
function Header(arr) {
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
    }

    header.append(nav);
    return header;
}

// Отрисовка карточки
function Card(props) {
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

// Отрисовка постов
function Cards(cards) {
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

// Отрисовка полного содержимого поста при нажатии на карточку
function Post(props) {
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


// Инициализация всего приложения
function App() {
    const links = [
        'Посты',
        'Создать'
    ];

    // Данные постов
    const cards = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2FMountains-Blue.jpg?alt=media&token=d04f0279-79c6-4752-8b5a-cccd73720243',
            header: 'Blue Mountains',
            text: `
            Даже если учесть разреженный газ, заполняющий пространство между звездами,
            то все равно прямое восхождение ищет далекий афелий.[img src="https://photopoint.com.ua/wp-content/uploads/2015/01/Kak-snimat-peyzazh-2.jpg"] Конечно, нельзя не принять
            во внимание тот факт, что секстант иллюстрирует случайный маятник Фуко.
            [img src="http://storge.pic2.me/cm/2048x2048/661/584d22689a484.jpg"]
            Выравниванием по ширине называется такой способ форматирования текста,
            <script>alert('Vzlom')</script>
            когда левый и правый края текста выравниваются по вертикальным линиям (рис. 1).
            `,
        },
        {
            img: 'https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg',
            header: 'Sunflowers',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.',
        },
        {
            img: 'https://vkrym.su/Images/Get/638',
            header: 'Sea',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.',
        },
        {
            img: 'https://funart.pro/uploads/posts/2021-04/1618436301_53-funart_pro-p-oboi-fon-kosmos-zvezdi-54.jpg',
            header: 'Cosmos',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.',
        }
    ]

    console.log(parser(cards[0].text))


    // Добавляет блок для контента страниц, чтобы избежать перерисовки шапки
    document.body.append(Header(links));
    const newMain = document.createElement('main');
    document.body.append(newMain);
    main = newMain;

    navigate('cards', cards);
}


App();

function parser(text) {
    text = text.replace(/<\/?[^>]+>/g,'');
    text.match(/\[img src=".*"\]/gm).forEach(img => {
        const preSep = 'src="';
        const pre = img.slice(img.indexOf(preSep) + preSep.length);
        const src = pre.slice(0, pre.indexOf('"'));
        text = text.replace(img, `<img src="${src}">`);
    })
    
    return text;
}
