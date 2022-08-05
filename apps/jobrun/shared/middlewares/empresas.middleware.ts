import fetch from 'isomorphic-unfetch';
import DOMPurify from 'isomorphic-dompurify';

import { IEmpresa, IOferta } from '../models';

const ENDPOINT = '/api/empresas';

export const getEmpresas = async ({ query = '' }: { query: string }): Promise<{ data: IEmpresa[]; isError: boolean }> => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}${query}`)
    .then((response) => response.json())
    .then((response) => {
      if (response?.data?.length > 0)
        response?.data?.forEach((empresa: IEmpresa) => {
          empresa.descripcion = DOMPurify.sanitize(empresa.descripcion || '');

          empresa.ofertas?.forEach((oferta: IOferta) => {
            oferta.descripcion = DOMPurify.sanitize(oferta.descripcion || '');
          });
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

export const getEmpresa = async ({ slug }: { slug: string }): Promise<{ data?: IEmpresa; isError: boolean }> => {
  if (!slug) return Promise.resolve({ data: undefined, isError: true });

  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}/${slug}`)
    .then((response) => response.json())
    .then((response) => {
      if (!!response?.data?.id) {
        response.data.descripcion = DOMPurify.sanitize(response.data.descripcion || '');

        response.data.ofertas?.forEach((oferta: IOferta) => {
          oferta.descripcion = DOMPurify.sanitize(oferta.descripcion || '');
        });
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
