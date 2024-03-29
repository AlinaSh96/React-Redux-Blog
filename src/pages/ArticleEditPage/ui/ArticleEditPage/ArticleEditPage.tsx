import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? `Редактировать статью с ID = ${id}`
                : 'Создать новую статью'}
        </Page>
    );
};

export default ArticleEditPage;
