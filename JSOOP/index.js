const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1,
    },
    draw: function(){
        console.log("draw")
    } 
}

circle.draw()


// Factory function
function createCircle(radius){

    return {
        radius,
        draw: function(){
            console.log("draw")
        } 
    }
    
}

const newCircle = createCircle(1)

// Constructor Function

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log("Draw")
    }
}

const anotherCircle = new Circle(1)



//javascript uses inbuilt constructor function to create objects created with the object literal syntax

let myObject = {}

// let myObject =  new Object()

//also an inbuilt constructor function to create functions...& an inbuilt function call

Circle.call({}, 1) //creates a circle using the consttructor function, the first argument is the object that 'this' refers to

// so we can use the cont

