# StayFinder 🏠

StayFinder is a full-stack property rental web application inspired by modern accommodation marketplaces like Airbnb.

The platform allows users to explore rental properties, view detailed listings, upload property images, and manage bookings through a secure and responsive interface.

This project demonstrates backend development, RESTful routing, authentication logic, and database integration using Node.js and MongoDB.

## 🚀 Features

- **User Authentication**: Secure signup and login using Passport.js.
- **Listing Management**: Users can create, update, and delete stay listings.
- **Image Uploads**: Integrated with Cloudinary for robust image storage and management.
- **Review System**: Users can post and delete reviews for different listings.
- **Responsive UI**: A clean and dynamic user interface built with EJS and custom CSS.
- **Search & Filter**: Find the perfect stay using built-in search functionality.

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript), HTML5, CSS3, JavaScript.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Authentication**: Passport.js with Local Strategy.
- **Media Storage**: Cloudinary (via Multer).
- **Validation**: Joi (Schema-based validation).

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas instance)

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shivamprajapati8667-blip/StayFinder-Full-Stack-Project.git
   cd StayFinder-Full-Stack-Project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

4. **Run the application**:
   ```bash
   node app.js
   ```
   The server will start on `http://localhost:8080`.

## 📂 Project Structure

- `/controllers`: Request handlers for listings, reviews, and users.
- `/models`: Mongoose schemas for Listings, Reviews, and Users.
- `/public`: Static assets (fonts, images, scripts, styles).
- `/routes`: Express route definitions.
- `/utils`: Helper functions and error handling classes.
- `/views`: EJS templates for rendering the UI.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [ISC](https://opensource.org/licenses/ISC) License.
