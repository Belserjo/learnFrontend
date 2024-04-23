import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props:AvatarProps) => {
    const {
        src,
        size,
        className,
        alt,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            alt={alt}
            src={src}
        />
    );
});
