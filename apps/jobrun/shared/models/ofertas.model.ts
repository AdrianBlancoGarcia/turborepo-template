import { IEmpresa } from './empresas.model';
import { ICategoria } from './categoria.model';
import { ApiItem, IIcono } from './_common.model';
import { IComunidad, IPais } from './comunidad.model';

import { ESTADOENUM, EXPERIENCIAVIEWENUM, JORNADAENUM, PRESENCIALIDADENUM, REGIONENUM } from './enums/ofertas.enum';

export interface IOferta extends ApiItem {
  nombre: string;
  descripcion: string;

  slug: string;
  destacado: boolean;

  paisId: number;
  pais: IPais;
  comunidadId: number;
  comunidad: IComunidad;
  categoriaId: number;
  categoria: ICategoria;

  region: REGIONENUM;
  estado?: ESTADOENUM;
  jornada: JORNADAENUM;
  experiencia: EXPERIENCIAVIEWENUM;
  presencialidad: PRESENCIALIDADENUM;

  vacantes?: number;
  publicada?: boolean;
  salarioMin?: number;
  salarioMax?: number;
  requisitos?: string;
  requisitosArray?: string[];
  idiomas?: IIdioma[];
  beneficios?: IBeneficio[];
  tecnologias?: ITecnologia[];

  empresaId: number;
  empresa: IEmpresa;
}

export interface ITecnologia extends ApiItem {
  slug: string;
  nombre: string;

  iconoId: number;
  icono?: IIcono;
}

export interface IIdioma extends ApiItem {
  nombre: string;

  iconoId: number;
  icono?: IIcono;
}

export interface IBeneficio extends ApiItem {
  nombre: string;
  descripcion: string;

  iconoId: number;
  icono?: IIcono;
}
