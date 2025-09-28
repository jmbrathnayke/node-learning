// Object Literal define (type1)
// user1 object
/*const user1 = {
    // properties
    u_id:1,
    u_name:"Jay",
    u_email:"jay@example.com",
    u_password:"jay@123",

    // login function
    login:function(){
       console.log(this.u_name+" logged in");
    },
    // logout function
    logout:()=>{
        //console.log(user1.u_name+" logged out");
        console.log(user1.u_password+" logged out");
    }
};

//console.log(user1.u_name);
user1.login();
user1.logout();

// Object Constructor define (type2)
// User object constructor
function User(u_id,u_name,u_email,u_password){
    this.u_id=u_id;
    this.u_name=u_name;
    this.u_email=u_email;
    this.u_password=u_password;

    // login function
    this.login=function(){
        console.log(this.u_name+" logged in");
    };

    // logout function
    this.logout=()=>{
        console.log(this.u_name+" logged out");
    };     
}

// user2 object
const user2=new User(2,"May","may@example.com","may@123");
user2.login();
user2.logout();*/


//class define
//(type3)
class User{
    
    constructor(){
        this.u_id;
        this.u_name;
        this.u_email;
        this.u_password;
    }
    login(){
        console.log(this.u_name+" logged in");
    }
    //arrow function
    logout = () =>{
        console.log(user3.u_name+" logged out");
    }
}

//user3 object
const user3= new User();

user3.u_id=3;
user3.u_name="manu";
user3.u_email="manu@example.com";
user3.u_password="manu@123";
console.log(user3);

//give properties one by one
for(const x in user3){
    console.log(x);
}

user3.login();
user3.logout();