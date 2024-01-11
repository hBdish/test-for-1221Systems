## Запуск проекта

```
npm ci - установка зависимостей из *.lock.json
npm run dev - запуск frontend проекта в dev режиме
```

---

## Скрипты

- `npm run dev` - Запуск frontend проекта на vite dev server
- `npm run lint` - Проверка ts файлов линтером

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Линтинг

##### Запуск линтеров

- `npm run lint` - Проверка ts файлов линтером

---

## Сущности (entities)

- [Author](/src/entities/author)
- [Post](/src/entities/post)

## Фичи (features)

- [PostItemCard](/src/features/post-item-card)
