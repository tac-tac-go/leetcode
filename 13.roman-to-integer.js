/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let sum = 0;
  reg1 = new RegExp( "IV", "gi" );
  var count1 = ( s.match(reg1) || [] ).length ;
  sum+=count1*4
  s  = s.replace( reg1, '');
  
  reg2 = new RegExp( "IX", "gi" );
  var count2 = ( s.match(reg2) || [] ).length ;
  sum+=count2*9
  s  = s.replace( reg2, '');
  
  reg3 = new RegExp( "XL", "gi" );
  var count3 = ( s.match(reg3) || [] ).length ;
  sum+=count3*40
  s  = s.replace( reg3, '');
  
  
  reg4 = new RegExp( "XC", "gi" );
  var count4 = ( s.match(reg4) || [] ).length ;
  sum+=count4*90
  s  = s.replace( reg4, '');
  
  
  reg5 = new RegExp( "CD", "gi" );
  var count5 = ( s.match(reg5) || [] ).length ;
  sum+=count5*400
  s  = s.replace( reg5, '');
  
  reg6 = new RegExp( "CM", "gi" );
  var count6 = ( s.match(reg6) || [] ).length ;
  sum+=count6*900
  s  = s.replace( reg6, '');
  

  s_l = s.split("");
  
  for(const elem of s_l){
      if(elem=="I"){
          sum+=1;
      }else if(elem=="V"){
          sum+=5;
      }else if(elem=="X"){
          sum+=10;
      }else if(elem=="L"){
          sum+=50;
      }else if(elem=="C"){
          sum+=100;
      }else if(elem=="D"){
          sum+=500;
      }else if(elem=="M"){
          sum+=1000;
      }
  }
  return sum;
  
};
// @lc code=end

