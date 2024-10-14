import { BaseValidation } from './base/BaseValidation';

export class CepValidation implements BaseValidation {
    isValid(value: string): boolean {
        const cep = value.replace(/\D/g, '');

        if (cep.length !== 8) return false;

        const cepRegex = /^[0-9]{8}$/;
        return cepRegex.test(cep);
    }
}
