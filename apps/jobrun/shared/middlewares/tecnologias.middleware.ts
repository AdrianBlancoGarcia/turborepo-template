import fetch from 'isomorphic-unfetch';

import { ITecnologia } from '../models';

const ENDPOINT = '/api/tecnologias';

export const getTecnologias = async (): Promise<{ data: ITecnologia[]; isError: boolean }> => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}`)
    .then((response) => response.json())
    .catch((error) => ({ isError: true, error }));

  let isError: boolean = response?.isError;

  return {
    data: !isError ? response?.data?.data : [],
    isError: isError,
  };
};
