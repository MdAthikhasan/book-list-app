
 
export const getFromloacl = () => {
    const data = localStorage.getItem("booksss");
   if ( data) {
     return JSON.parse(data)
    }
    
    return []
}