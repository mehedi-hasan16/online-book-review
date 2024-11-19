const checkLS = ()=>{
    const bookReviewData = localStorage.getItem('bookReview');
    if(bookReviewData){
        return JSON.parse(bookReviewData);
    }
    return {}
}


const addToLS =( type, id) =>{
    const data = checkLS();
    if (!data[type]){
        data[type]=[]
    }
    data[type].push(id)
    localStorage.setItem('bookReview', JSON.stringify(data));
}

export{checkLS, addToLS}