import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwither } from 'shared/ui/ThemeSwither';
import { useTranslation } from 'react-i18next';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('main');
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('Перекоючатель', { ns: 'translation' })}
            </button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
export default Sidebar;
