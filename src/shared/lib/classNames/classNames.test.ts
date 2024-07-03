import { classNames } from '../classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someCls')).toBe('someCls');
    });
    test('with additional class', () => {
        const expected = 'someCls class1 class2';
        expect(classNames('someCls', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someCls class1 class2 hovered scrollable';
        expect(classNames(
            'someCls',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someCls class1 class2 scrollable';
        expect(classNames(
            'someCls',
            { hovered: false, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    }); test('with mods undefined', () => {
        const expected = 'someCls class1 class2';
        expect(classNames(
            'someCls',
            { hovered: false, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
