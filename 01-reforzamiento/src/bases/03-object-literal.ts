interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
       
}

interface Address {
    city: string;
    postalCode: string 
}


const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'Manhatan',
        postalCode: 'ABC123'
    }
}

console.log(ironman);


// const spiderman = {...ironman};

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 17;
// spiderman.address.city = 'Queens'


// console.log(ironman, spiderman);
