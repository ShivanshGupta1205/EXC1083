const lis = document.querySelector('#myList');
let i = 0;
function getnewFn() {
    ++i;
    let li = document.createElement("tr");
    let dv1 = document.createElement("div");
    dv1.id = 'someGrp';
    let dv2 = document.createElement("div")
    dv2.id = 'member_1_s_name';
   
    dv2.textContent="Member Name: " +i;
   
    dv1.appendChild(dv2);


    let dv3 = document.createElement("div")
    dv3.id = "member_1_s_email_address";
   dv3.textContent="Member Email: " +i;

    dv1.appendChild(dv3);

    li.appendChild(dv1);
    lis.appendChild(li);

    
}