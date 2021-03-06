# language: ru
Функция: Переход на Главную страницу
  Как покупателю ищущему экономию
  Мне нужно перейти на Главную страницу
  Чтобы воспользоваться функциями Сервиса

  Сценарий: Переход по прямой ссылке
    Если я перехожу по ссылке "http://наакции.бел/"
    То должна открыться страница "Сервис экономии – НаАкции.Бел"
    И должна отобразиться иллюстрация "Дескриптор"
    И должно отобразиться "5" иллюстраций шагов пояснительной схемы
    И должен отобразиться текст первого шага "1. Выбирайте подходящие торговые сети"
    И должен отобразиться текст второго шага "2. Выбирайте и добавляйте акционные товары в список"
    И должен отобразиться текст третьего шага "3. Смотрите экономию и редактируйте список"
    И должен отобразиться текст четвертого шага "4. Дописывайте в список неакционные товары"
    И должен отобразиться текст пятого шага "5. Всё! Скачивайте список и отправляйтесь за покупками"
    И должна отобразиться кнопка "Перейти к товарам"

  Сценарий: Переход по клику на логотип
    Если я нажимаю на логотип
    То должна открыться страница "Сервис экономии – НаАкции.Бел"
