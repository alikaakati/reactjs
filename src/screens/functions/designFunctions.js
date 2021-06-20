export const close = (close , open) =>{
    close.current.style.width = "0px";
    open.current.style.marginLeft = "0px";
}

export const open = (close , open) =>{
    var windowWidth = window.innerWidth;
    if (windowWidth <= 500) {
        close.current.style.width = "100vw";
    }
    else{
        close.current.style.width = "18vw";
        open.current.style.marginLeft = "18vw";
    
    }
}

export const togglePaymentsTable = (button , table) =>{
    if (button.current.className=="far fa-times") {
        table.current.style.display = "none";
        button.current.className = "far fa-chevron-down";

    }
    else{
        table.current.style.display = "table";
        button.current.className="far fa-times";
    }

}
export const togglePayments2Table = (button , table) =>{
    if (button.current.className=="far fa-times") {
        for(const x in table){
            table[x].current.style.display = "none";
        }

        button.current.className = "far fa-chevron-down";

    }
    else{
        for(const x in table){
            table[x].current.style.display = "table";
        }
        button.current.className="far fa-times";
    }

}