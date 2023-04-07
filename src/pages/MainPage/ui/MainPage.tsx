import { Counter } from 'entities/Counter';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница', { ns: 'main' })}
        </Page>
    );
});

export default MainPage;
