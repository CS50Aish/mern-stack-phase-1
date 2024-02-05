let myGithubUrl = "https://github.com/CS50Aish/mern-stack-phase-1/projects?query=is%3Aopen";
let decodedGithubUrl = decodeURIComponent(myGithubUrl);
console.log(myGithubUrl + " =========== " + decodedGithubUrl);

let exampleGoogleUrl = "https://www.google.com/search?q=javascript&oq=javascript&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDINCAYQABiDARixAxiABDIHCAcQABiABDINCAgQABiDARixAxiABDINCAkQABiDARixAxiABNIBCDI5NDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";
let decodedGoogleUrl = decodeURIComponent(exampleGoogleUrl);
console.log(exampleGoogleUrl + " ========== " + decodedGoogleUrl);

let myurl = "https://www.exampleurl.com?name=John Smith";
let encodedUrl = encodeURIComponent(myurl);
console.log(encodedUrl);

let decodeUrl = decodeURIComponent(encodedUrl);
console.log(decodeUrl);
let username = "John Smith";
let password = "John@1234";
let encodedPassword = btoa(password);
let mysiteurl = "https://www.mysite.com?name="+username+"&password="+encodedPassword;
console.log(mysiteurl);
console.log(password + " ========= " + encodedPassword);