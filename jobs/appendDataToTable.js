function getAllJobs(){
    $('#tbody').empty();
    let headers = new Headers(); 
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('accept', 'application/json');
  let api = 'https://fast-reef-67224.herokuapp.com'
let addJobEndpoint = '/jobs'
    let url = api + addJobEndpoint;
    fetch(url,{method:'GET', headers:headers, mode:"cors"}).then(resp => 
        resp.json()
    ).then(jobs => {
        console.log(jobs);
        jobs.forEach(element => {
            
            let tr = document.createElement('tr');
            let td;
            let div;
            let p;
            let fields = ['employer','title','location','description'];
            fields.forEach(prop =>{
                console.log(prop);
                if(prop != 'id'){
                    td = document.createElement('td');
                    div = document.createElement('div');
                    div.className = 'd-flex align-items-center';
                    p = document.createElement('p');
                    p.className = 'mb-1';
                    p.innerText = element[prop];
                    td.appendChild(div)
                    div.appendChild(p);
                    tr.appendChild(td);
                }
                $('#tbody').append(tr);
            });
            
        });

    });
}
getAllJobs();

appendDataToTable()

