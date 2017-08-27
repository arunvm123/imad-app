//Login
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === XMLHttpRequest.DONE){
                if(request.status === 200){
                    alert("login succesfull!");
                }else if (request.status === 403){
                    alert("Username/password incorrect");
                }else if (request.status === 500){
                    alert("something wrong woth server");
                }
            }
        };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    
    request.open('POST', 'http://arunvmathew95.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};
