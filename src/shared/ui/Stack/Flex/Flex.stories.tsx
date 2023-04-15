import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    direction: 'column',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '32',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '4',
    direction: 'column',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '8',
    direction: 'column',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '16',
    direction: 'column',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    gap: '32',
    direction: 'column',
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    align: 'center',
    direction: 'column',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    align: 'end',
    direction: 'column',
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    children: (
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>
    ),
    align: 'start',
    direction: 'column',
};
