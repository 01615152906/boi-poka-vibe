import { toast } from "react-toastify";

const getStoredRedList = () => {


// read List 
const storedListStr = localStorage.getItem('read-list');
if(storedListStr){
const storedList  = JSON.parse(storedListStr);
return storedList;
}
else{
    return[];
}


}


const addToStoredRedList = (id) => {
    const storedList = getStoredRedList();
    if(storedList.includes(id)){
// already exisots . do not add it
console.log(id, 'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideaLLy trigger toast from the coponent
        toast('this book is added to you read list')
    }
}
export {addToStoredRedList, getStoredRedList} 