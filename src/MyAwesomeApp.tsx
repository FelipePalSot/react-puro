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
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            {/* Todo lo que esta entre llaves se interpreta como JS */}
            <p>{favoriteGames.join(',')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p
                style={myStyles}
            >{JSON.stringify(address)}</p>
        </>
    );
}