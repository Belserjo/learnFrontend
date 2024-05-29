import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export enum ValidateProfileError {
    INCORRECT_PROFILE_DATA = 'INCORRECT_PROFILE_DATA',
    INCORRECT_PROFILE_AGE = 'INCORRECT_PROFILE_AGE',
    INCORRECT_PROFILE_CITY = 'INCORRECT_PROFILE_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
