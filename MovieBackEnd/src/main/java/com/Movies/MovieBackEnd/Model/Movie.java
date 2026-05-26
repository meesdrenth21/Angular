package com.Movies.MovieBackEnd.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Author: Mees Drenth
 * Class about the entity movie and its attributes
 */

@Entity
public class Movie {

    @Id
    private Long id;
    private String name;
    private boolean seen = false;

    public Movie(Long id, String name, boolean seen) {
        this.id = id;
        this.name = name;
        this.seen = seen;
    }

    public Movie(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isSeen() {
        return seen;
    }

    public void setSeen(boolean seen) {
        this.seen = seen;
    }
}
