import React, { useState } from 'react';
import { submitPetition } from '../functions/apiFunctions';
const Petition = () =>{
    const [Content, setContent] = useState("")
    const [statusMsg, setStatusMsg] = useState("")

    const handleButton = () =>{
        if(Content == '') setStatusMsg("You cannot submit an empty petition");
        else submitPetition(setStatusMsg , Content);
    }
    return(

    <div class="application-form-group">
        <p style={{color:"red",marginBottom:10}}>{statusMsg}</p>
        <label for="textArea" class="application-label lab">Petition Case</label>
        
            <textarea class="application-form-control" onChange={(e) => setContent(e.target.value)} rows="5" cols="100" id="textArea"></textarea><br/><br/>

            <button class="application-button" onClick={() => handleButton()}>Submit a Petition</button>
        
    </div>
        
    );
}
export default Petition;