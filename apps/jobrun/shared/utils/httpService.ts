import { EXPERIENCIAENUM, EXPERIENCIAVIEWENUM, ICategoria, ITecnologia, REGIONENUM, REGIONVIEWENUM } from '../models';

const regionFilter = [
  { label: REGIONVIEWENUM.LATAM, value: REGIONENUM.LATAM },
  { label: REGIONVIEWENUM.EUROPA, value: REGIONENUM.EUROPA },
];

const experienciaFilter = [
  { label: 'Sin experiencia', value: EXPERIENCIAENUM.JUNIOR },
  { label: 'Junior', value: EXPERIENCIAENUM.SEMISENIOR },
  { label: 'Senior', value: EXPERIENCIAENUM.SENIOR },
];

export const getQueryOfertas = (filtros: any) => {
  let queryRemote = filtros?.remote ? 'presencialidad=remoto' : '';
  let queryRegion = filtros?.region ? `region=${filtros?.region}` : '';
  let queryPuesto = filtros?.puesto ? `categoria=${filtros?.puesto}` : '';
  let queryTecnologia = filtros?.tecnologia ? `tecnologias=${filtros?.tecnologia}` : '';
  let queryExperiencia = filtros?.experiencia ? `experiencia=${treatExperienciaFilter(filtros?.experiencia)}` : '';

  let queryRemoteUrl = filtros?.remote ? 'remoto' : '';
  let queryRegionUrl = filtros?.region ? filtros?.region : '';
  let queryExperienciaUrl = filtros?.experiencia ? filtros?.experiencia : '';
  let queryPuestoUrl = filtros?.puestoSlug ? filtros?.puestoSlug : '';
  let queryTecnologiaUrl = filtros?.tecnologiaSlug ? filtros?.tecnologiaSlug : '';

  let query =
    (filtros ? '?' : '') +
    queryRemote +
    (queryRemote === '' ? '' : '&') +
    queryRegion +
    (queryRegion === '' ? '' : '&') +
    queryExperiencia +
    (queryExperiencia === '' ? '' : '&') +
    queryPuesto +
    (queryPuesto === '' ? '' : '&') +
    queryTecnologia;

  let queryUrl =
    (filtros ? '/' : '') +
    queryRemoteUrl +
    (queryRemoteUrl === '' ? '' : '/') +
    queryRegionUrl +
    (queryRegionUrl === '' ? '' : '/') +
    queryPuestoUrl +
    (queryPuestoUrl === '' ? '' : '/') +
    queryExperienciaUrl +
    (queryExperienciaUrl === '' ? '' : '/') +
    queryTecnologiaUrl;

  return {
    query: !(queryTecnologia === '') ? query : query.slice(0, query.length - 1),
    queryUrl: !(queryTecnologia === '') ? queryUrl : queryUrl.slice(0, query.length - 1),
  };
};

const treatExperienciaFilter = (experiencia: EXPERIENCIAENUM) => {
  const replaceChars = (chars: string) => (chars || '').replaceAll('+', '%2B').replaceAll(' ', '%20').replaceAll('ñ', '%C3%B1');

  switch (experiencia) {
    case EXPERIENCIAENUM.JUNIOR:
      return replaceChars(EXPERIENCIAVIEWENUM.JUNIOR);
    case EXPERIENCIAENUM.SEMISENIOR:
      return replaceChars(EXPERIENCIAVIEWENUM.SEMISENIOR);
    case EXPERIENCIAENUM.SENIOR:
      return replaceChars(EXPERIENCIAVIEWENUM.SENIOR);
  }
};

export const getParamsOfertas = ({
  params,
  categorias = [],
  tecnologias = [],
}: {
  params: any;
  categorias: ICategoria[];
  tecnologias: ITecnologia[];
}) => {
  let filtros: any = {};

  params?.forEach((value: string, i: number) => {
    if (value === 'remoto') filtros['remote'] = true;

    regionFilter?.forEach((region: any) => {
      if (value === region?.value) {
        filtros['region'] = region?.value;
        filtros['regionLabel'] = region?.label;
      }
    });

    categorias?.forEach((categoria: ICategoria) => {
      if (value === categoria?.slug && categoria?.slug !== 'remoto') {
        filtros['puesto'] = categoria?.id;
        filtros['puestoLabel'] = categoria?.nombre;
        filtros['puestoSlug'] = categoria?.slug;
      }
    });

    experienciaFilter?.forEach((experiencia: any) => {
      if (value === experiencia?.value) {
        filtros['experiencia'] = experiencia?.value;
        filtros['experienciaLabel'] = experiencia?.label;
      }
    });

    tecnologias?.forEach((tecnologia: ITecnologia) => {
      if (value === tecnologia?.slug) {
        filtros['tecnologia'] = tecnologia?.id;
        filtros['tecnologiaSlug'] = tecnologia?.slug;
        filtros['tecnologiaLabel'] = tecnologia?.nombre;
      }
    });
  });

  return {
    filtros: filtros,
  };
};
