export class Fighter {
    constructor(public readonly id: number,
        public readonly firstname: string,
        public readonly lastname?: string,
        public readonly country?: string | null
    ){}
}
