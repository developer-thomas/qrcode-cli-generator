import chalk from "chalk";

const promptSchemaQrcode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha o tipo: 1 - Imagem | 2 - Terminal"),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold("Escolha 1 ou 2"),
    required: true,
  },
];

export { promptSchemaQrcode };
