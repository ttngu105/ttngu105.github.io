// JavaScript code 
hall = {}
table = {}
hall["tommy"] = "h1"
table["tommy"] = "t1"
hall["timmy"] = "h2"
table["timmy"] = "t2"
hall["dad"] = "h3"
table["dad"] = "t3"
hall["mom"] = "h3"
table["mom"] = "t3"
function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        let input = document.getElementById('name').value 
        input=input.toLowerCase()
       // hall[input]
       const tablenum = document.getElementById('tablenumber');
       const hallnum = document.getElementById('hallnumber');
       tablenum.innerHTML = table[input];
       hallnum.innerHTML = hall[input];
        //alert(hall[input] +" & "+table[input]);
    }
}
function search_person() { 
    let input = document.getElementById('topnav').value 
    input=input.toLowerCase(); 
    let x = ["tommy","timmy","john","kim"]
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 
