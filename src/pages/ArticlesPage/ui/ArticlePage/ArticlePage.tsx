import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
   className?: string;
}

const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articlePage, {}, [className])}>
            ARTICLE PAGE
        </div>
    );
};

export default memo(ArticlePage);
