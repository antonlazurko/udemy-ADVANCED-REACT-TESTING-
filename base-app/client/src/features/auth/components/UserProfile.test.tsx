import { render, screen } from '@testing-library/react';
import {UserProfile} from './UserProfile';

test('greetings', () => {
    render(<UserProfile />);
    expect(screen.getAllByText(/hi/i)).toBeInTheDocument();
});