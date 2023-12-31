import Ticket from "../../Domain/Ticket";

export class Reply {
  private constructor(
    readonly id: string,
    readonly subject: string,
    readonly description: string,
    readonly errormessage: string
  ) {}

  static fromDomain(ticket: Ticket,errormessage: string) {
    const { id, subject, description } = ticket.properties;
    return new Reply(id, subject, description, errormessage);
  }
  static fromError(errormessage: string) {
    return new Reply(null, null, null, errormessage);
  }
  }
}
