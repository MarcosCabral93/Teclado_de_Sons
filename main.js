
function tocaSom(idSom) {
    document.querySelector(`#som_${idSom}`).play()
}
const listaTec = document.querySelectorAll('.tecla')

for (x = 0; x < listaTec.length; x++) {
    let tecla = listaTec[x]
    let nomeInstr = tecla.classList[1]
    tecla.onclick = () => {
        tocaSom(nomeInstr)
    }
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
