var para = new URLSearchParams(window.location.search)
var docId = para.get("docId");
console.log(docId);
const lis = document.querySelector('#myList');
let i = 0;
function getnewFn() {
    db.collection("Project").add({
        managedBy: '',
        projectName: '',
        team: []
    }).then((ref)=>{
            projId=ref.id;
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

    let i1 = document.createElement("img");
    i1.src = "skins/rectangle_10_ek2.png";
    i1.id="rectangle_10_ek2";
    dv1.appendChild(i1);


    let dv3 = document.createElement("div")
    dv3.id = 'edit_team';
    let b1 = document.createElement("button")
    b1.type='button';
    b1.id = 'edit_team';
    b1.textContent='Edit Team';
    dv3.appendChild(b1);
    dv1.appendChild(dv3);

    let dv31 = document.createElement("div")
    dv31.id = 'manage_project';
    let b2 = document.createElement("button")
    b2.type='button';
    b2.id = 'manage_project';
    b2.textContent='Manage Project';
    dv31.appendChild(b2);
    dv1.appendChild(dv31);
    
    let dv32 = document.createElement("div")
    dv32.id = 'view_progress_ek2';
    let b3 = document.createElement("button")
    b3.type='button';
    b3.textContent='View Progress';
    b3.id = 'view_progress_ek2';
    dv32.appendChild(b3);
    dv1.appendChild(dv32);


    li.appendChild(dv1);
    lis.appendChild(li);

    
}