import { Profile, ValidateProfileError } from '../../types/profile';

export const ValidateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first, lastname, age, city,
    } = profile;
    const errors: ValidateProfileError[] = [];
    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_PROFILE_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_PROFILE_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_PROFILE_CITY);
    }

    return errors;
};
