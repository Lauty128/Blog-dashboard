const specialCharacters = ['á','é','í','ó','ú',' ']
const replaceCharacters = ["a","e","i","o","u","-"]

export function parseTitle(title:String){
    let newTitle = title
    
    specialCharacters.forEach((character,index)=>{
        newTitle = newTitle.replaceAll(character, replaceCharacters[index])
    })

    return newTitle
}