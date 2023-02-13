import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwither } from 'shared/ui/ThemeSwither';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
export default Sidebar;
