const quotes = [
"Success is not final, failure is not fatal: It is the courage to continue that counts." , 
"The only way to do great work is to love what you do." , 
"Believe you can and you're halfway there." , 
"It does not matter how slowly you go as long as you do not stop." , 
"Success usually comes to those who are too busy to be looking for it." , 
"Dont watch the clock; do what it does. Keep going." ,
"The best time to plant a tree was 20 years ago. The second-best time is now." , 
"The journey of a thousand miles begins with one step." ,
"You miss 100% of the shots you dont take." , 
"It always seems impossible until its done." , 
"What you get by achieving your goals is not as important as what you become by achieving your goals." ,
"Success is walking from failure to failure with no loss of enthusiasm." ,
"I find that the harder I work, the more luck I seem to have."  ,
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()

    }
    while (true) {
         const randomIdx = Math.floor(Math.random() * quotes.length)
         
         if (usedIndexes.has(randomIdx)) continue
            
            const quote = quotes[randomIdx]
            quoteElement.innerHTML = quote;
            usedIndexes.add(randomIdx)
            break
   
         }

        

       
    
        
    }
   
