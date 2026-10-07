# PACELINE — Run Club & Lab

A responsive, single-page running store and run club website. It has a **Home** page (hero, categories, product grid, brand story, banners) and an **About** page (story, philosophy, timeline, store info, founders). Both pages live in `index.html` and switch without reloading.

## Features

- Home and About pages in one file, switched with tabs (no page reload)
- Product grid with 18 products, filter chips (New, Race Day, Road, Trail, Apparel, Accessories, Recovery, Winter, Sale) and nav shortcuts for Men, Women, Footwear and Sale
- Live search overlay with popular searches
- Shopping bag drawer with item count, subtotal and checkout button
- Book-a-fitting modal and newsletter signup form
- Toast notifications
- Mobile menu and fully responsive layout

## Tech stack

- HTML5
- CSS3
- [Tailwind CSS](https://tailwindcss.com) (Play CDN, no build step)
- Vanilla JavaScript (no framework)
- Google Fonts: Syne and Plus Jakarta Sans

## Project structure

```
paceline/
├── index.html              # Markup for both Home and About pages
├── css/
│   └── styles.css          # Custom CSS (icons, animations, toast, chips)
├── js/
│   ├── tailwind.config.js  # Tailwind theme: colors and fonts
│   ├── images.js           # Image path map for page and product images
│   └── main.js             # Product data, filtering, search, cart, tabs, modals
├── assets/
│   └── images/             # Site and product images
└── README.md
```

## Getting started

No installation is needed. Download or clone the repo, then either open `index.html` in your browser or run a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

An internet connection is required because Tailwind CSS and Google Fonts load from CDNs.

## Customising

- **Products:** edit the `PRODUCTS` array in `js/main.js` (title, brand, price, badge, category, tags, image).
- **Images:** replace files in `assets/images/`, or change the paths in `js/images.js`.
- **Colors and fonts:** edit `js/tailwind.config.js` (`paceline-bg`, `paceline-dark`, `paceline-lime`, `paceline-border`).
- **Text and sections:** edit `index.html`. The Home page is `#page-home` and the About page is `#page-about`.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## License

Add a license of your choice (for example MIT) before publishing.
