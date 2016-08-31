var hasCycle = function(linkedList){
  
  if(linkedList == null || linkedList.next == null) {
    return false;
  }
  
  var fast = linkedList; 
  var slow = linkedList;
  
  while(true) {
    
    if(fast.next == null || fast.next.next == null) {
      return false;
    }
    
    fast = fast.next.next 
    slow = slow.next
    
    if(fast.value == slow.value) {
      return true;
    }
  }
};