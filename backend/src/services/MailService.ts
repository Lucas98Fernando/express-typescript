// Quando temos um parâmetro que recebe um objeto, podemos criar uma interface para definir os tipos de cada argumento que será recebido
interface IMailTo {
  name: string;
  mail: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>; // Um array de strings opcional
}

interface IMail {
  to: IMailTo;
  message: IMailMessage;
}

// Definindo padrões que a classe MailService obrigatoriamente precisa seguir
interface IMailService {
  sendFakeMail(request: IMail): void;
}

class MailService implements IMailService {
  // Parâmetros nomeados
  sendFakeMail({ to, message }: IMail) {
    console.log(`Email enviado para: ${to.name}: ${message.body}`);
  }
}

export default MailService;
