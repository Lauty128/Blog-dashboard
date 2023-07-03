
export function capture_image(images:FileList | null, state:any){
    const reader = new FileReader()
    
    if(images){ reader.readAsDataURL(images[0]) }

    reader.onload = e=> state(e.target?.result) 
}