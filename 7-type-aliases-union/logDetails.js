function logDetails(uid, item) {
    console.log("O produto " + item + " tem o uid " + uid);
}
function logInfo(uid, user) {
    console.log("O usu\u00E1rio com id " + uid + " se chama " + user);
}
logDetails(123, 'camiseta');
logDetails('123', 'camiseta');
logInfo(23, 'Jonatas');
function renderPlatform(platform) {
    return "Voc\u00EA vai receber um computador com o sistema " + platform + "!";
}
renderPlatform('Linux');
// renderPlatform('ios')
