//Imports matrix code from the folder
const Matrix = require("matrix-js");

/*Example code creating two new matricies and then multiplying them.*/
/*let M = Matrix([[1,1],[1,1]]);
let N = Matrix([[2,3],[3,5]]);
console.log(M.prod(N));*/

//Draft your code below this line to answer the questions.
let A = Matrix([[0,1,1,0,0,1],[1,0,1,0,0,1],[1,1,0,1,1,1],[0,0,1,0,0,0],[0,0,1,0,0,0],[1,1,1,0,0,0]]);
console.log(A.prod((A.prod((A.prod((A.prod((A.prod((A.prod((A.prod(A))))))))))))));
//You can 'comment out' theexample above by placing double slashes before them.
