function carregar() {
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagen')
    var cum=window.document.getElementById('cum')
    var data= new Date()
    var hora= data.getHours()

    msg.innerHTML= `Agora são exatamente ${hora} horas.`

    if (hora>=0 && hora<12) {
        img.src= 'img-manha-p.png'
        document.body.style.background= '#BE8D5C'
        cum.innerHTML=`<strong>Bom dia!!</strong>`
    } else if (hora>=12 && hora<18) {
        img.src =  'img-tarde-p.png'
        document.body.style.background= '#8698B0'
        cum.innerHTML=`<strong>Boa tarde!!</strong>`
    } else {
        img.src =  'img-noite-p.png'
        document.body.style.background= '#152331'
        cum.innerHTML=`<strong>Boa noite!!</strong>`
    }
}