import { CpfMask } from "./masks/CPF_Mask";
import { CnpjMask } from "./masks/CNPJ_Mask";
import { CepMask } from "./masks/CEP_Mask";
import { PhoneMask } from "./masks/Phone_Mask";

import { CpfValidation } from "./validations/CPF_Validation";
import { CnpjValidation } from "./validations/CNPJ_Validation";
import { CepValidation } from "./validations/CEP_Validation";
import { PhoneValidation } from "./validations/Phone_Validation";

export const Masker = {
    cpf: (value: string) => new CpfMask().applyMask(value),
    cnpj: (value: string) => new CnpjMask().applyMask(value),
    cep: (value: string) => new CepMask().applyMask(value),
    phone: (value: string) => new PhoneMask().applyMask(value)
};

export const Validator = {
    cpf: (value: string) => new CpfValidation().isValid(value),
    cnpj: (value: string) => new CnpjValidation().isValid(value),
    cep: (value: string) => new CepValidation().isValid(value),
    phone: (value: string) => new PhoneValidation().isValid(value)
};
