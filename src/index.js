/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var LoveTriang=0;
  var i=0;   	
  for (var i=0; i < preferences.length; i++) {
  		for (var j = 0; j < preferences.length; j++){
	  		if (j != i && preferences[j] == i+1){
	  		for (var k = 0; k < preferences.length; k++){
  				if (k != j && preferences[k] == j+1) {
  				for (var m = 0; m <= preferences.length; m++){
  					if (m != k && preferences[m] == k+1 && i==m) {
  						LoveTriang +=1;
  					}
  				}
  				}
  			}
	  		}
	 	}
	}
  return LoveTriang/3;
};
