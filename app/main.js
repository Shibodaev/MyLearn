"use strict";
var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
  };
  var obj = 0, name = "";
  

  for(var key in salaries){
	if(obj < salaries[key] ) {
		obj = salaries[key];
		name = key
	} else if (obj > salaries[key]) {
		alert(name);
	}
  }
  

