import fetch from 'isomorphic-unfetch';

import { extractQuery } from '../utils/http_helpers';
import { IFaq, PropsByQuery } from '../models';

const ENDPOINT = '/api/faqs';

/**
 * @param query enviada desde getStaticProps
 * @returns JSON de faqs (Preguntas y respuestas)
 */
export const getFaqs = async ({ query = [] }: PropsByQuery): Promise<{ data: IFaq[]; isError: boolean }> => {
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
