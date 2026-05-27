package com.Movies.MovieBackEnd.Controller;

import com.Movies.MovieBackEnd.Model.Movie;
import org.springframework.web.bind.annotation.*;

import java.security.DrbgParameters;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

/**
 * Author: Mees Drenth
 * Class that controls everything regarding movie handling
 */

@RestController
@RequestMapping("/Movies")
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {

    private static final List<Movie> watchlist = new ArrayList<>(List.of(
            new Movie(1L, "Inception", false),
            new Movie(2L, "The Dark Knight", false),
            new Movie(3L, "The good, the bad and the ugly", false),
            new Movie(4L, "Once upon a time in the west", false)
    ));

    @GetMapping
    public List<Movie> getWatchlist() {
        return watchlist;
    }

    @PostMapping("/{id}/toggle")
    public Movie toggleWatched(@PathVariable int id){
        Movie movie = watchlist.get(id);
        movie.setSeen(!movie.isSeen());
        return movie;
    }

    @DeleteMapping("/{id}")
    public List<Movie> deleteMovie(@PathVariable int id){
        watchlist.remove(id);
        return watchlist;
    }

    private Long currentId = 0L;

    @PostMapping("/newMovie")
    public Movie newMovie(@RequestBody Movie movie) {
        if (movie.getId() == null) {
            movie.setId(nextId());
        }

        watchlist.add(movie);
        return movie;
    }

    private Long nextId() {
        return ++currentId;
    }

}
