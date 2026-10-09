// Immediately Invoked Function Expression

// iife is used to immediate invoke function and it is safe from pollutants can be caused by global scope variables,declaration
// semicolon is must at last, otherwise shows error for another iife

(function chai(){
    // named IIFE
    console.log("Database connected");
    
})();

((name)=>{
    console.log(`database connected two ${name}`);
    
})("tarun");