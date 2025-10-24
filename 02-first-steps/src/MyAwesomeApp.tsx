import type { CSSProperties } from "react";

const fisrtName = 'Andres';
const lastName = 'Frias';

const favotiteThing = ['Destiny 2', 'Pokemon', 'Metal Gear', 'Helldivers 2'];
const isActive = true;

const address = {
    zipcode: 'ABC-123',
    country: 'Dominican Republic'
}

const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 30
}

export const MyAwesomeApp = () => {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{fisrtName}</h1>
            <h2>{lastName}</h2>

            <p className="mi-clase-favorita">{favotiteThing.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}
            >{JSON.stringify(address)}</p>
        </div>
    );
}