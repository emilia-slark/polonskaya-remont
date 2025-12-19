# POLONSKAYA REMONT - Next.js Project

Проект мигрирован с React + Vite на Next.js 15 с использованием:
- **RSC (React Server Components)** - для статических компонентов
- **SSG (Static Site Generation)** - для предварительной генерации страниц
- **CSR (Client-Side Rendering)** - для интерактивных компонентов

## Технологии

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - типизация
- **SCSS Modules** - стилизация
- **Framer Motion** - анимации
- **Keen Slider** - карусель
- **React Fast Marquee** - бегущая строка

## Структура проекта

```
polonskaya-remont/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Корневой layout с метаданными
│   ├── page.tsx           # Главная страница (SSG)
│   ├── about/
│   │   └── page.tsx       # Страница "О нас" (SSG)
│   └── not-found.tsx      # Страница 404
├── src/
│   ├── components/        # Переиспользуемые компоненты
│   │   ├── Carousel/      # Client Component (keen-slider)
│   │   ├── Marquee/        # Client Component (framer-motion)
│   │   ├── PageTransition/ # Client Component (framer-motion)
│   │   └── ...
│   ├── ui/                # UI компоненты
│   │   ├── Header/        # Client Component (навигация)
│   │   ├── ContactForm/   # Client Component (формы)
│   │   ├── Footer/        # Server Component (RSC)
│   │   ├── Card/          # Server Component (RSC)
│   │   └── ...
│   ├── pages/            # Страницы приложения
│   ├── constants/        # Константы
│   ├── utils/            # Утилиты
│   └── styles/            # Глобальные стили
└── public/               # Статические файлы
```

## Установка и запуск

### Установка зависимостей

```bash
npm install
```

### Разработка

```bash
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

### Сборка для production

```bash
npm run build
```

### Запуск production сборки

```bash
npm start
```

## Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_API_TOKEN=your_api_token
```

## Особенности миграции

### Server Components (RSC)
Статические компоненты без интерактивности работают как Server Components:
- `Footer`
- `Card`
- `Gallery`
- `VideoContainer`
- `AboutSection`
- `BookSection`

### Client Components
Компоненты с интерактивностью помечены директивой `"use client"`:
- `Header` - навигация и меню
- `ContactForm` - формы с состоянием
- `Carousel` - слайдер с keen-slider
- `Marquee` - анимация с framer-motion
- `PageTransition` - переходы между страницами
- `Modal` - модальные окна
- `Intro` - анимации при скролле

### SSG (Static Site Generation)
Все страницы генерируются статически на этапе сборки:
- Главная страница (`/`)
- Страница "О нас" (`/about`)
- Страница 404 (`/not-found`)

## Маршрутизация

Next.js App Router использует файловую систему для маршрутизации:
- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `*` → `app/not-found.tsx`

## Стили

Глобальные стили импортируются в `app/layout.tsx`:
```tsx
import "@/styles/scss/global.scss";
```

Модульные стили используются через SCSS Modules:
```tsx
import styles from "./styles.module.scss";
```

## Метаданные

SEO метаданные настроены в `app/layout.tsx` через Next.js Metadata API:
- Title
- Description
- Keywords
- Open Graph
- Twitter Cards

## Производительность

- **SSG** - страницы предгенерированы на этапе сборки
- **RSC** - серверные компоненты уменьшают размер клиентского бандла
- **Code Splitting** - автоматическое разделение кода Next.js
- **Image Optimization** - оптимизация изображений через Next.js Image

## Дальнейшее развитие

- Добавить ISR (Incremental Static Regeneration) для динамического контента
- Оптимизировать изображения через `next/image`
- Добавить middleware для обработки запросов
- Настроить кэширование и CDN
