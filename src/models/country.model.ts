export interface Country {
    name: {
        common: string;
    },
    capital: string[];
    cc3: string;
    flags: {
        alt: string;
        png: string;
        svg: string;
    };
    population: number;
    region: string;
}