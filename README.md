# Сервис "Фильмотека"
## Получение списка фильмов
- Метод: GET
- Путь: /films
- Тело запроса (JSON): пустое
- URL параметры: поиск осуществляется по всем параметрам фильма, их можно комбинировать
- Формат ответа: JSON массив с фильмами ИЛИ [ошибка](#Ошибки)

Если не указан ни один URL параметр, то будут возвращены все фильмы из базы данных.

Пример запросов через Postman: 

`GET https://***/films/` - все фильмы

`GET https://***/films/?ageRestriction=16` - все фильмы c возрастным ограничением 16+

`GET https://***/films/?ageRestriction=16&genres=Drama` - все фильмы c возрастным ограничением 16+ и жанром драма


## Получение фильма по ID
- Метод: GET
- Путь: /films/{id}
- Тело запроса (JSON): пустое
- URL параметры: отсутствуют
- Формат ответа: JSON объект (фильм) ИЛИ [ошибка](#Ошибки)

Пример запроса через Postman: 

`GET https://***/films/5dfdd68c9516a37fd13fb302 `

Пример ответа: 
```json
{
    "_id": "5dfdd68c9516a37fd13fb302",
    "title": "Star Wars: Episode IX - The Rise of Skywalker",
    "ageRestriction": 16,
    "duration": 141,
    "releaseDate": "19 December 2019",
    "plot": "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
    "director": "J.J. Abrams",
    "writers": [
        "Chris Terrio",
        "J.J. Abrams"
    ],
    "stars": [
        "Carrie Fisher",
        "Mark Hamill",
        "Adam Driver"
    ],
    "genres": [
        "Action",
        "Adventure",
        "Fantasy"
    ],
    "scores": {
        "Metascore": 53,
        "IMDb": 6.9
    },
    "createdAt": "2019-12-21T08:23:40.615Z",
    "updatedAt": "2019-12-21T09:32:22.004Z",
    "__v": 0
}
```

## Добавление фильма
- Метод: POST
- Путь: /films
- Тело запроса (JSON, все поля обязательны): 
    - `title` - название
    - `ageRestriction` - возрастное ограничение
    - `duration` - 
продолжительность фильма
    - `releaseDate` - дата релиза
    - `plot` - сюжет
    - `director` - режиссер
    - `writers` - сценаристы
    - `stars` - актеры
    - `genres` - жанры
    - `scores` - оценки
- URL параметры: отсутствуют
- Формат ответа: JSON объект (фильм) ИЛИ [ошибка](#Ошибки)

Пример тела запроса:
```json
{
    "title": "Star Wars: Episode IX - The Rise of Skywalker",
    "ageRestriction": 16,
    "duration": 141,
    "releaseDate": "19 December 2019",
    "plot": "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
    "director": "J.J. Abrams",
    "writers": [
        "Chris Terrio",
        "J.J. Abrams"
    ],
    "stars": [
        "Carrie Fisher",
        "Mark Hamill",
        "Adam Driver"
    ],
    "genres": [
        "Action",
        "Adventure",
        "Fantasy"
    ],
    "scores": {
        "Metascore": 53,
        "IMDb": 6.9
    }
}
```
Пример ответа: 
```json
{
    "_id": "5dfdd68c9516a37fd13fb302",
    "title": "Star Wars: Episode IX - The Rise of Skywalker",
    "ageRestriction": 16,
    "duration": 141,
    "releaseDate": "19 December 2019",
    "plot": "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
    "director": "J.J. Abrams",
    "writers": [
        "Chris Terrio",
        "J.J. Abrams"
    ],
    "stars": [
        "Carrie Fisher",
        "Mark Hamill",
        "Adam Driver"
    ],
    "genres": [
        "Action",
        "Adventure",
        "Fantasy"
    ],
    "scores": {
        "Metascore": 53,
        "IMDb": 6.9
    },
    "createdAt": "2019-12-21T08:23:40.615Z",
    "updatedAt": "2019-12-21T09:32:03.174Z",
    "__v": 0
}
```

## Редактирование фильма
- Метод: PATCH
- Путь: /films/{id}
- Тело запроса (JSON): 
    - `title` - название
    - `ageRestriction` - возрастное ограничение
    - `duration` - 
продолжительность фильма
    - `releaseDate` - дата релиза
    - `plot` - сюжет
    - `director` - режиссер
    - `writers` - сценаристы
    - `stars` - актеры
    - `genres` - жанры
    - `scores` - оценки
- URL параметры: отсутствуют
- Формат ответа: JSON объект (фильм) ИЛИ [ошибка](#Ошибки)

Пример тела запроса: 
```json
{
    "ageRestriction": 160,
    "duration": 1410
}
```
Пример ответа: 
```json
{
    "_id": "5dfdd68c9516a37fd13fb302",
    "title": "Star Wars: Episode IX - The Rise of Skywalker",
    "ageRestriction": 160,
    "duration": 1410,
    "releaseDate": "19 December 2019",
    "plot": "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
    "director": "J.J. Abrams",
    "writers": [
        "Chris Terrio",
        "J.J. Abrams"
    ],
    "stars": [
        "Carrie Fisher",
        "Mark Hamill",
        "Adam Driver"
    ],
    "genres": [
        "Action",
        "Adventure",
        "Fantasy"
    ],
    "scores": {
        "Metascore": 53,
        "IMDb": 6.9
    },
    "createdAt": "2019-12-21T08:23:40.615Z",
    "updatedAt": "2019-12-21T08:23:40.615Z",
    "__v": 0
}
```


## Удаление фильма
- Метод: DELETE
- Путь: /films/{id}
- Тело запроса (JSON): пустое
- URL параметры: отсутствуют
- Формат ответа: JSON объект (message) с информацией об удаленном id
   
  ИЛИ [ошибка](#Ошибки)

Пример запроса через Postman: 

`DELETE https://***/films/5dfd9dcf5d923375bc77e126`

Пример ответа: 
```json
{
    "message": "Film with _id:5dfd9dcf5d923375bc77e126 is deleted"
}
```
## Получение списка логов
- Метод: GET
- Путь: /logs
- Тело запроса (JSON): пустое
- URL параметры: поиск осуществляется по всем параметрам, их можно комбинировать
- Формат ответа: JSON массив ИЛИ [ошибка](#Ошибки)

Если не указан ни один URL параметр, то будут возвращены все логи из базы данных.

- Состав лога: 
    - `ip` - IP-адрес запроса
    - `originalUrl` - ссылка запроса
    - `time` - 
дата и время запроса по МСК
    - `method` - метод (например, GET)
    - `status` - статус (например, 200)
    - `headers` - HTTP заголовки
    - `request` - тело запроса
    - `response` - тело ответа

Пример запросов через Postman: 

`GET https://***/logs/` - все логи

`GET https://***/logs?method=GET` - все логи с методом GET

`GET https://***/logs?method=GET&originalUrl=/films` - все логи с методом GET и ссылкой запроса /films


## Ошибки
Представляют из себя объект с полем:
- `message` - текст ошибки, отправленный сервисом

Пример запросов через Postman: 

- `GET https://***/films/555`
- `DELETE https://***/films/555`
- `PATCH https://***/films/555`
```json
{
    "message": "Cast to ObjectId failed for value \"555\" at path \"_id\" for model \"Film\""
}
```
- `POST https://***/films`
```json
{
    "message": "Film validation failed: title: Path `title` is required." ...
}
```