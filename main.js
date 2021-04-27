var array = [];
console.log(process.argv.slice(2)[0]);
for (var i = 2; i < process.argv.length; i++)
{ // push the arguments into an array
    array.push(process.argv[i]);
}
var String = convert(array);
console.log(String);

function convert(array)
{ // convert integers into strings representing the number
    var String = "";
    for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < array[i].toString().length; j++)
        {
            switch (array[i].toString().charAt(j))
            { // check each digit of the string
                case '0':
                    String += "Zero";
                    break;
                case '1':
                    String += "One";
                    break;
                case '2':
                    String += "Two";
                    break;
                case '3':
                    String += "Three";
                    break;
                case '4':
                    String += "Four";
                    break;
                case '5':
                    String += "Five";
                    break;
                case '6':
                    String += "Six";
                    break;
                case '7':
                    String += "Seven";
                    break;
                case '8':
                    String += "Eight";
                    break;
                case '9':
                    String += "Nine";
                    break;
            }
        }
        if (i != array.length - 1)
        {
            String += ",";
        }
    }
    return String;
}