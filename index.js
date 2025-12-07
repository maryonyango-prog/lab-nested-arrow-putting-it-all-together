// Simple 3-attempt login with named functions
//Aquiring userInfo
function UserInfo(userName, password) {
    return {
        userName: userName,
        password: password
    };

}

function createLoginTracker(userInfo) {
    let attemptCount = 0;
    
return (passwordAttempt) => {
    attemptCount++;

//too many attempts
    if (attemptCount > 3) {
        return "Account locked due to too many failed login attempts";
    }
 //Successfull login   
    if (passwordAttempt === userInfo.password) {
        return "Login successful";
    }
return `Attempt ${attemptCount}: Login failed`;

};
}
//Export
module.exports = {
    ...(typeof createLoginTracker!== 'undefined' && { createLoginTracker })
};