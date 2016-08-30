riot.settings.brackets = '{{ }}';


// firease login
function _(cb){
    firebase.auth().signInWithEmailAndPassword(localStorage.firebaseEM || (localStorage.firebaseEM = prompt('Podaj email','')), localStorage.firebasePW || (localStorage.firebasePW = prompt('Podaj hasło',''))).catch(function _loginError(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        $('#msg').html(errorCode + errorMessage)
    }).then(function _loggedIn(result){
        cb(result)
    });// then login

}// init

_(function(){
    setSong();
})
function setSong(url){
    firebase.database().ref('users/'+firebase.database().app.auth().currentUser.uid+'/songs').push({
        date : Date.now(),
        song : url || location.href.match(/v=([A-Za-z0-9]+)/)
    })
}
/*
 firebase.database().ref('users/'+firebase.database().app.auth().currentUser.uid+'/songs').once('value').then(function(snapshot){
 console.log(snapshot.val())
 bits = snapshot.val();
 riot.mount("*", bits);

 // https://css-tricks.com/snippets/css/a-guide-to-flexbox/

 })

 */