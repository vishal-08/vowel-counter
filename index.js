const inputEl = document.getElementById("text-el")
const btnEl = document.getElementById("btn-el")
let stringEl =[]
let count = 0

btnEl.addEventListener("click", () =>{
    
   obj = {
       vowel : inputEl.value
   }
   stringEl.push(obj)
   console.log(stringEl)

   let result = []
   for(let j=0;j<stringEl.length;j++)
   {
    count = 0
    result = stringEl[j].vowel.split("")
    console.log(result)
 
    for(let i=0; i<=result.length;i++)
    {
        if(result[i] === 'a' || result[i] === 'e' || result[i] === 'i' || result[i] === 'o' || result[i] === 'u'|| result[i] === 'A' || result[i] === 'E' || result[i] === 'I' || result[i] === 'O' || result[i] === 'U')
        {
            count++;
        }
     
    }
    
   }
   
   alert(`there are ${count} vowels`)
   inputEl.value =""
   count = 0
})

