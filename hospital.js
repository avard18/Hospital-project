const logIn = {
    data:[
        {
        username: "User1",
        mail:"login1",
        password: "key1",
        },
        {
        username: "User2",
        mail:"lohin2",
        password: "key2",
        },
        {
        username: "User3",
        mail:"login3",
        password: "key3",
        },    
    ]
    };
    let adress = prompt("Enter Your email address");
    let key = prompt("Enter Your password");
    for(let i=0;i<logIn.data.length;i++){
    if (adress==logIn.data[i].mail && key==logIn.data[i].password){
        alert("Welcome "+ `${logIn.data[i].username}`);
        break;
    }
    }
    
    
    
    const illness = {
        diseases:[
            {
            name:"flu",
            symptoms:["fever","sneezing"],
            healing:"Stay at home "
            },
            {
            name:"covid",
            symptoms:["fever","cough"],
            healing:"Stay at home"
    
            },
        ]
    }
    
    const Complaint = [prompt("Insert Your Complaints")];
    
     for(let i = 0;i<illness.diseases.length;i++){
         if(Complaint==`${illness.diseases[i].symptoms}`){
             alert("You have a "+`${illness.diseases[i].name}`);
             alert(`${illness.diseases[i].healing}`);
         }
     };