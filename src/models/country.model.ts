export interface Country {
    name: {
        common: string;
    },
    capital: string[];
    cc3: string;
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
}