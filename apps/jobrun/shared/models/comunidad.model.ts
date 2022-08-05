import { ApiItem } from "./_common.model";

export interface IComunidad extends ApiItem {
    paisId?: number;
    nombre?: string;
  }
  
  export interface IPais extends ApiItem {
    bandera?: string;
    nombre?: string;
  }