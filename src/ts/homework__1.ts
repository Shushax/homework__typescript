export default class Movie {

    year: number;
    country: string;
    slogan: string;
    genre: string[];
    time: string;

    constructor(year: number, country: string, slogan: string, genre: string[], time: string) {
        this.year = year;
        this.country = country;
        this.slogan = slogan, 
        this.genre = genre,
        this.time = time;
    }
};