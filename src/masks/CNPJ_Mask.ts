import { BaseMask } from './base/BaseMask';

export class CnpjMask implements BaseMask {
    applyMask(value: string): string {
        const digits = value.replace(/\D/g, '');


        if (digits.length > 12) {
            return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})$/, '$1.$2.$3/$4-$5');
        } else if (digits.length > 8) {
            return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4})$/, '$1.$2.$3/$4');
        } else if (digits.length > 5) {
            return digits.replace(/^(\d{2})(\d{3})(\d{0,3})$/, '$1.$2.$3');
        } else if (digits.length > 2) {
            return digits.replace(/^(\d{2})(\d{0,3})$/, '$1.$2');
        } else if (digits.length > 0) {
            return digits.replace(/^(\d{0,2})$/, '$1');
        }
        return value;
    }
}
