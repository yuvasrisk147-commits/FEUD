function greeting(){
    let name=document.getElementById('name').value;
    if(name==""){
        alert("Please enter your name...");
    }
    if(name!=""){
        document.writeln("Hi! "+name);
    }
}
