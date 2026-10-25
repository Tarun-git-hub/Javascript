// let name = 'tarun     '
// console.log(name.length);

let heros = ['thor','spider']

let heroPower = {
    thor:'hammer',
    spider:'sling',

    spiderPower: function(){
        console.log(`power of spidy is ${this.spider}`);
        
    }
}
Object.prototype.tarun = function(){
    console.log('tarun has also any power?');
    
}
Array.prototype.drashti = function(){
    console.log('drashti has a super power');
    
}
 heroPower.drashti()
heros.drashti()

// heroPower.tarun()
// heros.tarun()