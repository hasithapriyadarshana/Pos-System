let userArr=[];
class user{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}
const createUser=()=>{
    const fullName= $ ('#full-name').val();
    const email =$ ('#register-email').val();


     let caretedUser=new user(fullname,email,password);
     let isExistData=userArr.find(e=e.email=='email');
     if (existUserData){
         alert('user already exist');
         return;
     }

     userArr.push(createUser());
}

