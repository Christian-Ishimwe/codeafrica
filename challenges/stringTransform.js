// coding challenge 2: String Manupulations

const stringTransform=(text)=>{
    const length= text.length
    if(length%3==0 && length%5==0){
        text= text.split("").reverse().join("")
        const textArray=text.split("")
        const asciArray= []
        textArray.forEach(char=>{
            asciArray.push(char.charCodeAt(0))
        })
        text= asciArray.join(" ")
        
    }
    else if(length%5==0){
        const textArray=text.split("")
        const asciArray= []
        textArray.forEach(char=>{
            asciArray.push(char.charCodeAt(0))
        })
        text= asciArray.join(" ")
    }
    else if(length%3==0){
        text= text.split("").reverse().join("")
    }
    else{
        text="Out of Range"
    }
    return text
}


const text = "Hamburger";
const transformedText = stringTransform(text);
console.log(transformedText); // Output: "regrubmaH"

const text2 = "Pizza";
const transformedText2 = stringTransform(text2);
console.log(transformedText2); // Output: "80 105 122 122 97"

const text3 = "Chocolate Chip Cookie";
const transformedText3 = stringTransform(text3);
console.log(transformedText3); // Output: "eikooCpihCetalocohC"

