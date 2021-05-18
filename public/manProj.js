const lis = document.querySelector('#myList');
    let i = 0;
    function getnewFn() {
        let li = document.createElement("tr");
        let dv1 = document.createElement("div");
        dv1.id = 'someGrp';
        let dv2 = document.createElement("input")
        dv2.id = 'processes1';
        dv2.type="text"
        dv2.placeholder="Process Name"
        dv1.appendChild(dv2); 
         let dv3 = document.createElement("input")
        dv3.id = 'duration1';
        dv3.type="text"
        dv3.placeholder="Duration"
        dv1.appendChild(dv3); 
         let dv4 = document.createElement("input")
        dv4.id = 'start_date1';
        dv4.type="text"
        dv4.placeholder="Start Date"
        dv1.appendChild(dv4);

        let drop1 = document.createElement("select")
        drop1.id = 'assigned_to1'
           
            let op1 = document.createElement("option")
            op1.value="employee1";
            op1.textContent='employee1';
            drop1.appendChild(op1);
       
             dv1.appendChild(drop1);
       
            let drop = document.createElement("select")
            drop.id = 'status1'
               
                let op2 = document.createElement("option")
                op2.value="inProgress";
                op2.textContent='In Progress';
                drop.appendChild(op2);
                let op3 = document.createElement("option")
                op3.value="completed"
                op3.textContent="Completed"
                drop.appendChild(op3);
           
        dv1.appendChild(drop);
        
        li.appendChild(dv1);
        lis.appendChild(li);

        
    }