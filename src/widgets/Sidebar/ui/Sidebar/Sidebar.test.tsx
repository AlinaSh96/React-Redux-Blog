import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from
    'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from '../Sidebar/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
