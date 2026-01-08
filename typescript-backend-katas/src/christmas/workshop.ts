export class Gift {

  private id: string;
  private name: string;
  private recipient: string;
  private weight: number;

  constructor(weight: number, recipient: string, name: string, ) {
    this.id = Math.random().toString(10);
    this.name = name;
    this.recipient = recipient;
    if(weight < 0) {
        throw new Error('Weight cannot be negative!');
    }
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

export class Workshop {
    private gifts: Gift[];
    constructor(){
        this.gifts = [];
    }

    public getGiftCount(): Number {
        return this.gifts.length
    }

    public addGift(gift: Gift) {
        this.gifts.push(gift)
    }

    public getGiftByRecipient(_rec: String) {
        return this.gifts[0]
    }
}
