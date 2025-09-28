// Object Literal define
// user1 object
const user1 = {
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

// Object Constructor define
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
user2.logout();


//class define
class User{
    constructor(u_id,u_name,u_email,u_password){
        this.u_id=1;
        this.u_name="manu";
        this.u_email="manu@example.com";
        this.u_password="manu@123";
    }
}

const user3= new User(3,"manu","manu@example.com","manu@123");
user3.login();
user3.logout();
