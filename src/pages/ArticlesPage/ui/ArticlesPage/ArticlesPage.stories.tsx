import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlePage from './ArticlesPage';

export default {
    title: 'pages/ArticlePage/ArticlePage',
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
