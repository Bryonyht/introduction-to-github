let sw =  new Stopwatch()

function Stopwatch(){
let starttime, endtime, running, duration=0
// private variable

    this.start = function{
        if (running)
        throw new Error ("Stopwatch has already started")

        running = true

        starttime = new Date()

    }
    this.stop = function{
        if(!running)
        throw new Error ("Stopwatch has not started")

        running = false

        endtime = new Date()

        const seconds = (endtime.getTime() - starttime.getTime())/1000
        duration+= seconds

    }
    this.reset = function{

        running = false
        starttime = 0
        endtime = 0

    }
    Object.defineProperty(this, "duration", {
        get: function(){
            return duration
        }
    } )



}