import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    LIGHT = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props:TextProps) => {
    const {
        title,
        text,
        className,
        theme = TextTheme.LIGHT,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const additionalClasses = [
        className,
        cls[theme],
        cls[align],
        cls[size],
    ];

    return (
        <div className={classNames(cls.Text, {}, additionalClasses)}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
