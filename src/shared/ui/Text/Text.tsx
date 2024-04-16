import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    LIGHT = 'primary',
    ERROR = 'error',
}

interface TextProps {
className?: string;
title?: string;
text?: string;
theme?: TextTheme;
}

export const Text = memo((props:TextProps) => {
    const {
        title,
        text,
        className,
        theme = TextTheme.LIGHT,
    } = props;
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
