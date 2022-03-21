// Название компонентов пишется с заглавной буквы

const links = [
    'Посты',
    'Создать'
];

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

document.body.append(Header(links));

const cards = [
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2FMountains-Blue.jpg?alt=media&token=d04f0279-79c6-4752-8b5a-cccd73720243',
        header: 'Blue Mountains',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.',
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

function Card(props) {
    const card = document.createElement('div');
    const media = document.createElement('img');
    const content = document.createElement('div');
    const headLine = document.createElement('h2');
    const text = document.createElement('p');

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

document.body.append(Cards(cards));