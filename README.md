# Selva J - Interactive Developer Portfolio

A high-end, scrollytelling-based personal portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS. This portfolio features a cinematic scroll-driven image sequence (HTML5 Canvas), advanced 3D tilt effects, parallax scrolling, custom cursors, and an integrated custom Nodemailer backend.

## 🚀 Features

- **Cinematic Scrollytelling:** Immersive scroll-linked image sequence animations using HTML5 Canvas.
- **Dynamic Interactions:** Custom cursors, 3D tilt effects on project cards, and parallax scrolling.
- **Modern UI/UX:** Built with Tailwind CSS, featuring glassmorphism elements and smooth entrance reveals.
- **Custom Contact Backend:** Integrated Next.js API route utilizing Nodemailer for secure, direct-to-inbox messaging without third-party services.
- **Fully Responsive:** Optimized for both desktop and mobile experiences.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS, `tailwind-merge`, `clsx`
- **Animations:** Framer Motion
- **Icons:** React Icons (Google Material & FontAwesome)
- **Backend Email:** Nodemailer

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/selva192003/Whisk-Portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your Google App Password for the contact form:
   ```env
   EMAIL_USER="selvaj192003@gmail.com"
   EMAIL_PASS="your_16_character_app_password"
   ```
   *(Note: You must generate an App Password from your Google Account settings -> Security -> 2-Step Verification)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

**Important:** Remember to add your `EMAIL_USER` and `EMAIL_PASS` variables to your Vercel project's Environment Variables settings before deploying!

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
