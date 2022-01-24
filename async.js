/***************************************************************
 * Файл async.js Демонстрация асинхронной передачи данных.     *
 ***************************************************************/
import EventEmitter from 'events';

export class TMyClock extends EventEmitter { 
    #max=0;
    #time=0;
    #timer;
    #fn;

    #reject;

    #timeFunction=(resolve)=>{ 
        this.#time++; 
        console.log(`time is ${this.#time}`)

        if(this.#time == this.#max){
            this.emit('timeout', this.#time);
            this.#fn && this.#fn(this.#time);
            resolve(this.#time);
        }
    }

    on(eventName, callback){
        this.on(eventName, callback);
    }

    start(){
        if(this.#timer) {
            console.log("Can`t run again!");
            return;
        }
        this.#time = 0;
        this.emit('start', ":-)");

        return new Promise((resolve, reject)=>{
            this.#reject = reject; 

            this.#timer = 
            setInterval(()=>this.#timeFunction(resolve), 1000)
        })
    }

    stop(){
        if(!this.#timer) {
            console.log("Nothing to stop");
            return;
        }
        
        this.emit('stop', ":-)");
        this.#reject("Timer was stopped!");

        clearTimeout(this.#timer);
        this.#timer = undefined;
    }

    setCallback(fn){ 
        this.#fn = fn;
    }

    setMax(value){
        if(isNaN(value*1)) return;
        this.#max = value;
    }

}

