import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
   className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly
                        ? (
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme={ThemeButton.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
