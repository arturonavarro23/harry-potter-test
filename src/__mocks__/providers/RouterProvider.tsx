import { MemoryRouter } from 'react-router-dom';

export const RouterProvider = ({ children}: { children: React.ReactNode}) => {
  return <MemoryRouter>{children}</MemoryRouter>
};

export default RouterProvider;
