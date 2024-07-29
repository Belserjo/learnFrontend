import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import AddCommentFormAsync from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { articlesDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    fetchArticleRecommendations,
} from '../../model/servises/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/servises/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/servises/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { getArticlesComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticlesRecommendations } from '../../model/slices/articleDetailsRecommendationsSliceReducer';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';

interface ArticleDetailsPageProps {
    className?: string;

}

const reducers: ReducersList = {
    articleDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticlesComments.selectAll);
    const recommendations = useSelector(getArticlesRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        title={t('Рекомендуем')}
                        size={TextSize.L}
                        className={cls.commentTitle}
                    />
                    <ArticleList
                        className={cls.recommendations}
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        target="_blank"
                    />
                    <Text
                        title={t('Комментарии')}
                        size={TextSize.L}
                        className={cls.commentTitle}
                    />
                    <AddCommentFormAsync onSendComment={onSendComment} />
                    <CommentList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </VStack>

            </Page>

        </DynamicModuleLoader>

    );
});

export default ArticleDetailsPage;
