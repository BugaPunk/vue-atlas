export interface Country {
    name: {
        common: string;
    };
    capital: string[];
    cca2: "BO"
    ccn3: "068"
    cca3: "BOL"
    cioc: "BOL"
    flag: string;
    flags: {
        alt: string;
        png: string;
        svg: string;
    };
    translations: {
        spa: {
            official: string;
            common: string;
        };
    };
    population: number;
    region: string;
    subregion: string;
    timezones: {
        "0": string; // Define un objeto con propiedades numéricas y valores de tipo string
    };
    maps: {
        googleMaps: string;
    };
    languages: string;
    area: number;
    coatOfArms: {
        png: string;
    };
}
