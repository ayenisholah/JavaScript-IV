class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game`;
    }
}

class CharacterStats extends GameObject {
    constructor(attributes){
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage`;
    }
}

class Humanoid extends CharacterStats {
    constructor(attributes){
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}