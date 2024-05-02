import prompt from "prompt";
import chalk from "chalk";

import { promptSchemaMain } from "./prompts-schema/prompt-schema-main.js";
import { createQRCode } from "./services/qr-code/createQrcode.js";
import { createPassword } from "./services/password/createPassword.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choice) => {
    console.log(err);
    if (choice.select == 1) await createQRCode();
    if (choice.select == 2) await createPassword();
  });

  prompt.start();
}

main();
