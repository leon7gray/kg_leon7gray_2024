console.log(format(process.argv.slice(2)));

function format(array)
{ // split the numbers into individual elements in order to be converted and
    // then joined together at the end
    return array.join(',').split('').map(int => convert(int)).join('');
}

function convert(integer)
{ // convert integers into strings representing the number
    switch (integer)
    { // check each digit of the string
        case '0':
            return "Zero";
            break;
        case '1':
            return "One";
            break;
        case '2':
            return "Two";
            break;
        case '3':
            return "Three";
            break;
        case '4':
            return "Four";
            break;
        case '5':
            return "Five";
            break;
        case '6':
            return "Six";
            break;
        case '7':
            return "Seven";
            break;
        case '8':
            return "Eight";
            break;
        case '9':
            return "Nine";
            break;
        case ',':
            return ",";
            break;
    }
}