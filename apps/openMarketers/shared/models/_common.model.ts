export interface ApiItem {
  id?: number;
  createdAt?: any;
  updatedAt?: any;

  meta?: any;
}

export interface ApiFile {
  url: string;
  name: string;
  extname: 'jpg' | 'png' | string;
  size: number;
  mimeType: 'image/jpeg' | 'image/png' | string;
}

export type PropsBySlug = {
  /** ID del objeto a solicitar */
  slug: string;
  /** Parámetros adicionales de la petición, a modo de listado de objetos.
   * Por cada objeto, la key es el nombre del parámetro y el valor, su valor. */
  query?: any[];
  /** Estrategia de carga sobre la query
  1. Invalidate on undefined: Cancelamos la petición si un valor de la query es indefinido, null o 0.
  2. Aceptamos todo tipo de valores. Nunca cancelamos la petición. */
  strategy?: 'invalidate-on-undefined' | 'accept-all';
};

export type PropsByQuery = {
  /** Parámetros adicionales de la petición, a modo de listado de objetos.
   * Por cada objeto, la key es el nombre del parámetro y el valor, su valor.
   */
  query?: any[];
  /** Estrategia de carga sobre la query
  1. Invalidate on undefined: Cancelamos la petición si un valor de la query es indefinido, null o 0.
  2. Aceptamos todo tipo de valores. Nunca cancelamos la petición. */
  strategy?: 'invalidate-on-undefined' | 'accept-all';
};
