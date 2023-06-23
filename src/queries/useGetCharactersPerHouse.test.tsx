import { renderHook } from '@testing-library/react-hooks'

import {HouseNames} from 'types'
import {server} from '../server';
import Providers from '../__mocks__/providers/Providers';
import {useGetCharactersPerHouse} from './useGetCharactersPerHouse';

function setup({ house = 'gryffindor' }: { house?:HouseNames } = {}) {
  return renderHook(() => useGetCharactersPerHouse(house), {
    wrapper: Providers
  });
}

describe('useGetCharactersPerHouse', () => {

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should return a valid list of characters', async () => {
    const { result, waitFor } = setup();

    expect(result.current.status).toBe('loading');

    await waitFor(() => {
      expect(result.current.status).toBe('success');
    });

    expect(result.current.data?.length).toBe(2);
  });

  it('should return an error state', async () => {
    const {result, waitFor } = setup({house: 'slytherin' });

    expect(result.current.status).toBe('loading');

    await waitFor(() => {
      expect(result.current.status).toBe('error');
    });

    expect((result.current.error as any).response.data.errorMessage).toBe('ups');
  });
})

