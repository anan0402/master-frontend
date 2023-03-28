//array1 = []
//array2= [1,2,3,4,5]
//array3 = ['a', 3, 4, 6]
//array4 = ['1', 2,3,4,5]
const vector = [1,6,3,4,5,5,7,3,8,9]
var maxElement = vector[0];

function correctVector (vector){
    if(vector.length === 0){
        console.log('The vector is empty')
        return false;
    } else{
        for(let i = 0; i<vector.length; i++){
            if(typeof vector[i] !== 'number'){
                console.log('wrong element')
                return false;
            }
        }
    }
    return true;
}
if(correctVector(vector)){
    for(let i = 1; i<vector.length; i++){
        if(vector[i]>maxElement){
            maxElement = vector[i];
        }
    }
    var index = vector.indexOf(maxElement);
    vector.splice(index, 1);
    
    var secondMaxElement = vector[0];
    for(let i = 1; i<vector.length; i++){
        if(vector[i]>secondMaxElement){
            secondMaxElement = vector[i];
        }
    }
    console.log(secondMaxElement);
}

