# 🎬 Movie Manager API

A RESTful API for managing your personal movie watchlist. Built with Node.js, Express, MongoDB, and Mongoose.

## ✨ Features

### Core CRUD Operations
- ✅ **Create** - Add new movies with title, year, rating (1-10), and watched status
- ✅ **Read** - Get all movies or fetch a specific movie by ID
- ✅ **Update** - Modify rating and watched status
- ✅ **Delete** - Remove movies from the database

### Advanced Features
- 📅 **Filter by Year** - Get all movies released in a specific year
- 📊 **Movie Statistics** - Get total count and average rating of all movies
- ⭐ **Dedicated Rating Endpoint** - Update just the rating without touching other fields

### Data Validation
- Title is required (min 1 character, max 50)
- Year is required (4+ characters)
- Rating must be between 1-10
- Proper error handling for invalid ObjectId formats

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| dotenv | Environment variables |

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/movies` | Get all movies |
| GET | `/movies/:id` | Get movie by ID |
| GET | `/movies/year/:year` | Get movies by release year |
| GET | `/moviesStats` | Get total count & average rating |
| POST | `/` | Create a new movie |
| PATCH | `/movies/:id` | Update rating/watched status |
| PATCH | `/movies/:id/rate` | Update only the rating |
| DELETE | `/movies/:id` | Delete a movie |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/ishwinderkaurgill/Personal-Movie-Watchlist-API.git
cd movie-manager-api

# Install dependencies
npm install

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
![Mongoose](https://img.shields.io/badge/Mongoose-7.x-red)

# Create environment file
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start the server
npm start

```
## 👨‍💻 Author

**Your Name**
- GitHub: [@ishwinderkaurgill](https://github.com/ishwinderkaurgill)
- LinkedIn: [ishwinder-kaur-gill-78b498232](https://linkedin.com/in/ishwinder-kaur-gill-78b498232)
