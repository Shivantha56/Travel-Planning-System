export default class UserModel {





    #userId;
    #userName;
    #userNic;
    #userEmail;
    #userAddress;
    #userPassword;
    #userProfilePic


    constructor() {

    }






    getUserId() {
        return this.#userId;
    }

    setUserId(value) {
        this.#userId = value;
    }

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