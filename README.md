# 🌿 GrowGo. - Plant Care Tracker

GrowGo is a Front-End, mobile-responsive web application built to help plant lovers manage and monitor the care of their indoor and outdoor plants. From watering schedules to plant health tracking, GrowGo is your digital gardening assistant.

🔗 **Live Website**: []


---

## 🚀 Features

- 🔐 **User Authentication** – Secure login/register with Firebase (email & Google)
- 🌱 **Plant Management** – Add, update, delete, and view personal plant records
- 📆 **Care Scheduling** – Track watering frequency and care level using `date-fns`
- 🎨 **Responsive UI** – Fully responsive for mobile, tablet, and desktop
- 💡 **Interactive UI** – Tooltips, Sweetalerts2
- 🔎 **All Plants Page** – Sort and view plant data in a searchable table
- ⚙️ **Dark/Light Theme** – Toggle theme switch for personalized experience
- 🚫 **404 Page** – Custom-designed not-found page for broken routes

---

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, Swiper.js, React Router, Firebase (Authentication & Hosting)
- **Backend**: Express.js, MongoDB, Node.js
- **Other Libraries**:
  - `date-fns` – Date formatting
  - `react-tooltip` – Tooltips
  - `sweetalert2` – Alert popups
  - `swiper` – Banner slider
  - `react-icons` – Icons

---

## 📂 Pages Overview

| Page             | Description                                   |
|------------------|-----------------------------------------------|
| Home             | Banner slider, new plants, care tips, themes  |
| Login/Register   | Auth with validation and success/error toasts |
| Add Plant        | Form with care details (Private Route)        |
| All Plants       | Table with sorting and view details option    |
| My Plants        | Manage user's added plants (CRUD)             |
| Plant Details    | View plant profile with all data              |
| 404 Page         | Custom error page for invalid URLs            |