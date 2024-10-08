import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;
    const { t } = useTranslation();
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>

                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton
                    className={cls.text}
                    width="100%"
                    height={50}
                />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${routePath.profile}${comment?.user.id}`}
                className={cls.header}
            >
                {comment?.user.avatar
                    ? <Avatar size={30} src={comment?.user.avatar} />
                    : null}

                <Text className={cls.username} title={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
