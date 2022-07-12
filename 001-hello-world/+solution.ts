// copy from template to solution

/**
 * returns the string Hello World. when a optional name is provided it returns Hello <name> 
 * eg sayHi("Bob) returns "Hello Bob"
 */
export function sayHi(name = "") {
    if(name=== ""){
        return "Hello World"
    }
    return "Hello " + name
}    


/**
 * takes a count argument and prints <count> Hello World  n times
 * eg if count = 2
 * prints
 * 1 Hello World
 * 2 Hello World
 */
export function sayHiMultipleTimes(count){
    let text= ""
    for (let i=0; i<count; i=i+1){
        let prefix=i+1
        if (i!==0) {
            text=text+"\n"
        }    
        
        text= text+prefix+" Hello World"
    }
    return text
}   
/**
 * Returns a function that when called returns "bye for now"
 * eg 
 * const bye = createByeFunction();
 * const message = bye(); // returns bye for now
 */
export function createByeFunction() {
  return function() {

  } 
}
  
