"use strict"
function isEmpty (obj) {
	debugger;
	for(var key in obj) {
		if(obj.key === undefined) {
			return false;
		}
	}
	return true;
  }
  var schedule = {};
  alert( isEmpty(schedule) ); // true
  schedule["8:30"] = "подъём";
  alert( isEmpty(schedule) ); // false