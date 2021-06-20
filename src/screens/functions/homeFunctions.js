const updateGPA = () =>{
    displaysection();
    change();
}

const change = () =>{
    if(this.iconsection.className=="far fa-times"){
        this.iconsection.className = "far fa-chevron-down";
    }else{
        this.iconsection.className = "far fa-times";
    }
}