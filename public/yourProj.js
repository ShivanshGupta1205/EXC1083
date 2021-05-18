var para = new URLSearchParams(window.location.search)
var docId = para.get("docId");
console.log(docId);
const lis = document.querySelector('#myList');
let i = 0;
projArray=[];
function getnewFn() {
    db.collection("Projects").add({
        managedBy: '',
        projectName: '',
        team: []
    }).then((ref)=>{
            projId=ref.id;
            projArray.push(projId);
            console.log(projId);
    })
    
    ++i;
    let li = document.createElement("tr");
    let dv1 = document.createElement("div");
    dv1.id = 'project_1';
    let dv2 = document.createElement("input")
    dv2.id = projId;
    dv2.type = 'text';
    dv2.className = 'project_1_ek1';
    dv2.placeholder="Project Name"
    
    dv1.appendChild(dv2);

    /*let i1 = document.createElement("img");
    i1.src = "skins/rectangle_10_ek2.png";
    i1.id="rectangle_10_ek2";
    dv1.appendChild(i1);*/


 
    let b1 = document.createElement("button")
    b1.type='button';
    b1.id = 'edit_team';
    b1.setAttribute("onClick","editTeam(this.name)");
    //b1.onclick = function(){'editTeam(this.name)'};
    b1.name = projId;
    b1.textContent='Edit Team';
   
    dv1.appendChild(b1);

    
    let b2 = document.createElement("button")
    b2.type='button';
    b2.setAttribute("onClick","manageProj(this.name)");
    b2.id = 'manage_project';
    //b2.onclick=function(){'manageProj(this.name)'};
    b2.name = projId;
    b2.textContent='Manage Project';
    
    dv1.appendChild(b2);
    
    let b3 = document.createElement("button")
    b3.type='button';
    b3.name = projId;
    b3.setAttribute("onClick","viewProg(this.name)");
    //8b3.onclick=function(){'viewProg(this.name)'};
    b3.textContent='View Progress';
    b3.id = 'view_progress_ek2';
    
    dv1.appendChild(b3);


    li.appendChild(dv1);
    lis.appendChild(li);

    
}
function submit() {
    for (let i = 0; i < projArray.length; i++) {
        
        db.collection("Projects").doc(projArray[i]).update({
            projectName: document.getElementById(projArray[i]).value,
            managedBy: docId
        }).then(()=> {console.log(i)});
        
    }   
}

function editTeam(projId) {
    /*var para = new URLSearchParams();
    para.append("docId", docId);
    para.append("projId",projId);
    window.location.href = "edit_team.html?" + para.toString();
*/console.log('id'+projId)}

function manageProj(projId) {
    var para = new URLSearchParams();
    para.append("docId", docId);
    para.append("projId",projId);
    window.location.href = "manage_project.html?" + para.toString();
}
    


function viewProg(projId) {
    var para = new URLSearchParams();
    para.append("docId",docId);
    para.append("projId",projId);
    window.location.href = "view_progress.html?" + para.toString();
}


