import { ApiItem, ApiFile, IIcono } from './_common.model';

export interface ICategoria extends ApiItem {
  slug: string;
  nombre: string;
  fondo?: ApiFile;

  iconoId: number;
  icono?: IIcono;
}
