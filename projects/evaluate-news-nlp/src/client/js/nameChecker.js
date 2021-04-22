const checkForName = (urlvalue) => {
    var res = urlvalue.match(/(http(s)?:\/\/.)?(www\.)?[-A-Za-z0-9@:%._\+~#=]{2,256}\.\w{2,6}\b([-A-Za-z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null){
        alert("Please enter a valid URL");
            return false;        
    } else
        return true;
}
  
export{checkForName}