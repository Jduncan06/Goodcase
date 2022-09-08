import { SHOWS } from "../../app/shared/SHOWS";

export const activeShows = () =>{
    const comingShows =[ SHOWS.filter(show => show.date !== '')];
    return SHOWS.filter(show => show.date !== '');
};