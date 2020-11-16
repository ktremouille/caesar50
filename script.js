/* ENCRYPT */
function encrypt() {
    var plain_e = document.myform.plain_e.value;
    var key_e = document.myform.key_e.value;

    var newtext = "";

    // Go through each character
    for (var i = 0; i < plain_e.length; i++) {
        // Get the character we'll be appending
        var c = plain_e[i];

        // Check for a letter
        if (c.match(/[a-z]/i)) {

            // Get its code
            var code = plain_e.charCodeAt(i);
            var cc = parseInt(code, 10);
            var kk = parseInt(key_e, 10);
            var k = cc + kk;

            // If Lowercase
            if (code >= 97 && code <= 122) {
                if (k <= 122) {
                    c = String.fromCharCode(k);
                }
                else {
                    if ((((k - 122) % 26) + 96) == 96) {
                        c = String.fromCharCode(122);
                    } else {
                        c = String.fromCharCode(((k - 122) % 26) + 96);
                    }
                }
            }
            // If Uppercase
            else if (code >= 65 && code <= 90) {
                if (k <= 90) {
                    c = String.fromCharCode(k);
                }
                else {
                    if ((((k - 90) % 26) + 64) == 64) {
                        c = String.fromCharCode(90);
                    } else {
                        c = String.fromCharCode(((k - 90) % 26) + 64);
                    }
                }
            }
        }

        // Append
        newtext += c;
    }

    // Display on Ciphertext area
    document.myform.cipher_e.value = newtext;
}


/* DECRYPT */
function decrypt() {
    var cipher_d = document.myform.cipher_d.value;
    var key_d = document.myform.key_d.value;

    var newtext = "";

    // Go through each character
    for (var i = 0; i < cipher_d.length; i++) {
        // Get the character we'll be appending
        var c = cipher_d[i];

        // Check for a letter
        if (c.match(/[a-z]/i)) {

            // Get its code
            var code = cipher_d.charCodeAt(i);
            var cc = parseInt(code, 10);
            var kk = parseInt(key_d, 10);
            var k = cc - kk;

            // If Lowercase
            if (code >= 97 && code <= 122) {
                if (k >= 97) {
                    c = String.fromCharCode(k);
                }
                else {
                    if ((((k - 97) % 26) + 123) == 123) {
                        c = String.fromCharCode(97);
                    } else {
                        c = String.fromCharCode(((k - 97) % 26) + 123);
                    }
                }
            }
            // If Uppercase
            else if (code >= 65 && code <= 90) {
                if (k >= 65) {
                    c = String.fromCharCode(k);
                }
                else {
                    if ((((k - 65) % 26) + 91) == 91) {
                        c = String.fromCharCode(65);
                    } else {
                        c = String.fromCharCode(((k - 65) % 26) + 91);
                    }
                }
            }
        }

        // Append
        newtext += c;
    }
    
    // Display on Plaintext area
    document.myform.plain_d.value = newtext;
}