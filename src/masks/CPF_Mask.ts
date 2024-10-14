import { BaseMask } from "./base/BaseMask";

export class CpfMask implements BaseMask {
    applyMask(value: string): string {
        const digits = value.replace(/\D/g, '');

        if (digits.length > 9) {
            return digits.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})$/, '$1.$2.$3-$4');
        } else if (digits.length > 6) {
            return digits.replace(/^(\d{3})(\d{3})(\d{0,3})$/, '$1.$2.$3');
        } else if (digits.length > 3) {
            return digits.replace(/^(\d{3})(\d{0,3})$/, '$1.$2');
        } else if (digits.length > 0) {
            return digits.replace(/^(\d{0,3})$/, '$1');
        }
        return value;
    }
}
