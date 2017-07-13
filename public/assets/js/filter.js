//Variáveis para armazenar os dados dos filtros
var sectorFilter = '';
var especialidadFilter = '';
var nombre = '';
var sede = '';

//Array de objects utilizado apenas para testes
var data = [
  {nombre : 'Carlos', sede : 'somewhere', especialidad : ['Derecho de prueba', 'Internet'], sector : 'Valencia'},
  {nombre : 'João', sede : 'somewhere', especialidad : ['Derecho Igualitario'], sector : 'Valencia'},
  {nombre : 'Maria', sede : 'somewhere', especialidad : ['Derecho societario', 'Derecho Mercantil'], sector : 'Zaragosa'},
  {nombre : 'Carlos', sede : 'somewhere', especialidad : ['Derecho societario', 'Derecho Igualitario'], sector : 'Valencia'},
];

//Inicializa os dropdowns
$('#especialidad').dropdown();

$('#sede').dropdown();

$('#sector').dropdown();

//Atribui os valores de entrada dos filtros às variáveis e faz a busca
$(function() {
    document.getElementById('buscar').addEventListener('click', function() {
        sectorFilter = $('#sector').val();
        especialidadFilter = $('#especialidad').val();
        nombreFilter = $('#nombre').val();
        sedeFilter = $('#sede').val();
        search();
    });
});

/*
    Testa os filtros para cada entrada de dados e se encontrou a referência
    apresenta o nome no console
*/
function search(){
    for(i in data){
        if(execFilter(data[i]))
            console.log(data[i]['nombre']);
  }
}

//Verifica a referência de todas as especialidades filtradas
function verifyEspecialidad(arrayEspecialidad){
    for(j in arrayEspecialidad)
        if(especialidadFilter.indexOf(arrayEspecialidad[i]) < 0)
            return 1;
    return 0;
}

//Testa aderência aos filtros
function execFilter(row) {
    if ((especialidadFilter != '') && verifyEspecialidad(row['especialidad']))
        return 0;
    if (sectorFilter != '' && sectorFilter != row['A_C_Operator_Manager__c'])
        return 0;
    if(sedeFilter != ''  && sedeFilter != row['sede'])
        return 0;
    if(nombreFilter != '' && nombreFilter != row['nombre'])
        return 0;
    return 1;
}
