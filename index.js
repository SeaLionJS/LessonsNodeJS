/*************************************
 * использование асинхронных функций *
 *************************************/
import {TMyClock} from './async.js'
const SmallBen = new TMyClock;

SmallBen.setMax(5);

/**************************************
 * использование обратного вызова     *
 **************************************/
 SmallBen.setCallback(time=>console.log("callback time is", time));

/**************************************
 * использование события              *
 **************************************/
 SmallBen.addListener('start',()=>console.log("Timer is working!"));
 SmallBen.addListener('timeout', (time) =>  console.log("event time is",time));
 SmallBen.addListener('timeout', (time) =>  console.log("next event handler",time));

/**************************************
 * использование промиса              *
 **************************************/
// подробнее https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises

SmallBen.stop(); //еще не запущен
SmallBen.start()
.then(time=>{
    console.log("promise timeout is",time);
})
.catch(error=>console.log("error is ", error));

SmallBen.start(); //уже запущен

//SmallBen.stop(); //раскомментировать для теста

