import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação");
    return;
  }
  // small faz parte da documentação do qr, no nosso caso estamos dizendo que o small é o 2, então quando for 2, gerara o qrcode no terminal
  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("QR Code gerado com sucesso!"));
    console.log(qrcode);
  });
}

export { handle };
