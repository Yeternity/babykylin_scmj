var t = [0,1,0,1,2,7,1,1,24,2,2,9,2,1,23,3,2,1,3,1,1,0,2,21,0,1,17,1,2,5,1,1,21,0,3,21,0,1,9,1,2,10,1,1,20,2,2,1,2,1,9,3,2,4,3,1,4,1,3,4,1,1,18,2,2,8,2,1,10,3,2,16,3,1,19,0,2,7,0,1,7,1,2,6,1,1,2,2,2,25,2,1,25,3,2,4,3,1,4,0,2,6,0,1,6,1,2,0,1,1,0,2,2,9,2,1,9,3,2,11,3,1,26,0,3,26,0,1,11,3,3,11,3,1,24,0,2,25,0,1,14,1,2,19,1,1,19,2,2,20,2,1,20,3,2,11,3,4,11,3,2,7,3,1,7,0,2,18,0,1,25,1,2,1,1,1,1,2,2,8,2,1,12,1,3,12,1,1,8,2,4,8,2,2,2,2,1,17,3,2,5,3,1,5,2,5,5,3,2,0,3,1,0,0,2,24,0,1,18,1,2,18,1,1,18,2,2,23,2,1,23,3,2,25,3,1,25,0,2,10,0,1,10,1,5,10,2,2,2,2,1,2,3,2,15,3,1,9,0,2,2,0,1,2,1,2,13,1,1,13,3,5,13,0,2,20,0,1,20,1,2,26,1,1,26,2,2,17,2,1,17,3,2,14,3,1,14,0,2,3,0,1,3,2,5,3,3,2,12,3,1,12,0,2,7,0,1,7,1,2,23,1,1,23,2,2,3,2,6,3,3,2,1,3,1,1,0,2,19,0,1,19,1,2,10,1,6,10,2,2,6,2,1,6,3,2,21,3,1,21,0,5,21,1,2,6,1,1,6,2,2,15,2,1,15,3,2,25,3,1,25];
var str = "";
for(var i = 0; i < t.length; ++i){
    str += String.fromCharCode(t[i]+49);
}
console.log(str);
console.log(str.length);
console.log(t.toString().length);

var t2 = '{"button":1,"index":1,"mahjongs":[20,7,9,3,0,14,6,9,13,26,10,4,26,6,7,23,11,15,10,22,4,21,20,1,23,13,17,5,14,22,2,2,7,8,21,25,6,3,16,7,20,8,15,19,0,22,5,17,18,14,24,6,1,12,4,25,3,9,17,8,5,16,24,23,17,26,13,25,16,5,12,18,19,19,19,18,3,12,11,11,25,23,26,22,16,0,9,2,21,12,14,10,2,1,10,24,13,8,0,1,20,15,15,24,18,11,21,4],"game_seats":[[3,9,4,23,22,1,5,2,25,7,19,17,6],[20,0,13,26,11,4,23,14,7,6,20,0,18,1],[7,14,26,6,15,21,13,22,8,3,8,22,14],[9,6,10,7,10,20,17,2,21,16,15,5,24]]}';
console.log(t2.length);
