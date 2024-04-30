import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    LIGHT = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props:TextProps) => {
    const {
        title,
        text,
        className,
        theme = TextTheme.LIGHT,
        align = TextAlign.LEFT,
    } = props;

    const additionalClasses = [className, cls[theme], cls[align]];

    return (
        <div className={classNames(cls.Text, {}, additionalClasses)}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
