# Mask Validation BR 🇧🇷

**Mask Validation BR** é uma biblioteca em Typescript leve e eficiente para mascaramento e validação de dados brasileiros. Inclui suporte para validação de números de celular, CPF, CNPJ e CEP, oferecendo também funcionalidades de formatação e validação regional de números de celular com base no DDD.

## Recursos
- **Máscara e validação de celular** (com validação de DDD)
- **Máscara e validação de CPF**
- **Máscara e validação de CNPJ**
- **Máscara e validação de CEP**
- Implementa o design pattern **Strategy** para flexibilidade nas validações
- Sem dependências externas

## Instalação
Instale a biblioteca via npm:
```bash
npm install mask-validation-br
```
## Uso
```js
import { Validator, Masker } from "mask-validation-br";

const CPF = '12345678909';
const CNPJ = '12345678000195'
const phoneNumber = '11987654321'
const CEP = '12345678'

Masker.cpf(CPF) // Saída: 123.456.789-09
Validator.cpf(CPF) // True or False

Masker.cnpj(CNPJ)
Validator.cnpj(CNPJ)

Masker.phone(phoneNumber)
Validator.phone(phoneNumber)

Masker.cep(CEP)
Validator.cep(CEP)
```

## Teste por CLI
Uso: npx mask-validation-br <tipo> <valor>
Tipos suportados: celular, cpf, cnpj, cep

### Ex
```bash
npx mask-validation-br cpf 12345678900
```

## DDDs Listados
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

## Licença

Este projeto está licenciado sob a [MIT](https://github.com/Guh-paixao/Portifolio/blob/master/LICENSE).

## Contato

Sinta-se à vontade para entrar em contato:

- Gustavo Paixão
- gustavopaixao.dev@gmail.com