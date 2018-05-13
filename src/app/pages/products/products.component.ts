import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  data: Date = new Date();
  focus;
  focus1;

   items = [
      {
          'id': 686218310,
          'code': 32,
          'name': 'Пиксели',
          'size': '40х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124169514_w100_h100_forma_dlya_3d_paneli_shok__c3729cbb3b351_800x600.jpg',
          ]
      },{
          'id': 685673991,
          'code': 24,
          'name': 'Пьяный Карло',
          'size': '40х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124610285_w100_h100_0_02_05_da26bd25c3cd4d6ac__f6949297e_full_result.jpg',
          ]
      },{
          'id': 685256076,
          'code': 41,
          'name': 'Древесный микс',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124608806_w100_h100_8ffbdeef3ac17c09f40aedca980ea2af_result.jpg',
          ]
      },{
          'id': 685294775,
          'code': 30,
          'name': 'Техно',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124596885_w100_h100_tehno_result.jpg',
          ]
      },{
          'id': 685288118,
          'code': 33,
          'name': 'Ветер',
          'size': '50х50',
          'price': 100,
          'images': [
              'item_3-1.jpg',
              'item_3-2.jpg',
              'item_3-3.jpg',
              'item_3-4.jpg'
          ]
      },{
          'id': 685568506,
          'code': 14,
          'name': 'Калейдоскоп',
          'size': '40х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124612344_w100_h100_f13d32b8cdd5_result.jpg',
          ]
      },{
          'id': 684827105,
          'code': 22,
          'name': 'Дюны',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124606769_w100_h100_gp_dynu_1000x1000_result.jpg',
          ]
      },{
          'id': 684818901,
          'code': 20,
          'name': 'Пирамиды',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124606490_w100_h100_911769849_w0_h0_piramidki_eskiz_result.jpg',
          ]
      },{
          'id': 685583531,
          'code': 1,
          'name': 'Аллигатор',
          'size': '40х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124609952_w100_h100_0_02_04_81f036d45704e6ee6__01a3d4125_full_result.jpg',
          ]
      },{
          'id': 686219436,
          'code': 9,
          'name': 'Бубль Гум',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124179898_w200_h200_1090003735_w640_h640_cid2__pid667749541_c5b92442.jpg',
          ]
      },{
          'id': 686220178,
          'code': 4,
          'name': 'Сириус',
          'size': '20х20',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124222451_w100_h100_forma_freyle_facff1e00dd4c91_800x600_001.jpg',
          ]
      },{
          'id': 685207377,
          'code': 19,
          'name': 'Переплёт',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124607528_w100_h100_pereplet1_result.jpg',
          ]
      },{
          'id': 684525649,
          'code': 46,
          'name': 'Чешуя',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124601780_w100_h100_cheshuya_1x1_result.jpg',
          ]
      },{
          'id': 684521441,
          'code': 54,
          'name': 'Талия',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1139516963_w100_h100_forma_taliya_fad82ade28f4819_800x600.jpg',
          ]
      },{
          'id': 686219853,
          'code': 3,
          'name': 'Квадраты',
          'size': '45х45',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124186042_w100_h100_img_f19e390911710f710a7d0015c897238b_v.jpg',
          ]
      },{
          'id': 684510560,
          'code': 10,
          'name': 'Ядра',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124598820_w100_h100_434718919_w640_h640_dlya_sravneniya_result.jpg',
          ]
      },{
          'id': 684726804,
          'code': 52,
          'name': 'Иллюзия',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124604080_w100_h100_forma_milan_20997ae4887d848_800x600_2_result.jpg',
          ]
      },{
          'id': 684877229,
          'code': 45,
          'name': 'Лёд',
          'size': '50х50',
          'price': 100,
           'images': [
               'item_1-1.jpg',
               'item_1-2.jpg',
               'item_1-3.jpg',
               'item_1-4.jpg'
           ]
      },{
          'id': 684727789,
          'code': 15,
          'name': 'Сахара',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124605588_w100_h100_kora_result.jpg',
          ]
      },{
          'id': 684566262,
          'code': 11,
          'name': 'Матрица',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124611527_w100_h100_1089518334_w640_h640_cid2__73793_e7d9019f_result.jpg',
          ]
      },{
          'id': 684610898,
          'code': 35,
          'name': 'Кратеры',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124611331_w100_h100_form_1_1_result.jpg',
          ]
      },{
          'id': 685242973,
          'code': 16,
          'name': 'Магия',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1122171652_w100_h100_magiya.jpg',
          ]
      },{
          'id': 684523875,
          'code': 55,
          'name': 'Параллель',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1139521678_w100_h100_kirpichi.jpg',
          ]
      },{
          'id': 684523608,
          'code': 37,
          'name': 'Уют',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1120630764_w100_h100_2_04.jpeg',
          ]
      },{
          'id': 684546934,
          'code': 2,
          'name': 'Каскад',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124603253_w100_h100_kaskad_result.jpg',
          ]
      },{
          'id': 684527203,
          'code': 39,
          'name': 'Вуаль',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124602603_w100_h100_587937596_1_644x461_proda__dnepropetrovsk_result.jpg',
          ]
      },{
          'id': 684585427,
          'code': 38,
          'name': 'Волна',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124611124_w100_h100_img_20171105_203005_hdr_result.jpg',
          ]
      },{
          'id': 684523414,
          'code': 53,
          'name': 'Рок',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1139518483_w100_h100_rok_1x1.jpg',
          ]
      },{
          'id': 684520690,
          'code': 56,
          'name': 'Цель',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124599755_w100_h100_djkbt7hngc8a_result.jpg',
          ]
      },{
          'id': 684727222,
          'code': 44,
          'name': 'Эфир',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124604504_w100_h100_1085279.591a3e099880c_result.jpeg',
          ]
      },{
          'id': 684462407,
          'code': 8,
          'name': 'Бутоны',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124598189_w100_h100_butonyi_1x1_result.jpg',
          ]
      },{
          'id': 684727653,
          'code': 40,
          'name': 'Динамик',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124605113_w100_h100_1_result.jpg',
          ]
      },{
          'id': 684840613,
          'code': 17,
          'name': 'Нежность',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124607153_w100_h100_large_negnost_atria_1_result.png',
          ]
      },{
          'id': 685291942,
          'code': 27,
          'name': 'Роза',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124609639_w100_h100_0_02_04_2185d73f640a46ed3__80b6bcfbd_full_result.jpg',
          ]
      },{
          'id': 685256361,
          'code': 28,
          'name': 'Соты',
          'size': '50х53',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124610638_w100_h100_bb9737ceeb4bac692705fb235dc08ede_result.jpg',
          ]
      },{
          'id': 685257208,
          'code': 23,
          'name': 'Прованс',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124609054_w100_h100_forma_dlya_3d_paneli_prov__fa42e8_800x600_result.jpg',
          ]
      },{
          'id': 685296476,
          'code': 13,
          'name': 'Ретро крупная',
          'size': '50х50',
          'price': 100,
          'images': [
              'item_2-1.jpg',
              'item_2-2.jpg',
              'item_2-3.jpg'
          ]
      },{
          'id': 685659872,
          'code': 21,
          'name': 'Подушка',
          'size': '40х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1122882661_w100_h100_forma_dlya_3d_paneli_podu__8bee3325feab7_800x600.jpg',
          ]
      },{
          'id': 684515389,
          'code': 12,
          'name': 'Султан',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124599424_w100_h100_forma_vostok_33c122ca26ff7bd_800x600_result.jpg',
          ]
      },{
          'id': 684571352,
          'code': 26,
          'name': 'Ретро',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124610872_w100_h100_0_02_05_7cd64197081d89f3f__688dd843b_full_result.jpg',
          ]
      },{
          'id': 685255259,
          'code': 25,
          'name': 'Ракушка',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1124608316_w100_h100_1011932318_w0_h0_forma_dl__d___7_800x6001_result.jpg',
          ]
      },{
          'id': 638246490,
          'code': 50,
          'name': 'Клин',
          'size': '50х50',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089529312_w100_h100_cid2047614_pid638246490-dd7404b2.jpg',
          ]
      },{
          'id': 638242184,
          'code': 48,
          'name': 'Бордо',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089529295_w100_h100_cid2047614_pid638242184-c99f12f3.jpg',
          ]
      },{
          'id': 638247800,
          'code': 51,
          'name': 'Престиж',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089529967_w100_h100_cid2047614_pid638247800-ac3b0924.jpg',
          ]
      },{
          'id': 638245332,
          'code': 49,
          'name': 'Клин 2.0',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089529306_w100_h100_cid2047614_pid638245332-ddf0b025.jpg',
          ]
      },{
          'id': 638239154,
          'code': 47,
          'name': 'Кегли',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1139562831_w100_h100_1028774009_w640_h640_forma_kega_90b__b_800x6001.jpg',
          ]
      },{
          'id': 590133319,
          'code': 42,
          'name': 'Стоун',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089526799_w100_h100_cid2047614_pid590133319-57a22bd4.jpg',
          ]
      },{
          'id': 632122659,
          'code': 5,
          'name': 'Пик',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089528345_w100_h100_cid2047614_pid632122659-4a82313d.jpg',
          ]
      },{
          'id': 632130871,
          'code': 6,
          'name': 'Пик 2.0',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089529032_w100_h100_cid2047614_pid632130871-0085de26.jpg',
          ]
      },{
          'id': 590145577,
          'code': 43,
          'name': 'Хвойная',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089526790_w100_h100_cid2047614_pid590145577-f7f64599.jpg',
          ]
      },{
          'id': 561073779,
          'code': 36,
          'name': 'Бамбук',
          'size': '50х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1139535274_w100_h100_0_02_04_352da03d17492f881__31a8b5715a734f8c_full.jpg',
          ]
      },{
          'id': 561073798,
          'code': 18,
          'name': 'Пазл',
          'size': '50х30',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1139553905_w100_h100_img_20180211_wa0019.jpg',
          ]
      },{
          'id': 561073810,
          'code': 31,
          'name': 'Филенка',
          'size': '40х40',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1089521219_w100_h100_cid2047614_pid561073810-f17b8a29.jpg',
          ]
      },{
          'id': 667749550,
          'code': 7,
          'name': 'Гриндер',
          'size': '50х50(?)',
          'price': 100,
          'images': [
              'https://images.ua.prom.st/1090004665_w100_h100_cid2047614_pid667749550-23426536.jpg',
          ]
      }
  ];

  constructor() { }

  ngOnInit() {
    const rellaxHeader = new Rellax('.rellax-header');

      const body = document.getElementsByTagName('body')[0];
    body.classList.add('products-page');
      const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
    body.classList.remove('products-page');
      const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
