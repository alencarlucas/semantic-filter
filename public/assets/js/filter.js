/*
    0: NÃO contém a especialidade
    1: contém especialidade
*/
var hasEspecialidad = 0;

//Array utilizado para armazenar os valores dos filtros
var filter = {'sector' : '', 'sede' : '', 'especialidad' : '', 'sector' : ''};

//Inicializa os dropdowns
$('#especialidad').dropdown();

$('#sede').dropdown();

$('#sector').dropdown();

//Atribui os valores de entrada dos filtros às variáveis e faz a busca
$(function() {
    document.getElementById('buscar').addEventListener('click', function() {
        filter['sector'] = $('#sector').val();
        filter['especialidad'] = $('#especialidad').val();
        filter['nombre'] = $('#nombre').val();
        filter['sede'] = $('#sede').val();
        search();
    });
});

/*
    Testa os filtros para cada entrada de dados e se encontrou a referência
    apresenta o nome no console
*/
function search(){
    $('.equipo-list-member').each(function() {
        var show = 1;
        hasEspecialidad = 0;
        for(var k = 1; k < $(this)[0].attributes.length; k++ ){
            /*
                Chama a função que testa os filtros para cada atributo, removendo
                números e caracteres especiais do nome do atributo ex:
                    especialidad_1 é passado com especialidad apenas
            */
            show *= execFilter($(this)[0].attributes[k].localName.replace(/[^A-Za-z]/g, ''), $(this)[0].attributes[k].nodeValue);
        }
        /*
            Se os filtros estão aderentes a todos os parâmetros mostra o elemento
            no html, caso contrário esconde
        */
        if(show){
            $(this).show();
        }
        else{
            $(this).hide();
        }
    });
}

//Testa aderência aos filtros
function execFilter(index, value) {
    // Testa se os parâmetros são relevantes
    if(index != 'especialidad' && index != 'sector' && index != 'nombre' && index != 'sede')
        return 1;
    // Se já foi verificado que existe a especialidade não testa de novo
    if(index == 'especialidad' && hasEspecialidad == 1)
        return 1;
    /*
        Condição que testa igualdade para todos os parâmetros, mas para nombre
        testa se está contido (igualdade parcial)
    */
    if(index != 'nombre'){
        if (filter[index] != '' && filter[index].toLowerCase() != value.toLowerCase())
            return 0;
    }
    else{
        if (filter[index] != '' && value.toLowerCase().indexOf(filter[index].toLowerCase()) < 0)
            return 0;
    }
    // Se encontrou especialidade ativa a flag
    if(index == 'especialidad')
        hasEspecialidad = 1;
    return 1;
}
