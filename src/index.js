
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {return []} else {
	    
        for (let i = 0; i<matrix.length; i++) {
            if (i%2 != 0) {
                n = matrix[i].reverse();
            }
        }


        return matrix.flat();
    }
}
