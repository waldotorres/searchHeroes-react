import { heroes } from "../data/heroes";

export const getHeroesByName = (searchtext) => {
  
    const name = searchtext.trim().toLocaleLowerCase();

    if( name.length === 0 ) 
    { 
        return [];
    }

    return heroes.filter( e=> e.superhero.toLocaleLowerCase().includes( name ) );


}
