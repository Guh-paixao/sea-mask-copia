import { BaseMask } from './base/BaseMask';

export class PhoneMask implements BaseMask {
    applyMask(value: string): string {
        const digits = value.replace(/\D/g, '');


        if (digits.length > 10) {
            return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (digits.length > 5) {
            return digits.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
        } else if (digits.length > 2) {
            return digits.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
        } else if (digits.length > 0) {
            return digits.replace(/^(\d{0,2})$/, '($1');
        }
        return value;
    }
}
