console.log('JavaScript code has loaded!')
    let yourName = "Trevor Billings" 
        document.getElementById('credit').textContent = `Created by ${yourName}`

     let gb = 0      // Ginger bread
        let cc = 0      // Chocolate Chip
            let sugar = 0   // Sugar Sprinkle
    
document.getElementById('add-gb').addEventListener('click', function(e) {

    gb = gb +1 
    
        document.getElementById("qty-gb").textContent = gb
        document.getElementById("qty-total").textContent = gb + cc + sugar

            console.log('Ginger bread + button was clicked!', gb)
})

document.getElementById('minus-gb').addEventListener('click', function(){


    gb = gb -1 
    
        if (gb < 0) gb = 0;

             document.getElementById("qty-gb").textContent = gb
             document.getElementById("qty-total").textContent = gb + cc + sugar
                console.log('Ginger bread - button was clicked!')
})

//
document.getElementById('add-sugar').addEventListener('click', function(){

    sugar = sugar +1 
    
        document.getElementById("qty-sugar").textContent = sugar
        document.getElementById("qty-total").textContent = gb + cc + sugar
            console.log('Sugar + button was clicked!')
})

document.getElementById('minus-sugar').addEventListener('click', function(){

    sugar = sugar -1 
    
        if (sugar < 0) sugar = 0;

         document.getElementById("qty-sugar").textContent = sugar
         document.getElementById("qty-total").textContent = gb + cc + sugar
    console.log('Sugar - button was clicked!')
})

//
document.getElementById('add-cc').addEventListener('click', function(){
    
    cc = cc +1 
    
    document.getElementById("qty-cc").textContent = cc
     document.getElementById("qty-total").textContent = gb + cc + sugar 
                console.log('Choc Chip + button was clicked!')
})

document.getElementById('minus-cc').addEventListener('click', function(){

    cc = cc -1 
    
        if (cc < 0) cc = 0;
 
             document.getElementById("qty-cc").textContent = cc
             document.getElementById("qty-total").textContent = gb + cc + sugar
             console.log('Choc Chip - button was clicked!')
           })
            
            
                