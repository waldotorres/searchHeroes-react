import {  heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  

    //console.log('publisher', publisher)
    const publishers = ['DC Comics', 'Marvel Comics'];


    if( !publishers.includes(publisher)){
        throw new Error('The publisher provided is not a valid publisher');
    }
    //
    return heroes.filter( e=> e.publisher === publisher)

}
