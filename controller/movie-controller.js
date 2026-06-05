const Movies = require('../models/movie-models')

async function handleGenerateNewMovies(req, res) {
    try {
        const body = req.body

        const { title, year, rating, watched } = body

        if (!title || !year) {
            return res.status(400).json({ "error": "Title and Year is required" })
        }
        if (rating && (rating < 1 || rating > 10)) {
            return res.status(400).json({ "error": " rating should be between 1 to 10 only" })
        }

        const movieCreated = await Movies.create({
            title: title,
            year: year,
            rating: rating,
            watched: watched,
        })

        return res.status(201).json({ "sucess": "movie created", movieCreated })
    }
    catch (err) {
        return res.status(500).json({ err: " Internal server error" })
    }

}


async function handleGetMovies(req, res) {

    try {

        const allMovies = await Movies.find({})
        
        return res.status(200).json({ allMovies })

    }
    catch (err) {

        return res.status(404).json({ err: " data no found" })

    }

}

async function handleGetById(req, res) {

    try {
        const id = req.params.id

        const specificMovie = await Movies.findById(id)

        if (!specificMovie) {
            return res.status(404).json({ err: " Movie not found" })
        }

        return res.status(200).json({ specificMovie })

    }
    catch (err) {

        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Other database errors" })

    }

}


async function handleUpdateMovie(req, res) {

    try {
        const body = req.body
        const id = req.params.id

        const { rating, watched } = body

        if (rating && (rating < 1 || rating > 10)) {
            return res.status(400).json({ "error": " rating should be between 1 to 10 only" })
        }

        const updateData = {}
        if (rating !== undefined) updateData.rating = rating
        if (watched !== undefined) updateData.watched = watched

        const movieUpdated = await Movies.findByIdAndUpdate(id, updateData, { new: true })

        if (movieUpdated === null) {
            return res.status(404).json({ err: "movie not found " })
        }

        return res.status(200).json({ "sucess": "movie updated", movieUpdated })


    }
    catch (err) {

        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Other database errors" })


    }

}


async function handleDeleteMovie(req, res) {

    try {
        const id = req.params.id

        const deleteMovie = await Movies.findByIdAndDelete(id)

        if (!deleteMovie) {
            return res.status(404).json({ err: "movie not found " })
        }

        return res.status(200).json({ "success": "request succeeded, but no response body needed" })

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Other database errors" })
    }

}

async function handleGetByYear(req, res) {
    try {
        const year = Number(req.params.year)

        if (isNaN(year)) {
            return res.status(400).json({ err: "Year must be a valid number" })
        }

        const yearMovies = await Movies.find({ year: year })

        return res.status(200).json({ yearMovies })

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Internal server error " })
    }

}


async function handleGetStats(req, res) {

    try {

        const allMovies = await Movies.find({})
        const totalMovies = allMovies.length

        const moviesWithRatings = allMovies.filter(movie => movie.rating != undefined)

        let averageRating = 0
        if (moviesWithRatings.length > 0) {

            const sumRatings = moviesWithRatings.reduce((sum, movie) => { return sum + movie.rating }, 0)

            averageRating = Number((sumRatings / moviesWithRatings.length).toFixed(1))
        }

        return res.status(200).json({ "total Movies": ` ${totalMovies}`, "average rating": `${averageRating}` })
    }

    catch (err) {
        // if (err.name === "CastError") {
        //     return res.status(400).json({ err: " Invalid ID format " })

        // }
        return res.status(500).json({ err: " Internal server error " })
    }


}

async function handleUpdateRating(req, res) {
    try {

        const id = req.params.id
        const { rating } = req.body

        if (rating === undefined) {
            return res.status(400).json({ error: "Rating is required" })
        }

        if (rating < 1 || rating > 10) {
            return res.status(400).json({ error: "Rating must be between 1 and 10" })
        }

        const updatedMovie = await Movies.findByIdAndUpdate(
            id,
            { rating: rating },
            { new: true }
        )

        if (!updatedMovie) {
            return res.status(404).json({ error: "Movie not found" })
        }

        return res.status(200).json(updatedMovie)

    }

    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Internal server error " })
    }
}


module.exports = {
    handleGenerateNewMovies,
    handleGetMovies,
    handleGetById,
    handleUpdateMovie,
    handleDeleteMovie,
    handleGetByYear,
    handleGetStats,
    handleUpdateRating
}