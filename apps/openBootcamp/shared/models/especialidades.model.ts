import { ApiItem } from './_common.model';

export interface IEspecialidad extends ApiItem {
  nombre?: string;

  meta?: {
    cursoId?: string;
    especialidadId?: string;
  };
}
