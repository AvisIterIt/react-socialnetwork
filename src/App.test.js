import SamuraiJSApp from './App';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<SamuraiJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import { createRoot } from 'react-dom/client';

// test('renders without crashing', () => {
//     const container = document.createElement('div');
//     const root = createRoot(container); 
//     root.render(<SamuraiJSApp tab="home" />);
//     root.unmount();
// });
