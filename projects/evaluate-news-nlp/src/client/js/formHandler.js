function handleSubmit(event) {
    event.preventDefault()
    
    let urlvalue = document.getElementById('inputURL').value; 
    
    // Checking the URL
    if(Client.checkForName(urlvalue)){
        
    //Fetch request
    fetch('http://localhost:8080/showheaders',{
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({urlvalue: urlvalue}),
        
    })
    .then(res => res.json())
   
    .then(function(res) {
        if(res.title!=null){
        document.getElementById('title').innerHTML = `Title : ${res.title}`;
        }
        if(res.heading_list!=null){
        document.getElementById('headers').innerHTML = `Headers : ${res.heading_list}`;
        }
    })

    fetch('http://localhost:8080/showsentiment',{
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({urlvalue: urlvalue}),
    })
    .then(res => res.json())
   
    .then(function(res) {
        let irony="";
        let agree="";
        let conf="";
        let pol="";
        let obj="";

        switch(res.agreement){
                case('AGREEMENT'):agree = "The text Agreement is High";break;
                case('DISAGREEMENT'):agree = "The text has no Agreement";break;
        }

        switch(res.irony){
            case('NONIRONIC'):irony= "There is no Irony";break;l
            case('IRONIC'):irony= "There is Irony";break;l
            case(null):irony= "";break;l
        }
        
        switch(res.subjectivity){
                case('OBJECTIVE'):obj = "Article is Objective";break;
                case('SUBJECTIVE'):obj = "Article is Subjective";break;
                case(null):obj= "";break;
        }

        switch(res.score_tag){
            case('NEU'):pol= "Article confidence is Neutral" ;break;
            case('P'):pol= "Article confidence is Positive" ;break;
            case('P+'):pol= "Article confidence is very Positive" ;break;
            case('NONE'):pol= " No Confidence Detected." ;break;
            case('N'):pol= "Article confidence is Negative." ;break;
            case('N+'):pol= "Article confidence is very Negative." ;break; 
        }
        

        document.getElementById('iron').innerHTML = irony;
        document.getElementById('agree').innerHTML = agree;
        document.getElementById('conf').innerHTML = "Confidence Percentage is "+ res.confidence +"%";
        document.getElementById('conf').innerHTML = conf;
        document.getElementById('pol').innerHTML = pol;
        document.getElementById('obj').innerHTML = obj;

        })
    console.log("::: Form Submitted :::");
    
    }else{
        alert("Please enter a valid URL");
    }
}

export { handleSubmit }