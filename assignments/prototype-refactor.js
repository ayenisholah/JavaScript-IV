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
        this.healthPoints = charAttributes.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage`;
    }
}