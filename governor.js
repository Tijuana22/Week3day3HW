class Person {
    constructor (name, age, hairColor){
    this.name = name;
    this.age =age;
    this.hairColor = hairColor;
    }
     
    name(){
        return `this person name is ${this.name}`
    }
    age(){
        return `this person age is ${this.age}`
    }
    hairColor(){
        return `this person haircolor is ${this.hairColor}`
      
    }
}   



class Governor extends Person{
    static state = 'North Carolina';
    constructor (name, age, hairColor, party, gender ){
        super(name, age, hairColor)

        this.party = party;
        this.gender = gender;
    }
    partyPolitical (){
        return `${this.name}'s home is  ${this.state}`
    }
    from (){
        return `${this.name}'s home is  ${this.state}`
        
    }    
    
    // gender(){    
    //     return `${this.name}'s home is  ${this.gender}`
    // }
    greeting () {
    return `Vote ${this.name} if you're looking for a change!`;
    }
    campaignGreeting () {
        return 'Your vote is your voice!';
    }

}


class PostalWorker extends Person{
    
    deliver(){
        return `${this.name} had delivered your mail`
    }
    runFromDog(){
        return `Please get your dog before he gets me!`
        
    }    
    

}


class Chef extends Person{
    
    cooks(){
        return `${this.name} has prepared a wonderful dish.`
    }
    clean(){
        return `${this.name} cleans up their mess.`
        
    }    
    

}

let postalworker1 = new PostalWorker('John', 26, 'black');
console.log(postalworker1, postalworker1.deliver(), postalworker1.runFromDog());

let postalworker2 = new PostalWorker('Bill', 55, 'blonde');
console.log(postalworker2, postalworker2.deliver(), postalworker2.runFromDog());


let chef1 = new Chef('Mike', 25, 'purple');
console.log(chef1, chef1.cooks(), chef1.clean());

let chef2 = new Chef('Bill', 36, 'brown');
console.log(chef2, chef2.cooks(), chef2.clean());


let governor = new Governor('George', 65, 'dark brown','Democrat', 'male');
console.log(governor, governor.partyPolitical(), governor.from, Governor.state, governor.greeting, governor.campaignGreeting());