function idade() {
    var fnasci=window.document.getElementById('nasc')   
    var nasci=Number(fnasci.value)

    var resu=window.document.getElementById('res')
    resu.innerText=`Seu ano de nascimento é ${nasci}`
}