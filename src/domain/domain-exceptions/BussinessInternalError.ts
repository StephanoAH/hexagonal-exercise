export class BussinessInternalError extends Error {
  constructor() {
    super('Error interno del negocio');
    this.name = 'Error interno del negocio';
  }
}