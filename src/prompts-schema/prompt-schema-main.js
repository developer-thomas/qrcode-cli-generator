import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold("Selecione uma opção (1 - QRCODE) ou (2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Selecione 1 ou 2"),
    required: true,
  },
];

export { promptSchemaMain };
