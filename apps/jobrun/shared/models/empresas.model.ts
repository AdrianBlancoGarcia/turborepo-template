import { IComunidad, IPais } from "./comunidad.model";
import { IOferta } from "./ofertas.model";
import { ApiFile, ApiItem, IIcono } from "./_common.model";

export interface IEmpresa extends ApiItem {
    slug: string;
    nombre: string;
    descripcion: string;
  
    paisId: number;
    pais: IPais;
    comunidadId: number;
    comunidad: IComunidad;
  
    userId?: number;
    user?: any; //TODO: PREGUNTAR A AMDEVELOP POR LA ENTIDAD USER
  
    url?: string;
    email?: string;
    imagen?: ApiFile;
    numEmpleados?: number;
    enlaceTwitter?: string;
    enlaceBehance?: string;
    enlaceLinkedin?: string;
  
    valores?: IValor[];
    creacion?: number;
    ofertas?: IOferta[];
  }

  export interface IValor extends ApiItem {
    nombre?: string;
  
    iconoId: number;
    icono?: IIcono;
  }