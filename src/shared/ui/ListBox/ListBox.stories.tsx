import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '22',
    items: [
        {
            content: '1ddd23',
            value: '123',
        },
        {
            content: '1ddd243',
            value: '1234',
        },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: '22',
    items: [
        {
            content: '1ddd23',
            value: '123',
        },
        {
            content: '1ddd243',
            value: '1234',
        },
    ],
    direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
    value: '22',
    items: [
        {
            content: '1ddd23',
            value: '123',
        },
        {
            content: '1ddd243',
            value: '1234',
        },
    ],
    direction: 'top right',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: '22',
    items: [
        {
            content: '1ddd23',
            value: '123',
        },
        {
            content: '1ddd243',
            value: '1234',
        },
    ],
    direction: 'bottom right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: '22',
    items: [
        {
            content: '1ddd23',
            value: '123',
        },
        {
            content: '1ddd243',
            value: '1234',
        },
    ],
    direction: 'bottom left',
};
