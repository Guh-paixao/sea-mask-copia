#!/usr/bin/env node
import { Masker, Validator } from ".";


const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Uso: mascara-validador <tipo> <valor>");
    console.log("Tipos suportados: celular, cpf, cnpj, cep");
    process.exit(1);
}

const [tipo, valor] = args;


switch (tipo as string) {
    case "celular":
        console.log("Mascarado:", Masker.phone(valor));
        console.log("Valido:", Validator.phone(valor) ? "Sim" : "Não");
        break;
    case "cpf":
        console.log("Mascarado:", Masker.cpf(valor));
        console.log("Valido:", Validator.cpf(valor) ? "Sim" : "Não");
        break;
    case "cnpj":
        console.log("Mascarado:", Masker.cnpj(valor));
        console.log("Valido:", Validator.cnpj(valor) ? "Sim" : "Não");
        break;
    case "cep":
        console.log("Mascarado:", Masker.cep(valor));
        console.log("Valido:", Validator.cep(valor) ? "Sim" : "Não");
        break;
    default:
        console.error("Tipo inválido. Use: celular, cpf, cnpj, cep");
}