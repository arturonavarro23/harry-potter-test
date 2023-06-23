import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: Infinity,
      cacheTime: 0,
    }
  }
});

const QueryClientProviderMock = ({ children}: { children: React.ReactNode}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

export default QueryClientProviderMock;
