function adicionar() {

let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores= []


    function isnumero(n) {
        if (Number(n)>0 && Number(n)<=100) {
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

    if (isnumero(num.value) && !inlista(num.value,valores)) {
        window.alert('Tudo Ok!!')
    } else {
        window.alert('Erro, o numero que você escolheu não pode ser aceito ou já esta na lista!, verifique e tente novamente.')
    }
}
