export class Hero {
    static nextId = 0;
    static herors: Hero[] = [
        new Hero(0, 'Hercules', 'happy',),
        new Hero(1, 'Dr Nice', 'happy'),
        new Hero(2, 'Narco', 'sad'),
        new Hero(3, 'Windstorm', 'confused'),
        new Hero(4, 'Magneta')
    ];
    constructor(
        public id = Hero.nextId++,
        public name?: string,
        public emotion?: string,
        public birthdate?: Date,
        public url?: string,
        public rate = 100,
    ) { }

    clone(): Hero {
        return Object.assign(new Hero(), this);
    }
}
