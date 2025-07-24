```markdown
# 🎮 EduFun – Gamified Learning for Young Minds

A web-based educational platform designed to make foundational learning fun, interactive, and accessible — especially for children from underserved communities. Built for **Innothon 2025** under the theme **“Tech for Impact”**.

---

## 📹 Demo Video

▶️ [Watch Demo on Awesome Screenshot](https://www.awesomescreenshot.com/video/42403188?key=504b2994fb42d92af0ac930d258727dc)

---

## 🧠 Problem Statement

Many children in rural and under-resourced environments lack access to engaging learning tools. Traditional e-learning platforms are often:
- Text-heavy and non-interactive
- Not optimized for low-end devices
- Lacking offline support

This results in reduced curiosity, low engagement, and weak foundational learning.

---

## 💡 Solution

**EduFun** is a browser-based gamified learning application that:
- Offers **interactive drag-and-drop games**
- Provides **live quizzes** via the [OpenTDB API](https://opentdb.com/api_config.php)
- Rewards children with **stars and badges**
- Works **offline** using `localStorage`
- Supports **multiple languages**

---

## 👧 Target Audience & Impact

- Children aged 5–12, especially in low-income or rural communities
- NGOs and schools looking for offline-friendly educational tools

**Impact:**
- Makes learning enjoyable and rewarding
- Increases attention span and knowledge retention
- Accessible even with limited internet or device capability

---

## 🔑 Features

- 🎮 Drag & Drop educational mini-games
- 🧠 Quiz modules powered by OpenTDB API
- 🏅 Visual reward system (stars, badges)
- 💾 Offline progress tracking with `localStorage`
- 🌐 Multilingual interface (JSON-driven)
- 📱 Fully responsive design (mobile-friendly)

---

## 🛠 Tech Stack

| Technology    | Purpose                            |
|---------------|-------------------------------------|
| HTML5         | Structure                           |
| CSS3          | Styling & responsive layout         |
| JavaScript    | Core game and quiz logic            |
| OpenTDB API   | Live quiz question data             |
| localStorage  | Offline support for progress/scores |
| Netlify       | Hosting & Deployment                |

---

## 🧭 Project Structure

```

/edufun
├── index.html          # Homepage
├── quiz.html           # Quiz interface
├── result.html         # Result & badges
├── /css
│   └── style.css
├── /js
│   ├── quiz.js         # Quiz logic and API calls
│   ├── game.js         # Drag-and-drop game logic
│   └── storage.js      # Local storage utils
├── /assets             # Icons, images, and badges
└── /lang               # Multilingual JSON configs

```

---

## 📈 Future Scope

- Add login/signup with Firebase
- Track leaderboard across schools
- Subject-wise modules for Math, Science, Reading
- Voice feedback using Web Speech API (future)

---

## 👥 Team

| Name    | Role                  |
|---------|------------------------|
| Vishal  | JavaScript Developer   |

---

## 📄 License

This project is developed for **Innothon 2025** under the open theme **Tech for Impact**. Educational and non-commercial use only.

---

## 🙏 Thank You!

