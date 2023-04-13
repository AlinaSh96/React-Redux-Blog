import {
    memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const TypeTabs = useMemo<TabsItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabsItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={TypeTabs}
            className={classNames('', {}, [className])}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
