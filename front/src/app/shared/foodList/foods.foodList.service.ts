import {Injectable} from '@angular/core';
import {FoodList} from './foods.foodList.model';

@Injectable()
export class FoodsFoodListService {
  private dataFoodList: FoodList[][][] = [
    [//Бакалея
      [//Мука
        {id: 100, name: 'Макаронные изделия Роллтон', allPrice: 1.79, discount: 30, totalPrice: 1.25, boxWeight: '400гр', idStrore: 0, img: ''},
        {id: 101, name: 'Мука пшеничная М54-25 в/с', allPrice: 1.69, discount: 24, totalPrice: 1.29, boxWeight: '2кг', idStrore: 1, img: ''}
      ],
      [//Макароны
        {id: 102, name: 'Макароны DONNA VERA, гомити, капелини, пенне, спагетти', allPrice: 1.99, discount: 27, totalPrice: 1.45, boxWeight: '450гр', idStrore: 2, img: ''},
        {id: 103, name: 'Макароны GALINA BLANKA, лапша, перья, рожки, спагетти', allPrice: 2.39, discount: 29, totalPrice: .169, boxWeight: '450гр', idStrore: 3, img: ''}
      ],
      [//Крупы
        {id: 104, name: 'Крупа перловая "Бабушкина кухня"', allPrice: 0.99, discount: 34, totalPrice: 0.65, boxWeight: '900гр', idStrore: 4, img: ''},
        {id: 105, name: 'Гречка "Бабушкина кухня"', allPrice: 1.39, discount: 28, totalPrice: 0.99, boxWeight: '900гр', idStrore: 5, img: ''}
      ],
      [//Бобовые
        {id: 106, name: 'Бобовые 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 6, img: ''},
        {id: 107, name: 'Бобовые 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 7, img: ''}
      ],
      [//Сухие завтраки
        {id: 108, name: 'Хлопья овсяные "Экстра №3"', allPrice: 1.18, discount: 50, totalPrice: 0.59, boxWeight: '500гр', idStrore: 8, img: ''},
        {id: 109, name: 'Готовый завтрак Cini Minis с корицей', allPrice: 5.05, discount: 45, totalPrice: 2.79, boxWeight: '250гр', idStrore: 9, img: ''}
      ],
      [//Специи
        {id: 110, name: 'Специи 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 10, img: ''},
        {id: 111, name: 'Специи 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 0, img: ''}
      ],
      [//Масло/Уксус
        {id: 112, name: 'Масло/Уксус 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 1, img: ''},
        {id: 113, name: 'Масло/Уксус 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 2, img: ''}
      ],
      [//Соусы
        {id: 114, name: 'Соусы 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 3, img: ''},
        {id: 1, name: 'Соусы 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 4, img: ''}
      ],
      [//Быстрое приготовление
        {id: 2, name: 'Быстрое приготовление 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 5, img: ''},
        {id: 3, name: 'Быстрое приготовление 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 6, img: ''}
      ],
      [//Снеки
        {id: 4, name: 'Снеки 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 7, img: ''},
        {id: 5, name: 'Снеки 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Сухофрукты
        {id: 6, name: 'Сухофрукты 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 9, img: ''},
        {id: 7, name: 'Сухофрукты 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 10, img: ''}
      ],
      [//Консервы
        {id: 8, name: 'Консервы 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 0, img: ''},
        {id: 9, name: 'Консервы 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 1, img: ''}
      ]
    ],
    [//Детское питание
      [//Сухие смеси
        {id: 10, name: 'Сухие смеси 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 2, img: ''},
        {id: 11, name: 'Сухие смеси 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 3, img: ''},
        {id: 12, name: 'Сухие смеси 3', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 4, img: ''},
        {id: 13, name: 'Сухие смеси 4', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 5, img: ''}
      ],
      [//Каши
        {id: 14, name: 'Каши 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 6, img: ''},
        {id: 15, name: 'Каши 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 7, img: ''},
        {id: 16, name: 'Каши 3', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Соки
        {id: 17, name: 'Соки 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 9, img: ''},
        {id: 18, name: 'Соки 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 10, img: ''},
        {id: 19, name: 'Соки 3', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 0, img: ''},
        {id: 20, name: 'Соки 4', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 1, img: ''},
        {id: 21, name: 'Соки 5', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 2, img: ''}
      ],
      [//Пюре
        {id: 22, name: 'Пюре 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 3, img: ''},
        {id: 23, name: 'Пюре 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 4, img: ''}
      ],
      [//Консервы
        {id: 24, name: 'Консервы 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 5, img: ''},
        {id: 25, name: 'Консервы 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 6, img: ''}
      ]
    ],
    [//Молочные изделия, яйца
      [//Молоко
        {id: 26, name: 'Молоко 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 7, img: ''},
        {id: 27, name: 'Молоко 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Сливки
        {id: 28, name: 'Сливки 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 9, img: ''},
        {id: 29, name: 'Сливки 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 10, img: ''}
      ],
      [//Масло
        {id: 30, name: 'Масло 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 0, img: ''},
        {id: 31, name: 'Масло 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 1, img: ''}
      ],
      [//Кисломолочные
        {id: 32, name: 'Кисломолочные 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 2, img: ''},
        {id: 33, name: 'Кисломолочные 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 3, img: ''}
      ],
      [//Сметана
        {id: 34, name: 'Сметана 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 4, img: ''},
        {id: 35, name: 'Сметана 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 5, img: ''}
      ],
      [//Творожные продукты
        {id: 36, name: 'Творожные продукты 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 6, img: ''},
        {id: 37, name: 'Творожные продукты 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 7, img: ''}
      ],
      [//Сыр
        {id: 38, name: 'Сыр 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 8, img: ''},
        {id: 39, name: 'Сыр 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 9, img: ''}
      ],
      [//Йогурт
        {id: 40, name: 'Йогурт 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 10, img: ''},
        {id: 41, name: 'Йогурт 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 0, img: ''}
      ],
      [//Мороженое
        {id: 42, name: 'Мороженое 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 1, img: ''},
        {id: 43, name: 'Мороженое 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 2, img: ''}
      ],
      [//Яйцо
        {id: 44, name: 'Яйцо 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 3, img: ''},
        {id: 45, name: 'Яйцо 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 4, img: ''}
      ]
    ],
    [//Мясо, рыба, колбасы
      [//Птица
        {id: 46, name: 'Птица 1', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 5, img: ''},
        {id: 47, name: 'Птица 2', allPrice: 2.40, discount: 30, totalPrice: 1.60, boxWeight: '', idStrore: 6, img: ''}
      ],
      [//Свинина
        {id: 48, name: 'Свинина 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''},
        {id: 49, name: 'Свинина 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Говядина
        {id: 50, name: 'Говядина 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''},
        {id: 51, name: 'Говядина 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''}
      ],
      [//Рыба
        {id: 52, name: 'Рыба 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''},
        {id: 53, name: 'Рыба 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''}
      ],
      [//Морепродукты
        {id: 54, name: 'Морепродукты 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''},
        {id: 55, name: 'Морепродукты 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''}
      ],
      [//Колбасы
        {id: 56, name: 'Колбасы 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 4, img: ''},
        {id: 57, name: 'Колбасы 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 5, img: ''}
      ]
    ],
    [//Напитки,вода, чай,кофе
      [//Вода
        {id: 58, name: 'Вода 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 6, img: ''},
        {id: 59, name: 'Вода 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''}
      ],
      [//Квас
        {id: 60, name: 'Квас 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''},
        {id: 61, name: 'Квас 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''}
      ],
      [//Соки
        {id: 62, name: 'Соки 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''},
        {id: 63, name: 'Соки 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''}
      ],
      [//Сиропы, топпинги
        {id: 64, name: 'Сиропы, топпинги 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''},
        {id: 65, name: 'Сиропы, топпинги 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''}
      ],
      [//Чай
        {id: 66, name: 'Чай 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''},
        {id: 67, name: 'Чай 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 4, img: ''}
      ],
      [//Кофе
        {id: 68, name: 'Кофе 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 5, img: ''},
        {id: 69, name: 'Кофе 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 6, img: ''}
      ],
      [//Напитки
        {id: 70, name: 'Напитки 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''},
        {id: 71, name: 'Напитки 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Какао
        {id: 72, name: 'Какао 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''},
        {id: 73, name: 'Какао 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''}
      ],
      [//Цикорий
        {id: 74, name: 'Цикорий 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''},
        {id: 75, name: 'Цикорий 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''}
      ]
    ],
    [//Овощи и фрукты
      [//Овощи
        {id: 76, name: 'Овощи 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''},
        {id: 77, name: 'Овощи 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''}
      ],
      [//Фрукты
        {id: 78, name: 'Фрукты 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 4, img: ''},
        {id: 79, name: 'Фрукты 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 5, img: ''}
      ],
      [//Грибы
        {id: 80, name: 'Грибы 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 6, img: ''},
        {id: 81, name: 'Грибы 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''}
      ],
      [//Ягоды
        {id: 82, name: 'Ягоды 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''},
        {id: 83, name: 'Ягоды 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''}
      ]
    ],
    [//Сладости
      [//Шоколад
        {id: 84, name: 'Шоколад 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''},
        {id: 85, name: 'Шоколад 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''}
      ],
      [//Конфеты
        {id: 86, name: 'Конфеты 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''},
        {id: 87, name: 'Конфеты 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''}
      ],
      [//Батончики
        {id: 88, name: 'Батончики 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''},
        {id: 89, name: 'Батончики 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 4, img: ''}
      ],
      [//Леденцы
        {id: 90, name: 'Леденцы 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 5, img: ''},
        {id: 91, name: 'Леденцы 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 6, img: ''}
      ],
      [//Зефир
        {id: 92, name: 'Зефир 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''},
        {id: 93, name: 'Зефир 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Мармелад
        {id: 94, name: 'Мармелад 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''},
        {id: 136, name: 'Мармелад 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''}
      ],
      [//Халва
        {id: 95, name: 'Халва 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''},
        {id: 96, name: 'Халва 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''}
      ],
      [//Вафли
        {id: 97, name: 'Вафли 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''},
        {id: 98, name: 'Вафли 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''}
      ],
      [//Мучные изделия
        {id: 99, name: 'Мучные изделия 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 4, img: ''},
        {id: 115, name: 'Мучные изделия 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 5, img: ''}
      ]
    ],
    [//Хлебобулочные изделия
      [//Хлеб
        {id: 116, name: 'Хлеб 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 6, img: ''},
        {id: 117, name: 'Хлеб 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''}
      ],
      [//Батон
        {id: 118, name: 'Батон 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''},
        {id: 119, name: 'Батон 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''}
      ],
      [//Лаваш
        {id: 120, name: 'Лаваш 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''},
        {id: 121, name: 'Лаваш 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''}
      ],
      [//Сухари
        {id: 122, name: 'Сухари 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''},
        {id: 123, name: 'Сухари 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''}
      ],
      [//Сушки
        {id: 124, name: 'Сушки 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''},
        {id: 125, name: 'Сушки 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 4, img: ''}
      ]
    ],
    [//Замороженные продукты
      [//Грибы
        {id: 126, name: 'Грибы 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 5, img: ''},
        {id: 127, name: 'Грибы 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 6, img: ''}
      ],
      [//Овощи
        {id: 128, name: 'Овощи 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 7, img: ''},
        {id: 129, name: 'Овощи 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 8, img: ''}
      ],
      [//Фрукты
        {id: 130, name: 'Фрукты 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 9, img: ''},
        {id: 131, name: 'Фрукты 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 10, img: ''}
      ],
      [//Ягоды
        {id: 132, name: 'Ягоды 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 0, img: ''},
        {id: 133, name: 'Ягоды 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 1, img: ''}
      ],
      [//Полуфабрикаты
        {id: 134, name: 'Полуфабрикаты 1', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 2, img: ''},
        {id: 135, name: 'Полуфабрикаты 2', allPrice: 240, discount: 30, totalPrice: 160, boxWeight: '', idStrore: 3, img: ''}
      ]
    ]
  ];

  getFoodList(idCategory, idSubcategory): FoodList[] {
    return this.dataFoodList[idCategory][idSubcategory];
  }
}
