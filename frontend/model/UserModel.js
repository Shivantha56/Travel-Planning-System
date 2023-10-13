export default class UserModel {

    #userName;
    #userNic;
    #userEmail;
    #userAddress;
    #userPassword;
    #userProfilePic

    constructor(userName,userNic,userEmail,userAddress,userPassword) {
        this.#userName = userName;
        this.#userNic = userNic;
        this.#userEmail = userEmail;
        this.#userAddress = userAddress;
        this.#userPassword = userPassword;
    }


    //setter methods
    setUserName(userName){
            this.#userName = userName;
    }
    setUserNic(userNic){
            this.#userNic = userNic;
    }
    setUserEmail(userEmail){
            this.#userEmail = userEmail;
    }
    setUserAddress(userAddress){
            this.#userAddress = userAddress;
    }
    setUserPassword(userPassword){
            this.#userPassword = userPassword;
    }
    setUserProfilePic(userProfilePic){
            this.#userProfilePic = userProfilePic;
    }

    //getter methods
    getUserName(){
        return this.#userName
    }
    getUserNic(){
        return this.#userNic;
    }
    getUserEmail(){
        return this.#userEmail;
    }
    getUserAddress(){
        return this.#userAddress;
    }
    getUserPassword(){
        return this.#userPassword;
    }
    getUserProfilePic(){
        return this.#userProfilePic;
    }



}