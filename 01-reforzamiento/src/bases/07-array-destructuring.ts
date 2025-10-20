const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = characterNames;

console.log({  p3 });


const retunsArrayFn = () => ['ABC', 123] as const;

const [letters, numbers] = retunsArrayFn();

console.log(letters, numbers);

const useState = (value: string) => [ value, (newValue: string) => console.log(newValue)] as const;

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta'); 





