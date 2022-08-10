import fetch from 'isomorphic-unfetch';

import { extractQuery } from '../utils/http_helpers';
import { ICurso } from '../models/cursos.model';
import { PropsByQuery, PropsBySlug } from '../models/_common.model';

const ENDPOINT = '/api/cursos';

/**
 * @returns JSON con todos los cursos disponibles
 */
export const getCursos = async ({ query = [] }: PropsByQuery): Promise<{ data: ICurso[]; isError: boolean }> => {
  let [queryTxt, errors] = extractQuery(query);

  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}${queryTxt}`)
    .then((response) => response.json())
    .catch((error) => ({ isError: true, error }));

  // TODO Mejorar con Ivan't gestión de errores
  let isError: boolean = response?.isError;

  return {
    data: !isError ? response : [],
    isError: isError,
  };
};

/**
 *
 * @param slug del curso y query enviada desde getStaticProps
 * @returns JSON con la información de un único curso
 */
export const getCurso = async ({ slug, query = [] }: PropsBySlug): Promise<{ data?: ICurso; isError: boolean }> => {
  let [queryTxt, errors] = extractQuery(query);

  if (!slug) return Promise.resolve({ data: undefined, isError: true });

  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINT}/${slug}${queryTxt}`)
    .then((response) => response.json())
    .catch((error) => ({ isError: true, error }));

  // TODO Mejorar con Ivan't gestión de errores
  let isError: boolean = response?.isError;

  return {
    data: !isError ? response : undefined,
    isError: isError,
  };
};