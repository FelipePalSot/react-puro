import type { CSSProperties } from "react";

    const firstName = 'Felipe';
    const lastName = 'Palomino';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canada'
    }

    const myStyles: CSSProperties = {
                    backgroundColor: 'skyblue',
                    borderRadius: isActive ? 10: 20,
                    padding: 10,
                    marginTop: 30,
                }

export function MyAwesomeApp(){
    return(
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            {/* Todo lo que esta entre llaves se interpreta como JS */}
            <p className="mi-clase-favorita">{favoriteGames.join(',')}</p>
            <p>{2+2}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p
                style={myStyles}
            >{JSON.stringify(address)}</p>
        </div>
    );
}