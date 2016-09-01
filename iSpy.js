// Write a function – spyOn – which takes in another function as an argument. 
// spyOn should return a spy (i.e. a function) that can be invoked and behaves like the original function. 
// However, the spy has some extra capabilities in addition to behaving like the original function.

// Please read the requirements carefully!

// The spy (i.e. the returned function) should also have these methods:
// - .callCount() which returns the number of times the spy was invoked.
// - .wasCalledWith(arg) which returns a boolean representing whether the supplied ‘arg’ was used in 
// a previous invocation of spy. When a spy is invoked with multiple arguments, each argument supplied 
// should be stored such that .wasCalledWith() will return true for each individual argument.
// - .returned(val) which returns a boolean representing whether the spy was invoked and returned 
// the supplied ‘val’.



function spyOn(fn) {
  
  var callCount = 0;
  var calledArgs = [];
  var returnVals = [];
  
  var spy = function() {
    
    var args = [];
   
    for(var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
      calledArgs.push(arguments[i]);
    }
    
    callCount++;
    
    var returnVal = fn.apply(this, args); 
    returnVals.push(returnVal);
    return returnVal;
    
  }
  
  spy.callCount = function() { 
      return callCount;
  }
  
  spy.wasCalledWith = function(arg) { 
    return calledArgs.includes(arg) ? true : false;
  }
  
  spy.returned = function(val) {
    return returnVals.includes(val) ? true : false;
  }
  
  return spy;
}