import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexDirection = 'row' | 'column';
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'evenly' | 'around';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

export interface FlexProps {
    className?: string;
    children?: ReactNode;
    direction?: FlexDirection;
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: FlexGap;
    max?: boolean
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    around: cls.justifyAround,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    evenly: cls.justifyEvenly,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        direction = 'row',
        justify = 'start',
        align = 'center',
        gap,
        max,
    } = props;

    const classes = [
        className,
        directionClasses[direction],
        justifyClasses[justify],
        alignClasses[align],
        gap && gapClasses[gap],
    ];
    const mods: Mods = {
        [cls.max]: max,
    };
    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};
