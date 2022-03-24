// code your solution here  
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ];

function didTheyWin(object){
    return (object.result === "W")
};

function superbowlWin(array){
    let win = array.find(didTheyWin)
    if (!!win === true){
        return win.year
    }
    else return undefined
}