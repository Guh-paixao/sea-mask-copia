import { BaseMask } from './base/BaseMask';

export class CepMask implements BaseMask {
    applyMask(value: string): string {
        const digits = value.replace(/\D/g, '');

        if (digits.length > 5) {
            return digits.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
        } else if (digits.length > 0) {
            return digits.replace(/^(\d{0,5})$/, '$1');
        }
        return value;
    }
}
