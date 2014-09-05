var friends = {}; 
friends.steve = {
    firstName: "Steve",
    lastName: "Gate",
    number: "(930)-234-2933", 
    address: ['1938 N. Myrtle St', 'New Apple', 'Florida']
};

friends.bill = {
    firstName: "Bill",
    lastName: "Derricks",
    number: "(823) 234-2933", 
    address: ['32 N. S St', 'New Wick', 'Florida']
};
var list = function(obj){
for (var prop in obj){ 
    console.log(prop);
}
};



var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");