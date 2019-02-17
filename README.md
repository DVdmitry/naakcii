**НаАкции.Бел** – это сервис экономии на закупках в торговых сетях за счёт формирования списка покупок преимущественно (или целиком) из товаров на акции (то есть тех, которые продаются торговыми сетями с каким-то из видов скидки). На текущий момент сервис представляет собой веб-приложение, с помощью которого можно сформировать такой список покупок и отправиться с ним в магазин. Однако для полноценного закупка необходима интеграция с учётными системами торговых сетей, которая запланирована на ближайшее время.

Описание самого сервиса можно найти [здесь](https://github.com/VadimMustyatsa/naakcii/wiki/Модель-сервиса-НаАкции.Бел). А описание технологического стека и инструментария [здесь](https://github.com/VadimMustyatsa/naakcii/wiki/Технологический-стек-и-инструментарий).

Структура репозитория:
* **api** – директория, в которой содержатся сервисы Spring, документация по ним доступна [через Swagger](http://178.124.206.42:8080/api/swagger-ui.html); 
* **features** – директория, в которой содержатся целевые сценарии поведения сервиса, написанные на языке Gherkin, а также вспомогательные материалы для них;
* **front** – директория, в которой содержится фронтэндовая часть приложения, написанная на Angular 4;
* **tests** – директория, в которой содержатся тесты, проверяющие приложение (на текущий момент там содержатся лишь E2E-тесты на Protractor, проверяющие реализацию целевых сценариев поведения сервиса, описанных в файлах директории features; unit-тесты для бэкэндовой части содеражтся в директории api);
* **wiki** – директория для хранения графических файлов вики проекта (на текущий момент там находятся файлы, иллюстрирующие модель сервиса).