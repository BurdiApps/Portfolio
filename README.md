# James Burdick | Portfolio

A minimal personal portfolio site built with HTML, CSS, JavaScript, and Jekyll. Deployed via GitHub Pages.

## Pages

| Page | Description |
|------|-------------|
| **Home** (`/`) | Hero section with bio and links to the three main sections |
| **Course Work** (`/coursework.html`) | Card grid for weekly academic assignments (W01–W14) |
| **Projects** (`/projects.html`) | Cards for personal and freelance projects |
| **Blog** (`/blog.html`) | Jekyll-powered static blog — posts live in `_posts/` |

## Features

- 🎨 Red accent color (`#EC4646`), clean minimal design
- 📱 Responsive layout with a mobile hamburger menu
- 🔗 Active nav link highlighting (JS-based)
- 📝 Jekyll blog — drop `.md` files in `_posts/` to publish
- 🚀 Ready for GitHub Pages deployment

## File Structure

```
├── _config.yml          # Jekyll configuration
├── _includes/
│   └── navbar.html      # Shared navigation component
├── _layouts/
│   ├── default.html     # Base page layout
│   └── post.html        # Blog post layout
├── _posts/
│   └── 2026-03-15-my-first-post.md
├── assets/
│   ├── styles.css       # All styles
│   └── script.js        # Nav highlighting + mobile menu
├── index.html           # Home / About page
├── coursework.html      # Course Work page
├── projects.html        # Projects page
├── blog.html            # Blog listing page
├── Gemfile
└── README.md
```

## Run Locally

### Prerequisites

- Ruby (>= 2.7)
- Bundler: `gem install bundler`

### Steps

```bash
# Clone the repo
git clone https://github.com/BurdiApps/Portfolio.git
cd Portfolio

# Install dependencies
bundle install

# Serve locally (http://localhost:4000/Portfolio/)
bundle exec jekyll serve
```

## Add a Blog Post

Create a new file in `_posts/` following the naming convention `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My Post Title"
date: 2026-04-01 12:00:00 -0600
author: James Burdick
excerpt: "A short summary shown on the blog listing page."
---

Your post content here...
```

## Deploy to GitHub Pages

1. Push changes to the `main` branch
2. Go to **Settings → Pages** in the repo
3. Set source to **Deploy from a branch** → `main` / `/ (root)`
4. Your site will be live at `https://burdiapps.github.io/Portfolio/`

## Author

**James Burdick** — Software Development Student at BYU Idaho  
GitHub: [@BurdiApps](https://github.com/BurdiApps)
