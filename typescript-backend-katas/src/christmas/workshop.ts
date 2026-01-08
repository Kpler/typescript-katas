export class Gift {

  private id: string;
  private name: string;
  private recipient: string;
  private weight: number;

  constructor(weight: number, recipient: string, name: string, ) {
    this.id = 'asd';
    this.name = name;
    this.recipient = recipient;
    this.weight = weight;
  }

  public getId() {
    return this.id;
  }
  
  public getName() {
    return this.name;
  }

  public getWeight() {
    return this.weight;
  }

  public getRecipient() {
    return this.recipient;
  }
}