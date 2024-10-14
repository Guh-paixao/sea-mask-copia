import { BaseValidation } from './base/BaseValidation';

export class PhoneValidation implements BaseValidation {
    private validDDD: number[] = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, // São Paulo
        21, 22, 24,                         // Rio de Janeiro
        27, 28,                             // Espírito Santo
        31, 32, 33, 34, 35, 37, 38,         // Minas Gerais
        41, 42, 43, 44, 45, 46,             // Paraná
        47, 48, 49,                         // Santa Catarina
        51, 53, 54, 55,                     // Rio Grande do Sul
        61,                                 // Distrito Federal
        62, 64,                             // Goiás
        63,                                 // Tocantins
        65, 66,                             // Mato Grosso
        67,                                 // Mato Grosso do Sul
        68,                                 // Acre
        69,                                 // Rondônia
        71, 73, 74, 75, 77,                 // Bahia
        79,                                 // Sergipe
        81, 82,                             // Pernambuco, Alagoas
        83,                                 // Paraíba
        84,                                 // Rio Grande do Norte
        85, 88,                             // Ceará
        86, 89,                             // Piauí
        91, 92, 93, 94, 95, 96, 97, 98, 99  // Norte (Amazonas, Pará, etc.)
    ];

    isValid(value: string): boolean {
        const phone = value.replace(/\D/g, '');

        if (phone.length !== 10 && phone.length !== 11) return false; // 10 dígitos (fixo) ou 11 dígitos (com DDD e 9 na frente)

        const ddd = parseInt(phone.substring(0, 2));

        if (!this.validDDD.includes(ddd)) return false;

        if (phone.length === 11 && phone[2] !== '9') return false;

        return true;
    }
}
