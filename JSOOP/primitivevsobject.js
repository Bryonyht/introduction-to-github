let x = 10
let y = x

x = 20 // this will change x but not y! they are independant. Primitive copy the value into the new variable. 

let k = {
    value: 10,
}

let j = k

k.value = 20 // this will also change j.value to 20
                // an object is not truly stored in a variable, only the address of where the object is stored in memory 
                // is stored in the variable. So when we set j=k we point j to the same place in the memory; if we modify the 
                //varible using either address the changes are immediately visible to the other variable


let number = 10

function increase(num){
    num+=2
}

increase(number)
console.log(number) //number variable is not modified- only its value is copied across, locally scoped, two copies exist.

//whereas

let obj = { value: 10,}

function increaseObj(obj){
    obj.value++
}
increaseObj(obj)
console.log(obj) //we modify actual object, not an independant copy. All changes 

//Private properties

function Circle(radius){
    this.radius = radius;

    let defaultLocation = { //this private property cannot be modified
        x:1,
        y:1

    }
    this.getDefaultLocation = function(){ // but can be displayed
        return defaultLocation
    }
// we can also define the fucntion using the global object method. this produces a "read only property"

Object.defineProperty(this, 'defaultLocation', {
    get: function(){
    return defaultLocation
},
//we can also use a "setter"
set: function(value){
    if(!value.x || !value.y){
        throw new Error(
            "Not a valid location"
        )

        defaultLocation = value
    }

}
}
)

// get! a keyword for a function which is used to read a property, called a "getter"


}

const circle = new Circle(1)

