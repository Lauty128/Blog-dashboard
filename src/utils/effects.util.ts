interface messageParams{
    type: string
    message: string
}

export function newMessage({ type , message }:messageParams){
    const messageBox = document.querySelector('.MessageBox') as HTMLDivElement

    (document.querySelector(".MessageBox__message") as HTMLParagraphElement).innerHTML = message
    messageBox.classList.add(`MessageBox--${type}`)
    
    messageBox.classList.add('MessageBox--active')
    setTimeout(()=>{
        messageBox.classList.remove('MessageBox--active')
    }, 2000)
}