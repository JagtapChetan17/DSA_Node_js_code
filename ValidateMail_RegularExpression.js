function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9- ]+)* $ /;
    if (mailformat.test(inputText)) {
        console.log("Valid email address!");
        return true;
    } else {
        console.log("You have entered an invalid email address!");
        return false;
    }
}
var s = "sa@rika.com";
ValidateEmail(s);