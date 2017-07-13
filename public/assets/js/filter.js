//Variáveis para armazenar os dados dos filtros
var hasEspecialidad = 0;
var $data;

//Array de objects utilizado apenas para testes
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
        $data = $('.equipo-list-member');
        search();
    });
});

/*
    Testa os filtros para cada entrada de dados e se encontrou a referência
    apresenta o nome no console
*/
function search(){
    for(var i = 0; i < $data.length; i++){
        var show = 1;
        hasEspecialidad = 0;
        for(var k = 1; k < $data[i].attributes.length; k++ ){
            show *= execFilter($data[i].attributes[k].localName.replace(/[^A-Za-z]/g, ''), $data[i].attributes[k].nodeValue);
        }
        if(show){
            console.log($data[i].attributes[$data[i].attributes.length - 1].nodeValue);
            $data[i].hidden = false;
        }
        else{
            $data[i].hidden = true;
        }
    }
}

//Testa aderência aos filtros
function execFilter(index, value) {
    if(index == 'hidden')
        return 1;
    if(index == 'especialidad' && hasEspecialidad == 1)
        return 1;
    if (filter[index] != '' && filter[index].toLowerCase() != value.toLowerCase())
        return 0;
    if(index == 'especialidad')
        hasEspecialidad = 1;
    return 1;
}
