let api = 'https://fast-reef-67224.herokuapp.com'
let addJobEndpoint = '/jobs'
function addJob() {


    let jobTitle = document.forms[0]['jobTitle'].value
    let jobDescription = document.forms[0]['jobDescription'].value
    let jobLocation = document.forms[0]['jobLocation'].value
    let jobEmployer = document.forms[0]['jobEmployer'].value
    let url = api+addJobEndpoint
    
    
    fetch(url, { method: 'POST', 
    body: JSON.stringify(
        {
            "title": jobTitle,
            "description": jobDescription,
            "employer": jobEmployer,
            "location": jobLocation
        }
        ), 
        headers: 
        { 'Content-Type': 'application/json' } 
    }).then(function (response){
        if(response.status == 201){
            alert('Emprego cadastrado com sucesso');
            document.getElementById('jobTitle').value = '';
            document.getElementById('jobDescription').value ='';
            document.getElementById('jobLocation').value = '';
            document.getElementById('jobEmployer'   ).value ='';  
        }else {
            alert('Erro durante o cadastro, tente mais tarde! ')
        }
    })
  
    // ====  GET  ====
  

}

async function getAllJobs(){
    let headers = new Headers();

  

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('accept', 'application/json');
  

    fetch(url,{method:'GET', headers:headers, mode:"cors"}).then(resp => 
        resp.json()
    ).then(data => {
        console.log(data)
        return data;
    })
}