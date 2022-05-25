let cl=document.getElementById('celcius');
let fh=document.getElementById('fahrenheit');


cl.oninput=() =>{
    let output=(parseFloat(cl.value) * 9)/ 5 + 32;
    fh.value=parseFloat(output.toFixed(2));

}

fh.oninput=() =>{
    let output=((parseFloat(fh.value) - 32) * 5)/ 9;
    cl.value=parseFloat(output.toFixed(2));
    
}