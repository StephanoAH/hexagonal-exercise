/* eslint-disable class-methods-use-this */
import { IValidation } from '@commons/application/IValidation';
import { injectable } from 'inversify';

export type ValidateTitleOfNewsNotEmptyType = {
    title: string
}

@injectable()
export class ValidateTitleOfNewsNotEmpty implements IValidation<ValidateTitleOfNewsNotEmptyType> {
  validate(params: ValidateTitleOfNewsNotEmptyType): boolean {
    if (params.title != null && params.title.trim() !== '') {
      return true;
    }
    return false;
  }
}

