const express = require("express")
const router = express.Router()
const { handleGenerateNewMovies, handleGetMovies, handleGetById, handleUpdateMovie, handleDeleteMovie, handleGetByYear, handleGetStats, handleUpdateRating } = require("../controller/movie-controller")


router.get('/movies', handleGetMovies)

router.post('/', handleGenerateNewMovies)

router.get('/movies/:id', handleGetById)

router.patch('/movies/:id', handleUpdateMovie)

router.delete('/movies/:id', handleDeleteMovie)

router.get('/movies/year/:year', handleGetByYear)

router.get('/moviesStats', handleGetStats)

router.patch('/movies/:id/rate', handleUpdateRating )

module.exports = router