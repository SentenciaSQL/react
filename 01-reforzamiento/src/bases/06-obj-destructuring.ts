const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const { key, name: ironmanName, age } = person;

console.log({ironmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank = 'Sin rango'}: Hero) => ({
    keyName: key,
    user: {
        name: name,
        age: age
    },
    rank: rank
});

const context = useContext(person);
console.log(context);

const { rank, keyName, user: { name } } = useContext(person);
console.log({rank, keyName, name});
