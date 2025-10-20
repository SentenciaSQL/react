import { heroes, Owner, type Hero } from "../data/heroe.data"


const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`No existe un her con el id ${id}`);
    // }

    return hero;
}

console.log(getHeroById(2));


export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter((hero) => {
        return hero.owner === owner;
    })

    return heroesByOwner;

}