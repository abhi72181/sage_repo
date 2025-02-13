import { useState, useEffect } from "react";

export default function EmailPasswordForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: [], password: [] });



    const validateEmail = (email) => {
        const emailErrors = [];
        if (!email) emailErrors.push("Email is required");
        if (!email.includes("@masaischool.com")) emailErrors.push("Must end with @masaischool.com");
        const domainPart = email.split("@")[1] || ""; 
        if (!domainPart.includes(".")) emailErrors.push("Email must contain a dot (.) after @");
        return emailErrors;
      };
      
      const validatePassword = (password, email) => {
        const passwordErrors = [];
        const emailName = email.split("@")[0];
      
        if (password.length < 8) passwordErrors.push("Password must be at least 8 characters");
        if (!password.split("").some((char) => !isNaN(parseInt(char)))) passwordErrors.push("Password must include at least one digit");
        if (password.includes(emailName)) passwordErrors.push("Password must not contain your email name");
        return passwordErrors;
      };
      
      
    
      
        const handleEmailChange = (e) => {
          const updatedEmail = e.target.value;
          setEmail(updatedEmail);
          setErrors({ ...errors, email: validateEmail(updatedEmail) });
        };
      
        const handlePasswordChange = (e) => {
          const updatedPassword = e.target.value;
          setPassword(updatedPassword);
          setErrors({
            ...errors,
            password: validatePassword(updatedPassword, email)
          });
        };
      
        useEffect(() => {
            const emailErrors = validateEmail(email);
            const passwordErrors = validatePassword(password, email);
            setErrors({ email: emailErrors, password: passwordErrors });
        
     
          }, [email, password]);


        const onSubmit = (e) => {
          e.preventDefault();
          if (errors.email.length === 0 && errors.password.length === 0) {
            alert("Success");
          }
        };
      
        return (
          <form onSubmit={onSubmit} >
            <div >
              
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Email"
              />
              {errors.email.map((error, index) => (
                <div key={index} >
                  {error}
                </div>
              ))}
            </div>
            <div
              
            >
                <br /><br /><br />
             
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
              />
              {errors.password.map((error, index) => (
                <div key={index} >
                  {error}
                </div>
              ))}
            </div>
            <button type="submit" disabled={errors.email.length > 0 || errors.password.length > 0}>
              Submit
            </button>    
          </form>
        );
 
}
