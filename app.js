function getNumber(num){
    var result = document.getElementById("result")
    result.value += num
}

function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
    result1.value = ""
}

function getResult(){
    var result = document.getElementById("result")
    result1.value = eval(result.value)
}



