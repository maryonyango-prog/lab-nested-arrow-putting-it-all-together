
 function createLoginTracker  (userInfo) {
 let attemptCount = 0;
 const maxAttempts = 3;
 return (password ) => { 
    attemptCount++;
    if(attemptCount > 3){
        return `Account locked for ${userInfo.username} after ${attemptCount - 1} failed attempts.`;
    }
    if (password === userInfo.password) {
        return `Login successful for ${userInfo.username} after ${attemptCount} attempts.`;
    } else {
        return `Login failed for ${userInfo.username}. Attempt ${attemptCount}.`;
    }
  }
 }
 const user = { username: "user1", password: "securePass" };
 const login = createLoginTracker(user);

 const input = prompt("Enter your password:");
 const result = login(input);
 alert(result);
  console.log(result);

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
