# language: ru

Функция: Выбор категории товара
  Как покупатель
  Я хочу выбрать интересующую меня категорию товаров
  Чтобы добавлять в список акционные товары только этой категории

  Сценарий: Выбор из состояния по умолчанию
    Допустим я на странице "Выбор товаров"
    И отображается состояние страницы по умолчанию
    Если я выбираю отличную от отображенной по умолчанию категорию "Хлебобулочные изделия"
    То должны отобразиться следующие "Подкатегории":
      | подкатегория  |
      | Хлеб          |
      | Лаваш         |
      | Сухари        |
    И должнны отобразиться по умолчанию акционные товары входящие в выбранные подкатегории:
      | подкатегория  | акционный товар                      |
      | Хлеб          | Хлеб "Литвинский" 400г               |
      | Лаваш         | Лаваш тонкий "Рецепты Кавказа", 300г |
      | Сухари        | Сухари "Ладушки" ржаные, 250 г.      |
