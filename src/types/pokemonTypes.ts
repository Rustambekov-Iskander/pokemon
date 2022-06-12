export interface Pokemon {
    name: string;
    url: string;
}

interface abilities {
    ability: {
        name: string;
        url: string;
    }
}

interface moves {
    move: {
        name: string;
        url: string;
    }
}

export interface IPokemon {
    abilities: abilities[];
    base_experience: number;
    forms: {
        name: string;
        url: string;
    }[];
    height: number;
    id: number;
    location_area_encounters: string;
    moves: moves[];
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    }
    url: string;
    sprites: {
        back_default: string;
        front_default: string
    }
}