a = '';
b = '';
c = true;
zn = true;
out = document.querySelector('#window');
out1 = document.querySelector('#inp')
out1.value = 0;
Use = (event) => {
    content = event.target.textContent;
    switch (content) {
        case '/':
            if (zn) {
                a = divide(a);
                out.value = b;
                out1.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '*':
            if (zn) {
                a = multiply(a);
                out.value = b;
                out1.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '+':
            if (zn) {
                a = fold(a);
                out.value = b;
                out1.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '-':
            if (zn) {
                a = subtract(a);
                out.value = b;
                out1.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case 'C':
            a = clear(a);
            out1.value = a;
            out.value = a;
            a = '';
            break;
        case '<-':
            a = erase(a);
            out1.value = a;
            out.value = b + a;
            break;
        case '=':
            a = calculate(a);
            out1.value = a;
            out.value = '';
            b = '';
            a = '';
            break;
        case '.':
            a = real(a);
            out1.value = a;
            out.value = b + a;
            break;
        default:
            zn = true;
            a += event.target.textContent;
            out.value = b + a;
            out1.value = a;
    }
}
calculate = (a) => {
    a = eval(b + a);
    c = true;
    zn = true;
    return a;
}
clear = (a) => {
    a = '0';
    b = '';
    c = true;
    zn = true;
    return a;
}
erase = (a) => {
    
    if (!a == '') {
        console.log(1);
        a = a.substr(0, a.length - 1);
        b += a;
        b = b.substr(0, b.length - a.length);
    } else {
        console.log(12);
        b = '';
        return 0;
    }

    return a;
}
real = (a) => {
    if (c) {
        a += '.';
        c = false;
        return a;
    }
    else return a;
}
multiply = (a) => {
    if (zn) {
        b += a + ' *';
        a = '* ';
        c = true;
        zn = false;
        return a;
    } else return a;
}
divide = (a) => {
    if (zn) {
        b += a + ' /';
        a = '/ ';
        c = true;
        zn = false;
        return a;
    } else return a;
}
subtract = (a) => {
    if (zn) {
        b += a + ' -';
        a = '- ';
        c = true;
        zn = false;
        return a;
    } else return a;
}
fold = (a) => {
    if (zn) {
        b += a + ' +'
        a = '+';
        c = true;
        zn = false;
        return a;
    } else return a;
}
document.querySelectorAll("td").forEach(element => {
    element.addEventListener("click", Use);
})