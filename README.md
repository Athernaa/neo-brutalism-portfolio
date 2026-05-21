# 🟨 Neo-Brutalist Developer Portfolio

A highly opinionated, high-performance, and visually striking personal portfolio template built with **Next.js 15, Tailwind CSS v4, Framer Motion, and GSAP**.

Designed around the **Neo-Brutalist** aesthetic, this template features stark contrasts, thick borders, sharp shadows, and vibrant accent colors—all while maintaining perfect accessibility, smooth scrolling, and dynamic dark mode support.

<p align="center">
  <a href="#live-demo"><strong>View Live Demo</strong></a> ·
  <a href="#configuration"><strong>How to Customize</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a>
</p>

---

## 🚀 Live Demo

You can view the live demonstration of this template here before downloading:
👉 **[View Live Demo on Vercel](https://your-vercel-deployment-link.vercel.app)** *(Replace this with your actual vercel link after deployment)*

---

## ✨ Key Features

- **Neo-Brutalist Design System**: Thick borders (`brutal-border`), sharp block shadows (`brutal-shadow-sm` / `brutal-shadow-xl`), and vibrant contrast colors.
- **100% Modular Configuration**: Never touch a React component to change your data. Everything (Projects, Experiences, Services, Socials, Hero Text) is pulled from a single `src/config/portfolio.ts` file!
- **Dynamic Dark/Light Mode**: Fully semantic CSS variables (`text-on-accent`, `hover-accent`) ensure perfect contrast in both light and dark themes.
- **Buttery Smooth Animations**: Powered by a combination of `Framer Motion` (page transitions, hover states) and `GSAP` (scroll-triggered reveals, infinite marquees).
- **Smooth Scrolling**: Implemented using `Lenis` for a premium, native-feeling scroll experience without hijacking accessibility.
- **Interactive Modals**: Detailed project and service modals that gracefully prevent background scrolling.
- **Custom UI Elements**: Brutalist scrollbars, animated buttons, and responsive grid layouts.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Athernaa/neo-brutalism-portfolio.git
   cd neo-brutalism-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🎨 Configuration (How to Customize)

The best part about this template is that **you do not need to touch the UI components to change the content**. 

Simply open `src/config/portfolio.ts`. Inside this file, you can modify:

- **`personalInfo`**: Your name, hero subtitle, bio, and social media links.
- **`techStack`**: The infinite marquee technologies and their colors.
- **`stats`**: The animated number counters on the homepage.
- **`experiences`**: Your work history.
- **`projects`**: Your portfolio projects, including the deep-dive details shown inside the interactive modals.
- **`services`**: The services you offer.

### Customizing Colors
All colors are semantic and defined in `src/app/globals.css`. If you want to change the shade of the yellow accent or the background color of dark mode, just tweak the `:root` and `.dark` variables at the top of the CSS file.

---

## 🌍 Deployment

This template is fully optimized for Vercel.

1. Push your code to your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. Leave all settings as default (Vercel automatically detects Next.js).
5. Click **Deploy**.

In less than a minute, your neo-brutalist portfolio will be live!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use it for your personal portfolio, modify the UI, and make it your own!

---
*If you like this template, don't forget to give it a ⭐ on GitHub!*
