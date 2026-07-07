# 🚀 Personal Developer Portfolio

A modern, responsive, and highly customizable personal portfolio built with React, Vite, and Tailwind CSS. It features smooth scroll animations via Framer Motion and isolates all personal data into a single configuration file for effortless updates.

![Portfolio Preview](https://via.placeholder.com/1000x500.png?text=Portfolio+Preview+Image) <!-- Replace with your actual screenshot link once deployed -->

## ✨ Features

- **Modern Tech Stack**: Built with React & Vite for lightning-fast development and optimized production builds.
- **Responsive Design**: Fully styled with Tailwind CSS, ensuring a perfect layout across mobile, tablet, and desktop.
- **Dark Mode Theme**: Sleek, professional dark UI out-of-the-box.
- **Smooth Animations**: Integrated with Framer Motion for scroll-reveal effects and fluid component mounting.
- **Data-Driven Architecture**: All personal details (experience, projects, skills, social links) are stored in a single `credentials.js` file. No need to hunt through UI components to update your resume!
- **Deploy-Ready**: Configured for seamless deployment to Vercel or Netlify.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have Node.js installed on your system.
- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RamireddyVenkatesh/Portfolio.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd your-repo-name
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:5173`.

## ✍️ How to Customize

Updating this portfolio with your own information is incredibly easy. You **do not** need to edit the React components directly. 

1. Open `src/data/credentials.js`.
2. Update the exported objects (`personalInfo`, `socialLinks`, `skills`, `experience`, `education`, `projects`) with your own data.
3. Place your actual resume PDF inside the `public/` folder and name it `resume.pdf` (or update the filename in `credentials.js`).

## 📂 Folder Structure

```text
├── public/
│   ├── resume.pdf           # Add your resume here
│   └── vite.svg
├── src/
│   ├── components/          # UI Sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── credentials.js   # ⬅️ Edit this file to update your portfolio
│   ├── App.jsx              # Main Layout
│   ├── index.css            # Tailwind imports & global styles
│   └── main.jsx
├── tailwind.config.cjs
└── package.json
```

## 🌍 Deployment

Since this project uses Vite, deploying to platforms like Vercel or Netlify takes just a few clicks.

### Vercel
1. Push your code to your GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the Vite framework.
5. Click **Deploy**.

### Netlify
1. Push your code to your GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and click **Add new site** > **Import an existing project**.
3. Connect your GitHub and select the repository.
4. Set the Build Command to `npm run build` and the Publish Directory to `dist`.
5. Click **Deploy Site**.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, modify, and use it for your own personal portfolio!

---
*Designed & Built by [Venkatesh Ramireddy](https://github.com/RammireddyVenkatesh)*
README.md
Displaying README.md.
