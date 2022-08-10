import { ApiItem } from './_common.model';

export interface IFaq extends ApiItem {
  orden: string;

  pregunta: string;
  respuesta: string;
  isLarge: boolean;
}
