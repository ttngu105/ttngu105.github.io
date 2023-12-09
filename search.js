// JavaScript code 
hall = {}
table = {}
hall{"tommy":1,"timmy":2}
table["tommy"] = "1"
table["timmy"] = "2"
hall["dad"] = "3"
table["dad"] = "3"
hall["mom"] = "3"
table["mom"] = "3"
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
