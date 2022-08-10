import { IEspecialidad } from './especialidades.model';
import { ApiItem, ApiFile } from './_common.model';

export interface ICurso extends ApiItem {
  titulo?: string;
  descripcion?: string;
  imagen?: ApiFile;
  h1?: string;
  h2?: string;
  keyword?: string;
  slug?: string;
  descripcionCorta: any;
  descripcionLarga: any;
  metaTitulo?: string;
  metaDescripcion?: string;

  rutaId?: number;

  icono?: string;
  publicado?: boolean;
  especialidades?: IEspecialidad[];
  modulos?: IModulo[];

  meta?: {
    duracion?: number;
  };
}

export interface ILeccion extends ApiItem {
  titulo?: string;
  descripcion?: string;
  videoUrl?: string;
  h1?: string;
  h2?: string;
  keyword?: string;
  slug?: string;
  descripcionCorta: any;
  descripcionLarga: any;
  metaTitulo?: string;
  metaDescripcion?: string;
  moduloId?: number;

  duracion?: number;
  publicado?: boolean;
  landing?: boolean;
}

export interface IModulo extends ApiItem {
  titulo?: string;
  publicado?: boolean;
  cursoId: number;

  lecciones?: ILeccion[];
}
