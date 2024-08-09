import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;

}

type DropDownDirection = 'top' | 'bottom'

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T)=> void;
    readonly?: boolean;
    label?: string;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListbox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option key={item.value} value={item.value} as={Fragment} disabled={item.disabled}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    }, [])}
                                >
                                    {selected && '*'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
