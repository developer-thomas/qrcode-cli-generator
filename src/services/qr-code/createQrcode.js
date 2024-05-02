import prompt from "prompt";
import { promptSchemaQrcode } from "../../prompts-schema/prompt-schema-qrcode.js";
import { handle } from "./handleQrcode.js";

async function createQRCode() {
  prompt.get(promptSchemaQrcode, handle);
  prompt.start();
}

export { createQRCode };
