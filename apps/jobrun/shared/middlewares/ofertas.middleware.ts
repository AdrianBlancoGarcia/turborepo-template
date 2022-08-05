import fetch from 'isomorphic-unfetch';
import DOMPurify from 'isomorphic-dompurify';

import { IOferta } from '../models';

const ENDPOINT = '/api/ofertas';

export const getOfertas = async ({ query = '' }: { query?: string }): Promise<{ data: IOferta[]; isError: boolean }> => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}${query}`)
    .then((response) => response?.json())
    .then((response) => {
      if (response?.data?.data?.length > 0)
        response?.data?.data?.forEach((oferta: IOferta) => {
          oferta.descripcion = DOMPurify.sanitize(oferta.descripcion || '');
        });

      return response;
    })
    .catch((error) => ({ isError: true, error }));

  let isError: boolean = response?.isError;

  return {
    data: !isError ? response?.data?.data : [],
    isError: isError,
  };
};

export const getOferta = async ({ slug }: { slug: string }): Promise<{ data?: IOferta; isError: boolean }> => {
  if (!slug) return Promise.resolve({ data: undefined, isError: true });

  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}/${slug}`)
    .then((response) => response.json())
    .then((response) => {
      if (!!response?.data?.id) {
        response.data.descripcion = DOMPurify.sanitize(response.data.descripcion || '');
      }

      return response;
    })
    .catch((error) => ({ isError: true, error }));

  let isError: boolean = response?.isError;

  return {
    data: !isError ? response?.data : undefined,
    isError: isError,
  };
};
