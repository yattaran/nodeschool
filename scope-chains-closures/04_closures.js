function foo() {
    var bar;
    quux = 2;
    function zip() {
        var quux = 3;
        bar = true;
    }
    return zip;
}

/*
Modify your solution from the previous lesson to set bar = true inside zip(),
then return the function zip as the result of foo()

Once complete, execute scope-chains-closures verify <your-file.js> to verify your
solution.
*/