# 🌍 Wanderlust – Full-Stack Stay Booking Project

[![Node.js](https://img.shields.io/badge/Node.js-22.19.0-43853d.svg)](https://nodejs.org/)  
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000.svg)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)](https://www.mongodb.com/atlas/database)  
[![EJS](https://img.shields.io/badge/EJS-Templates-F57C00.svg)](https://ejs.co/)  
[![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-Maps-2C8D40.svg)](https://www.openstreetmap.org/)  
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-0033CC.svg)](https://cloudinary.com/)  
[![License: ISC](https://img.shields.io/badge/License-ISC-ff5a5f.svg)](https://opensource.org/licenses/ISC)

**Wanderlust** is a **full-stack project** that allows users to discover, book, and review unique stays, while hosts can list and manage their properties. The project uses **Node.js, Express, MongoDB, EJS templates, and OpenStreetMap** for geolocation features.  

---

## ✨ Why Wanderlust?

- 🗺️ **Interactive Maps** to explore listings before booking.  
- 🏠 **Host Your Space** with photos, pricing, and detailed descriptions.  
- 💬 **Community Reviews** for trusted feedback and transparent ratings.  


---

## 🌟 Core Features

- **Secure Authentication** with Passport.js  
- **Dynamic EJS Templates** for all pages  
- **Precise Geocoding** using OpenStreetMap (Nominatim)  
- **Media Management** with Cloudinary  
- **Real-Time Feedback & Notifications** using Connect-Flash  
- **Responsive UI** built with Bootstrap 5  

---

## 🛠️ Tech Stack

**Backend**  
- Node.js + Express.js (v5.1.0)  
- MongoDB with Mongoose  
- Passport.js for authentication  
- Multer + Cloudinary for file uploads  

**Frontend**  
- **EJS templates** for dynamic pages  
- Bootstrap 5 + Custom CSS  
- Vanilla JS & Leaflet.js for interactive maps  
- FontAwesome for icons  

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+  
- MongoDB (Local or Atlas)  
- Cloudinary account  

### Setup
```bash
# Clone the repo
git clone https://github.com/shivamprajapati8667-blip/StayFinder-Full-Stack-Project.git
cd StayFinder-Full-Stack-Project

# Install dependencies
npm install

# Create .env file in root:
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

# (Optional) Seed data
node init/index.js

# Run the app
node app.js


## 📂 Project Structure

```text
Wanderlust/
├── controllers/    # Project Logic (CRUD, Geocoding)
├── models/         # Database Blueprints (Listing, Review, User)
├── routes/         # URL Access Points
├── views/          # EJS Pages & Partials
├── public/         # Global Styles, Scripts & Images
└── utils/          # Middleware & Error Formatting
```

---
## � License

This project is open-source and available under the [ISC License](file:///c:/Users/Shivam/alpha/MAJORPROJECT/LICENSE).

---

**Wanderlust** - Built with ❤️ by [Shivam Prajapati](https://github.com/shivamprajapati8667-blip) 🚀
