import { Request, Response } from "express";
import MailService from "../services/MailService";

const users = [
  {
    name: "Lucas",
    mail: "lucas@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.send(users);
  },

  async Mail(req: Request, res: Response) {
    const mailService = new MailService();

    mailService.sendFakeMail({
      to: {
        name: "Lucas",
        mail: "lucas@emailfake.com.br",
      },
      message: {
        subject: "Aprendendo Typescript",
        body: "O Typescript basicamente reúne tudo o que o Javascript já possui e adiciona algumas outras funcionalidades, dentre elas, a tipagem é a mais importante, pois ajuda a tornar as aplicações mais escaláveis e de fácil manutenção",
        attachment: [],
      },
    });
    return res.send("E-mail enviado!");
  },
};
