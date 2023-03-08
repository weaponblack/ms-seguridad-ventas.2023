import {Model, model, property} from '@loopback/repository';

@model()
export class FactorDeAutenticacionPorcodigo extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuarioid: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo2fa: string;


  constructor(data?: Partial<FactorDeAutenticacionPorcodigo>) {
    super(data);
  }
}

export interface FactorDeAutenticacionPorcodigoRelations {
  // describe navigational properties here
}

export type FactorDeAutenticacionPorcodigoWithRelations = FactorDeAutenticacionPorcodigo & FactorDeAutenticacionPorcodigoRelations;
