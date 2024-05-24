import chalk from "chalk";
import prompt from "prompt";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCODE")
    },
    {
        name:"type",
        description: chalk.yellow("Escolha entre os tipos de QRCODE: (1- NORMAL ou (2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default promptQRCode;