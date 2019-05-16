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