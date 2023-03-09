import { belgiumFlagIcon, franceFlagIcon, usaFlagIcon, germanyFlagIcon } from "../../assets";

/**
 * This is mock data.. to be fetched from an api in real application
 */

type CountryListResponse = {
    icon: any;
    title: string;
    stats: string;
}

export const topCountriesList: CountryListResponse[] = [
    {
        icon: belgiumFlagIcon,
        title: 'Belgium',
        stats: '7.5K',
    },
    {
        icon: franceFlagIcon,
        title: 'France',
        stats: '5.3K',
    },
    {
        icon: usaFlagIcon,
        title: 'USA',
        stats: '4.9K',
    },
    {
        icon: germanyFlagIcon,
        title: 'Germany',
        stats: '4.8K',
    },
]