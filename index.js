const createLoginTracker = (userInfo) => {
  let attemptCount = 0;
  const MAX_ATTEMPTS = 3;
  
  const handleLogin = (passwordAttempt) => {
    if (attemptCount >= MAX_ATTEMPTS) {
      return "Maximum login attempts reached! Account locked." ;
    }
    
    attemptCount++;
    
    if (passwordAttempt === userInfo.password) {
      return `Login successful! Attempts: ${attemptCount}`;
    } else {
      const attemptsLeft = MAX_ATTEMPTS - attemptCount;
      return `Login failed! Attempts: ${attemptCount}. ${attemptsLeft > 0 ? `${attemptsLeft} attempt(s) left.` : 'No attempts left.'}`;
    }
  };
  
  return handleLogin;
};


const user = { username: "john", password: "secret123" };
const login = createLoginTracker(user);

console.log(login("wrong"));    // "Login failed! Attempts: 1. 2 attempt(s) left."
console.log(login("123"));      // "Login failed! Attempts: 2. 1 attempt(s) left."
console.log(login("wrong"));    // "Login failed! Attempts: 3. No attempts left."
console.log(login("secret123")); // "Maximum login attempts reached! Account locked."


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
