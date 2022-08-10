import { ParsedUrlQuery } from 'querystring';

const checkIfIsAdwords = (query: ParsedUrlQuery) => {
  let campanya = query?.campanya,
    palabraClave = query?.palabraClave,
    grupo = query?.grupo;

  return !!campanya && !!palabraClave && !!grupo;
};

export { checkIfIsAdwords };
