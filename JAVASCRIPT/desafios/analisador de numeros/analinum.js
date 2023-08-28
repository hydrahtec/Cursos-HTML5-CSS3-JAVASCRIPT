function adicionar() {

let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

let n = Number(num.value)
let valores= []


    function isnumero(n) {
        if (n>0 && n<=100) {
            return 'true'
        } else {
            return 'false'
        }
    }

    function inlista(n,l) {
        if (l.indexOf(n) != -1) {
            return 'true'
        } else {
            return 'false'
        }
    }

    if (isnumero(n) && ! inlista(n,valores)) {
        window.alert('Tudo Ok!!')
    } else {
        window.alert('Erro, o numero que você escolheu não pode ser aceito ou já esta na lista!, verifique e tente novamente.')
    }
}
