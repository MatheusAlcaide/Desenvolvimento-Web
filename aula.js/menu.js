const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    const dia = document.getElementById("dia").value;

    switch (dia) {
        case "1":
            resultado.textContent = "Cachorro Quente";
            break;

        case "2":
            resultado.textContent = "Cachorro Morno";
            break;

        case "3":
            resultado.textContent = "Cachorro Frio";
            break;

        case "4":
            resultado.textContent = "Gato Gelado";
            break;

        case "5":
            resultado.textContent = "Gato Quente";
            break;

        default:
            resultado.textContent = "Selecione um lanche";
    }
});