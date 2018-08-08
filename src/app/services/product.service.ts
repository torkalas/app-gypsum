import * as _ from 'lodash';

export interface Product {
    id: number,
    code: number,
    name: string,
    size: string,
    price: number,
    images: any
}

// @Injectable({
//     providedIn: 'root'
// })
export class ProductService {

    constructor() {
    }

    private data: Product[] = [
        {
            'id': 686218310,
            'code': 32,
            'name': 'Пиксели',
            'size': '40х40',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg',
                'item_5.jpg',
                'item_6.jpg'
            ]
        },
        {
            'id': 685673991,
            'code': 24,
            'name': 'Пьяный Карло',
            'size': '40х40',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg'
            ]
        },
        {
            'id': 685256076,
            'code': 41,
            'name': 'Древесный микс',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 685294775,
            'code': 30,
            'name': 'Техно',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg',
                'item_5.jpg'
            ]
        },
        {
            'id': 685288118,
            'code': 33,
            'name': 'Ветер',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg'
            ]
        },
        {
            'id': 685568506,
            'code': 14,
            'name': 'Калейдоскоп',
            'size': '40х40',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684827105,
            'code': 22,
            'name': 'Дюны',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.png'
            ]
        },
        {
            'id': 684818901,
            'code': 20,
            'name': 'Пирамиды',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg'
            ]
        },
        {
            'id': 685583531,
            'code': 1,
            'name': 'Аллигатор',
            'size': '40х40',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg'
            ]
        },
        {
            'id': 686219436,
            'code': 9,
            'name': 'Бубль Гум',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 686220178,
            'code': 4,
            'name': 'Сириус',
            'size': '20х20',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 685207377,
            'code': 19,
            'name': 'Переплёт',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg',
                'item_5.jpg'
            ]
        },
        {
            'id': 684525649,
            'code': 46,
            'name': 'Чешуя',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg'
            ]
        },
        {
            'id': 684521441,
            'code': 54,
            'name': 'Талия',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 686219853,
            'code': 3,
            'name': 'Квадраты',
            'size': '45х45',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg'
            ]
        },
        {
            'id': 684510560,
            'code': 10,
            'name': 'Ядра',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg',
                'item_5.jpg',
                'item_6.jpg'
            ]
        },
        {
            'id': 684726804,
            'code': 52,
            'name': 'Иллюзия',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684877229,
            'code': 45,
            'name': 'Лёд',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg'
            ]
        },
        {
            'id': 684727789,
            'code': 15,
            'name': 'Сахара',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg'
            ]
        },
        {
            'id': 684566262,
            'code': 11,
            'name': 'Матрица',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684610898,
            'code': 35,
            'name': 'Кратеры',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 685242973,
            'code': 16,
            'name': 'Магия',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684523875,
            'code': 55,
            'name': 'Параллель',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684523608,
            'code': 37,
            'name': 'Уют',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684546934,
            'code': 2,
            'name': 'Каскад',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg'
            ]
        },
        {
            'id': 684527203,
            'code': 39,
            'name': 'Вуаль',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684585427,
            'code': 38,
            'name': 'Волна',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.png',
                'item_3.jpeg',
                'item_4.png'
            ]
        },
        {
            'id': 684523414,
            'code': 53,
            'name': 'Рок',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684520690,
            'code': 56,
            'name': 'Цель',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684727222,
            'code': 44,
            'name': 'Эфир',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg'
            ]
        },
        {
            'id': 684462407,
            'code': 8,
            'name': 'Бутоны',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg'
            ]
        },
        {
            'id': 684727653,
            'code': 40,
            'name': 'Динамик',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684840613,
            'code': 17,
            'name': 'Нежность',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.png',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg'
            ]
        },
        {
            'id': 685291942,
            'code': 27,
            'name': 'Роза',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 685256361,
            'code': 28,
            'name': 'Соты',
            'size': '50х53',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 685257208,
            'code': 23,
            'name': 'Прованс',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 685296476,
            'code': 13,
            'name': 'Ретро крупная',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg'
            ]
        },
        {
            'id': 685659872,
            'code': 21,
            'name': 'Подушка',
            'size': '40х40',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684515389,
            'code': 12,
            'name': 'Султан',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 684571352,
            'code': 26,
            'name': 'Ретро',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.png',
                'item_2.jpg',
                'item_3.png',
                'item_5.png',
                'item_6.png',
                'item_7.jpg'
            ]
        },
        {
            'id': 685255259,
            'code': 25,
            'name': 'Ракушка',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg'
            ]
        },
        {
            'id': 638246490,
            'code': 50,
            'name': 'Клин',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 638242184,
            'code': 48,
            'name': 'Бордо',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 638247800,
            'code': 51,
            'name': 'Престиж',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 638245332,
            'code': 49,
            'name': 'Клин 2.0',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 638239154,
            'code': 47,
            'name': 'Кегли',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 590133319,
            'code': 42,
            'name': 'Стоун',
            'size': '245x215мм',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg'
            ]
        },
        {
            'id': 632122659,
            'code': 5,
            'name': 'Пик',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 632130871,
            'code': 6,
            'name': 'Пик 2.0',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 590145577,
            'code': 43,
            'name': 'Хвойная',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg',
            ]
        },
        {
            'id': 561073779,
            'code': 36,
            'name': 'Бамбук',
            'size': '50х40',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg'
            ]
        },
        {
            'id': 561073798,
            'code': 18,
            'name': 'Пазл',
            'size': '50х30',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 561073810,
            'code': 31,
            'name': 'Филенка',
            'size': '40х40',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 667749550,
            'code': 7,
            'name': 'Гриндер',
            'size': '50х50(?)',
            'price': 100,
            'images': [
                'item_1.jpg'
            ]
        },
        {
            'id': 713617403,
            'code': 29,
            'name': 'Пузыри',
            'size': '50х50',
            'price': 100,
            'images': [
                'item_1.jpg',
                'item_2.jpg',
                'item_3.jpg',
                'item_4.jpg',
                'item_5.jpg',
                'item_6.jpg',
                'item_7.jpg',
            ]
        }
    ];

    getProducts(): Product[] {

        return this.data;
    }

    getProduct(id): Product {

        return _.find(this.data, (product) => product.id == id);
    }
}
