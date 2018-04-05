const { EventEmitter } = require('events');

class Kettle extends EventEmitter{
  constructor(){
    super();
    setImmediate(()=>{ // приоритет запуска 3
      this.emit('created', {});
    });
  }
  start(){
    process.nextTick(() => { // приоритет 1
      this.emit('start', {})
    });
    setTimeout(()=>{ this.emit('ready', {});},0); // приоритет 2
  }
}

console.log(123);

const k  = new Kettle();
k.start();

k.on('created', () => {console.log('Чайник создан');});
k.on('start', () => {console.log('Чайник начал');});
k.on('ready', () => {console.log('Чайник скипел');});