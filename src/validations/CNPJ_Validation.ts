import { BaseValidation } from './base/BaseValidation';

export class CnpjValidation implements BaseValidation {
    isValid(value: string): boolean {
        const cnpj = value.replace(/\D/g, '');

        if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false; // Números repetidos = false

        const validDigits = (cnpj: string, length: number) => {
            const numbers = cnpj.substring(0, length);
            let sum = 0;
            let pos = length - 7;
            for (let i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i)) * pos--;
                if (pos < 2) pos = 9;
            }
            const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
            return result === parseInt(cnpj.charAt(length));
        };

        return validDigits(cnpj, 12) && validDigits(cnpj, 13);
    }
}
