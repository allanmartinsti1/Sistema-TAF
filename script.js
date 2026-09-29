// ============================================================
// SISTEMA TAF
// 2º Tenente Martins
// ============================================================


// ============================================================
// 1. DADOS DOS MILITARES
// ============================================================

const militares = [

    {
        nomeCompleto: "EVANDRO LUIS AMORIM ROCHA",
        nomeGuerra: "AMORIM",
        nascimento: "1972-05-11",
        posto: "Gen Bda",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "EMMANUEL ARAUJO MACHADO",
        nomeGuerra: "EMMANUEL",
        nascimento: "1977-09-17",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "LEONARDO WERNECK VIEIRA",
        nomeGuerra: "WERNECK",
        nascimento: "1977-04-21",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "MARCELO VITOR JOSÉ ALVES",
        nomeGuerra: "VITOR",
        nascimento: "1975-06-11",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "PEDRO HENRIQUE BAKO DIOGO",
        nomeGuerra: "BAKO",
        nascimento: "1980-07-15",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RAFAEL DE FREITAS ALMEIDA CUNHA",
        nomeGuerra: "FREITAS ALMEIDA",
        nascimento: "1980-05-08",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RICARDO DE AMORIM ARAÚJO PEREIRA",
        nomeGuerra: "AMORIM",
        nascimento: "1976-08-31",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RICARDO RUANITO NASCIMENTO FIGUEREDO",
        nomeGuerra: "FIGUEREDO",
        nascimento: "1980-06-25",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RODRIGO MACHADO DE ALBUQUERQUE",
        nomeGuerra: "ALBUQUERQUE",
        nascimento: "1979-05-12",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "SALZIO NUNES DE LIMA",
        nomeGuerra: "SALZIO",
        nascimento: "1979-03-23",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "THIAGO ALEXANDRE DA SILVA FATORELLI",
        nomeGuerra: "FATORELLI",
        nascimento: "1978-02-23",
        posto: "Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ANA CLARA DA SILVA FONSECA",
        nomeGuerra: "CLARA",
        nascimento: "1976-10-25",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ANDRÉ LUIZ DE OLIVEIRA MARTINIANO",
        nomeGuerra: "ANDRÉ LUIZ",
        nascimento: "1974-08-31",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ALEXANDRE NORIYOSHI CÔRTES MASSUNARI",
        nomeGuerra: "MASSUNARI",
        nascimento: "1981-08-27",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "GUSTAVO FLORES SEBALHOS",
        nomeGuerra: "SEBALHOS",
        nascimento: "1978-09-06",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "MÁRCIA PEREIRA DA COSTA DIAS",
        nomeGuerra: "MÁRCIA DIAS",
        nascimento: "1971-02-26",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "REGINALDO LEMES TUNISSE",
        nomeGuerra: "TUNISSE",
        nascimento: "1968-03-24",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RODRIGO MEDEIROS DA SILVA",
        nomeGuerra: "MEDEIROS",
        nascimento: "1979-03-06",
        posto: "Ten Cel",
        om: "Ba Av T"
    },

    {
        nomeCompleto: "SAULO MAGALHÃES DE CARVALHO VILA NOVA",
        nomeGuerra: "VILA NOVA",
        nascimento: "1980-07-18",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "SEBASTIÃO FIRMINO DE SOUZA JUNIOR",
        nomeGuerra: "FIRMINO",
        nascimento: "1981-07-14",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ADALTO DA SILVEIRA",
        nomeGuerra: "ADALTO",
        nascimento: "1983-01-30",
        posto: "Maj",
        om: "CIAvEx"
    },

    {
        nomeCompleto: "ANDERSON CRISTIANO KÜHL DE MENEZES",
        nomeGuerra: "ANDERSON",
        nascimento: "1971-01-04",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "AWIRE ESPINDOLA BUCHAUL",
        nomeGuerra: "BUCHAUL",
        nascimento: "1983-02-17",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "BRUNO BELLO DA SILVA",
        nomeGuerra: "BRUNO",
        nascimento: "1984-06-08",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "BRUNO LUIZ CURTI RODRIGUEZ",
        nomeGuerra: "CURTI",
        nascimento: "1985-11-23",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "CESAR MEIRA ARAUJO",
        nomeGuerra: "MEIRA",
        nascimento: "1983-05-25",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "DANIEL DE MATTOS RODRIGUES",
        nomeGuerra: "RODRIGUES",
        nascimento: "1984-11-01",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "DANIEL MORGADO FERRARI",
        nomeGuerra: "FERRARI",
        nascimento: "1983-08-14",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "EDUARDO HENRIQUE VIGATTO",
        nomeGuerra: "VIGATTO",
        nascimento: "1983-04-14",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "GUILHERME MISCOW FERREIRA CARNEIRO NOVAES",
        nomeGuerra: "MISCOW",
        nascimento: "1987-06-15",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "LEONARDO SANTOS HERCULANO",
        nomeGuerra: "HERCULANO",
        nascimento: "1982-04-05",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "MARCONDES URBANO FEDRIGO",
        nomeGuerra: "MARCONDES",
        nascimento: "1985-07-23",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RAFAEL SEIDY MILLE TAKEMOTO",
        nomeGuerra: "TAKEMOTO",
        nascimento: "1983-08-03",
        posto: "Ten Cel",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RAPHAEL GOMES CORTES",
        nomeGuerra: "CORTES",
        nascimento: "1983-04-29",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RODRIGO OLIVEIRA FIGUEIRA",
        nomeGuerra: "RODRIGO FIGUEIRA",
        nascimento: "1988-02-01",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "RODRIGO VIEIRA ANGELO",
        nomeGuerra: "VIEIRA",
        nascimento: "1983-10-22",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "TIAGO DE BARROS CALDAS",
        nomeGuerra: "TIAGO",
        nascimento: "1981-10-08",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "TIAGO FORNECK ANDREAZZA",
        nomeGuerra: "FORNECK",
        nascimento: "1987-01-14",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "TIAGO MIRANDA DA SILVA",
        nomeGuerra: "TIAGO MIRANDA",
        nascimento: "1983-09-28",
        posto: "Maj",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ANDERSON JOSÉ DO NASCIMENTO",
        nomeGuerra: "ANDERSON",
        nascimento: "1979-08-19",
        posto: "Cap",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "JOSÉ MARCOS JUNQUEIRA REZEK FILHO",
        nomeGuerra: "REZEK",
        nascimento: "1992-10-13",
        posto: "Cap",
        om: "Ba Av T"
    },

    {
        nomeCompleto: "SARA ISABEL FLORES DE NAVARRO",
        nomeGuerra: "SARA NAVARRO",
        nascimento: "1982-03-30",
        posto: "Cap",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ALLAN CRISTOPHE DUTRA ARGUELLES",
        nomeGuerra: "ARGUELLES",
        nascimento: "1970-04-03",
        posto: "1º Ten",
        om: "Ba Av T"
    },

    {
        nomeCompleto: "AQUINO BENITES NETO",
        nomeGuerra: "AQUINO",
        nascimento: "1974-05-11",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "BIANCA PORTELLA MARTINS PEDROSO",
        nomeGuerra: "BIANCA",
        nascimento: "1993-07-21",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "EDSON GOMES DE MELLO JUNIOR",
        nomeGuerra: "MELLO",
        nascimento: "1975-04-04",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "EDSON LUÍS BIZZI",
        nomeGuerra: "EDSON LUÍS",
        nascimento: "1971-04-09",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "EVANDRO CARLOS RUVIARO",
        nomeGuerra: "RUVIARO",
        nascimento: "1974-04-06",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "FERNANDO AUGUSTO DE LIMA",
        nomeGuerra: "FERNANDO",
        nascimento: "1973-05-29",
        posto: "Cap",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "JONAS LOPES DE SOUSA",
        nomeGuerra: "JONAS",
        nascimento: "1974-10-14",
        posto: "1º Ten",
        om: "B Mnt Sup Av Ex"
    },

    {
        nomeCompleto: "JOSÉ FRANCISCO DAS CHAGAS BARBOSA",
        nomeGuerra: "CHAGAS",
        nascimento: "1973-04-13",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "LARISSA REIS DA SILVA BENTO",
        nomeGuerra: "LARISSA REIS",
        nascimento: "1988-08-25",
        posto: "1º Ten",
        om: "B Mnt Sup Av Ex"
    },

    {
        nomeCompleto: "LUIZ CARLOS CAMPOS",
        nomeGuerra: "LUIZ CAMPOS",
        nascimento: "1972-03-26",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "LUIZ MAURO DE OLIVEIRA",
        nomeGuerra: "MAURO",
        nascimento: "1971-08-07",
        posto: "1º Ten",
        om: "B Mnt Sup Av Ex"
    },

    {
        nomeCompleto: "MARCOS ARILDO FABRICIO",
        nomeGuerra: "ARILDO",
        nascimento: "1973-07-31",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "PEDRO HENRIQUE DE ANDRADE",
        nomeGuerra: "PEDRO ANDRADE",
        nascimento: "1975-02-16",
        posto: "1º Ten",
        om: "CIAvEx"
    },

    {
        nomeCompleto: "RODOLFO YOLMAR BARRETO FONSECA",
        nomeGuerra: "YOLMAR",
        nascimento: "1986-06-17",
        posto: "1º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "ALLAN DA SILVA MARTINS",
        nomeGuerra: "MARTINS",
        nascimento: "1992-04-11",
        posto: "2º Ten",
        om: "B Mnt Sup Av Ex"
    },

    {
        nomeCompleto: "BRUNA REBECA PEREIRA DA SILVA BALIEIRO",
        nomeGuerra: "BRUNA BALIEIRO",
        nascimento: "1988-07-18",
        posto: "2º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "CARLOS ALBERTO LUCENA JUNIOR",
        nomeGuerra: "LUCENA",
        nascimento: "1976-01-23",
        posto: "2º Ten",
        om: "CIAvEx"
    },

    {
        nomeCompleto: "RENATA DA CRUZ PAES",
        nomeGuerra: "RENATA",
        nascimento: "1991-04-16",
        posto: "2º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "MARCOS VALÉRIO BORBA DA SILVA",
        nomeGuerra: "VALÉRIO",
        nascimento: "1975-08-24",
        posto: "2º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "VAGNER PINTO MENDES",
        nomeGuerra: "MENDES",
        nascimento: "1977-11-24",
        posto: "2º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "SAMUEL LOURENÇO FERREIRA",
        nomeGuerra: "SAMUEL",
        nascimento: "1977-09-07",
        posto: "2º Ten",
        om: "Cmdo C Av Ex"
    },

    {
        nomeCompleto: "JOILSON DE ALMEIDA BASTOS",
        nomeGuerra: "BASTOS",
        nascimento: "1976-04-19",
        posto: "S Ten",
        om: "Ba Av T"
    },

    {
        nomeCompleto: "CARLA SOUZA DOS SANTOS",
        nomeGuerra: "CARLA SOUZA",
        nascimento: "1995-02-01",
        posto: "3º Sgt",
        om: "CIAvEx"
    }

];


// ============================================================
// 2. REFERÊNCIAS DOS ELEMENTOS HTML
// ============================================================

const nomeGuerra = document.getElementById("nomeGuerra");
const buscar = document.getElementById("buscar");
const dadosMilitar = document.getElementById("dadosMilitar");

const dataAvaliacao = document.getElementById("dataAvaliacao");
const idadeCalculada = document.getElementById("idadeCalculada");

const sexo = document.getElementById("sexo");
const linha = document.getElementById("linha");

const corrida = document.getElementById("corrida");
const flexao = document.getElementById("flexao");
const abdominal = document.getElementById("abdominal");
const barra = document.getElementById("barra");

const calcular = document.getElementById("calcular");
const resultadoFinal = document.getElementById("resultadoFinal");
const salvarTAF = document.getElementById("salvarTAF");


// ============================================================
// 3. VARIÁVEL DO MILITAR SELECIONADO
// ============================================================

let militarSelecionado = null;


// ============================================================
// 4. DATA PADRÃO
// ============================================================

const hoje = new Date();

const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const dia = String(hoje.getDate()).padStart(2, "0");

dataAvaliacao.value = `${ano}-${mes}-${dia}`;


// ============================================================
// 5. NORMALIZAR TEXTO
// Permite procurar MARTINS, martins ou MártinS
// ============================================================

function normalizar(texto) {

    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .trim();

}


// ============================================================
// 6. CALCULAR IDADE
// ============================================================

function idadeNaData(nascimento, data) {

    const nascimentoDate = new Date(nascimento + "T00:00:00");
    const dataDate = new Date(data + "T00:00:00");

    let idade =
        dataDate.getFullYear() -
        nascimentoDate.getFullYear();

    const mes =
        dataDate.getMonth() -
        nascimentoDate.getMonth();

    if (
        mes < 0 ||
        (
            mes === 0 &&
            dataDate.getDate() < nascimentoDate.getDate()
        )
    ) {
        idade--;
    }

    return idade;

}


// ============================================================
// 7. FAIXA ETÁRIA
// ============================================================

function faixaIdade(idade) {

    if (idade >= 18 && idade <= 21) return "18-21";
    if (idade >= 22 && idade <= 25) return "22-25";
    if (idade >= 26 && idade <= 29) return "26-29";
    if (idade >= 30 && idade <= 33) return "30-33";
    if (idade >= 34 && idade <= 37) return "34-37";
    if (idade >= 38 && idade <= 41) return "38-41";
    if (idade >= 42 && idade <= 45) return "42-45";
    if (idade >= 46 && idade <= 49) return "46-49";

    return null;

}


// ============================================================
// 8. TABELAS DE ÍNDICES
// ============================================================

const TABELAS = {

    "belico-M": {

        corrida: {
            "18-21": [2600, 2800, 3150, 3200],
            "22-25": [2700, 2850, 3100, 3250],
            "26-29": [2600, 2750, 3000, 3150],
            "30-33": [2550, 2650, 2900, 3100],
            "34-37": [2450, 2550, 2800, 2950],
            "38-41": [2350, 2450, 2700, 2850],
            "42-45": [2250, 2400, 2600, 2750],
            "46-49": [2150, 2300, 2500, 2650]
        },

        flexao: {
            "18-21": [22, 25, 34, 39],
            "22-25": [24, 27, 36, 41],
            "26-29": [22, 25, 34, 39],
            "30-33": [21, 24, 32, 37],
            "34-37": [18, 21, 29, 34],
            "38-41": [17, 20, 28, 32],
            "42-45": [15, 18, 25, 29],
            "46-49": [12, 15, 22, 26]
        },

        abdominal: {
            "18-21": [5, 7, 10, 12],
            "22-25": [6, 8, 11, 13],
            "26-29": [5, 7, 10, 12],
            "30-33": [5, 6, 9, 11],
            "34-37": [4, 5, 7, 9],
            "38-41": [3, 4, 6, 8],
            "42-45": [2, 4, 6, 8],
            "46-49": [2, 4, 6, 8]
        },

        barra: {
            "18-21": [5, 7, 10, 12],
            "22-25": [6, 8, 11, 13],
            "26-29": [5, 7, 10, 12],
            "30-33": [5, 6, 9, 11],
            "34-37": [4, 5, 7, 9],
            "38-41": [4, 5, 6, 8]
        }

    },


    "belico-F": {

        corrida: {
            "18-21": [2100, 2200, 2400, 2600],
            "22-25": [2150, 2250, 2450, 2650],
            "26-29": [2100, 2200, 2400, 2600],
            "30-33": [2050, 2150, 2350, 2550],
            "34-37": [2000, 2100, 2300, 2500],
            "38-41": [1900, 2000, 2250, 2450],
            "42-45": [1850, 1950, 2200, 2400],
            "46-49": [1750, 1850, 2050, 2250]
        },

        flexao: {
            "18-21": [11, 12, 17, 25],
            "22-25": [12, 13, 19, 27],
            "26-29": [11, 12, 17, 25],
            "30-33": [10, 11, 16, 24],
            "34-37": [9, 10, 13, 21],
            "38-41": [8, 9, 12, 20],
            "42-45": [6, 8, 11, 18],
            "46-49": [6, 7, 10, 14]
        },

        abdominal: {
            "18-21": [31, 45, 56, 65],
            "22-25": [33, 42, 58, 67],
            "26-29": [32, 41, 57, 66],
            "30-33": [30, 39, 55, 64],
            "34-37": [28, 37, 53, 62],
            "38-41": [26, 35, 51, 60],
            "42-45": [24, 33, 49, 58],
            "46-49": [22, 31, 47, 56]
        },

        barra: {
            "18-21": [1, 3, 5, 6],
            "22-25": [2, 4, 6, 7],
            "26-29": [2, 4, 5, 6],
            "30-33": [1, 3, 5, 6],
            "34-37": [1, 3, 4, 5],
            "38-41": [1, 2, 3, 4]
        }

    },


    "tecnologico-M": {

        corrida: {
            "18-21": [2100, 2200, 2450, 2600],
            "22-25": [2150, 2250, 2450, 2650],
            "26-29": [2100, 2200, 2400, 2600],
            "30-33": [2050, 2150, 2350, 2550],
            "34-37": [2000, 2100, 2300, 2500],
            "38-41": [1900, 2000, 2200, 2400],
            "42-45": [1850, 1950, 2150, 2300],
            "46-49": [1750, 1850, 2050, 2200]
        },

        flexao: {
            "18-21": [11, 12, 17, 21],
            "22-25": [12, 13, 19, 23],
            "26-29": [11, 12, 17, 21],
            "30-33": [10, 11, 16, 20],
            "34-37": [9, 10, 13, 17],
            "38-41": [8, 9, 12, 16],
            "42-45": [6, 8, 11, 14],
            "46-49": [6, 7, 10, 12]
        },

        abdominal: {
            "18-21": [35, 45, 64, 74],
            "22-25": [42, 52, 69, 79],
            "26-29": [38, 49, 66, 76],
            "30-33": [34, 43, 61, 70],
            "34-37": [31, 40, 57, 66],
            "38-41": [29, 38, 55, 64],
            "42-45": [27, 36, 53, 62],
            "46-49": [25, 34, 51, 60]
        },

        barra: {}

    },


    "tecnologico-F": {

        corrida: {
            "18-21": [2100, 2200, 2300, 2400],
            "22-25": [2150, 2250, 2350, 2450],
            "26-29": [2100, 2200, 2300, 2400],
            "30-33": [2050, 2150, 2250, 2350],
            "34-37": [2000, 2100, 2200, 2300],
            "38-41": [1900, 2000, 2150, 2250],
            "42-45": [1850, 1950, 2050, 2150],
            "46-49": [1750, 1850, 1950, 2050]
        },

        flexao: {
            "18-21": [11, 13, 16, 18],
            "22-25": [12, 14, 17, 19],
            "26-29": [11, 13, 16, 18],
            "30-33": [10, 12, 15, 17],
            "34-37": [9, 11, 14, 16],
            "38-41": [8, 10, 13, 15],
            "42-45": [7, 9, 12, 14],
            "46-49": [6, 8, 11, 13]
        },

        abdominal: {
            "18-21": [35, 45, 56, 65],
            "22-25": [33, 42, 58, 67],
            "26-29": [32, 41, 57, 66],
            "30-33": [30, 39, 55, 64],
            "34-37": [28, 37, 53, 62],
            "38-41": [26, 35, 51, 60],
            "42-45": [24, 33, 49, 58],
            "46-49": [22, 31, 47, 56]
        },

        barra: {}

    }

};


// ============================================================
// 9. CONCEITO
//
// Cada vetor possui:
// [R, B, MB, E]
//
// Abaixo de R = I
// ============================================================

function conceito(valor, limites) {

    if (valor >= limites[3]) {
        return "E";
    }

    if (valor >= limites[2]) {
        return "MB";
    }

    if (valor >= limites[1]) {
        return "B";
    }

    if (valor >= limites[0]) {
        return "R";
    }

    return "I";

}


// ============================================================
// 10. AVALIAR EVENTO
// ============================================================

function avaliar(evento, valor, tabela, idade) {

    const faixa = faixaIdade(idade);

    if (!faixa) {
        return "FORA DA FAIXA";
    }

    const limites =
        tabela[evento]?.[faixa];

    if (!limites) {
        return "NÃO REALIZA";
    }

    return conceito(valor, limites);

}


// ============================================================
// 11. COR DA CLASSIFICAÇÃO
// ============================================================

function classeConceito(conceito) {

    if (conceito === "E") {
        return "conceito-e";
    }

    if (conceito === "MB") {
        return "conceito-mb";
    }

    if (conceito === "B") {
        return "conceito-b";
    }

    if (conceito === "R") {
        return "conceito-r";
    }

    return "conceito-i";

}


// ============================================================
// 12. MOSTRAR MILITAR
// ============================================================

function mostrarMilitar() {

    if (!militarSelecionado) {
        return;
    }

    const militar = militarSelecionado;

    dadosMilitar.innerHTML = `

        <div class="militar">

            <h3>${militar.nomeCompleto}</h3>

            <p>
                <strong>Nome de guerra:</strong>
                ${militar.nomeGuerra}
            </p>

            <p>
                <strong>Posto/Graduação:</strong>
                ${militar.posto}
            </p>

            <p>
                <strong>OM:</strong>
                ${militar.om}
            </p>

            <p>
                <strong>Data de nascimento:</strong>
                ${formatarData(militar.nascimento)}
            </p>

        </div>

    `;

    atualizarIdade();

}


// ============================================================
// 13. FORMATAR DATA
// ============================================================

function formatarData(data) {

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}


// ============================================================
// 14. ATUALIZAR IDADE
// ============================================================

function atualizarIdade() {

    if (!militarSelecionado) {

        idadeCalculada.innerHTML = "";

        return;
    }

    if (!dataAvaliacao.value) {

        idadeCalculada.innerHTML = "";

        return;
    }

    const idade = idadeNaData(
        militarSelecionado.nascimento,
        dataAvaliacao.value
    );

    idadeCalculada.innerHTML = `
        <strong>Idade na data da avaliação:</strong>
        ${idade} anos
    `;

}


// ============================================================
// 15. BUSCAR MILITAR
// ============================================================

buscar.addEventListener("click", function () {

    const texto = normalizar(nomeGuerra.value);


    // Campo vazio

    if (texto === "") {

        dadosMilitar.innerHTML = `
            <div class="mensagem">
                Digite o nome de guerra.
            </div>
        `;

        militarSelecionado = null;

        return;
    }


    // Pesquisa parcial

    const encontrados = militares.filter(function (militar) {

        return normalizar(
            militar.nomeGuerra
        ).includes(texto);

    });


    // Nenhum encontrado

    if (encontrados.length === 0) {

        dadosMilitar.innerHTML = `
            <div class="mensagem erro">
                Militar não encontrado.
            </div>
        `;

        militarSelecionado = null;

        return;
    }


    // Apenas um encontrado

    if (encontrados.length === 1) {

        militarSelecionado = encontrados[0];

        mostrarMilitar();

        return;
    }


    // Mais de um encontrado

    dadosMilitar.innerHTML = `

        <div class="mensagem">

            <strong>
                Foram encontrados ${encontrados.length} militares.
            </strong>

            <p>
                Selecione o militar correto:
            </p>

        </div>

    `;


    encontrados.forEach(function (militar) {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.className = "opcao-militar";

        botao.textContent =
            `${militar.nomeCompleto} — ${militar.posto}`;


        botao.addEventListener("click", function () {

            militarSelecionado = militar;

            mostrarMilitar();

        });


        dadosMilitar.appendChild(botao);

    });

});


// ============================================================
// 16. PESQUISAR AO PRESSIONAR ENTER
// ============================================================

nomeGuerra.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        evento.preventDefault();

        buscar.click();

    }

});


// ============================================================
// 17. ALTERAÇÃO DA DATA
// ============================================================

dataAvaliacao.addEventListener("change", function () {

    atualizarIdade();

});


// ============================================================
// 18. CALCULAR TAF
// ============================================================

calcular.addEventListener("click", function () {

    // --------------------------------------------------------
    // Verificar militar
    // --------------------------------------------------------

    if (!militarSelecionado) {

        alert(
            "Primeiro selecione um militar."
        );

        return;
    }


    // --------------------------------------------------------
    // Verificar sexo
    // --------------------------------------------------------

    if (!sexo.value) {

        alert(
            "Selecione o sexo do militar."
        );

        sexo.focus();

        return;
    }


    // --------------------------------------------------------
    // Verificar linha
    // --------------------------------------------------------

    if (!linha.value) {

        alert(
            "Selecione a linha de ensino."
        );

        linha.focus();

        return;
    }


    // --------------------------------------------------------
    // Verificar data
    // --------------------------------------------------------

    if (!dataAvaliacao.value) {

        alert(
            "Informe a data da avaliação."
        );

        dataAvaliacao.focus();

        return;
    }


    // --------------------------------------------------------
    // Calcular idade
    // --------------------------------------------------------

    const idade = idadeNaData(
        militarSelecionado.nascimento,
        dataAvaliacao.value
    );


    // --------------------------------------------------------
    // Selecionar tabela
    // --------------------------------------------------------

    const chaveTabela =
        `${linha.value}-${sexo.value}`;


    const tabela =
        TABELAS[chaveTabela];


    if (!tabela) {

        alert(
            "Tabela de índices não encontrada."
        );

        return;
    }


    // --------------------------------------------------------
    // Ler resultados
    // --------------------------------------------------------

    const valorCorrida =
        Number(corrida.value);

    const valorFlexao =
        Number(flexao.value);

    const valorAbdominal =
        Number(abdominal.value);

    const valorBarra =
        Number(barra.value);


    // --------------------------------------------------------
    // Verificar preenchimento
    // --------------------------------------------------------

    if (
        corrida.value === "" ||
        flexao.value === "" ||
        abdominal.value === "" ||
        barra.value === ""
    ) {

        alert(
            "Preencha todos os resultados do TAF."
        );

        return;
    }


    // --------------------------------------------------------
    // Calcular conceitos
    // --------------------------------------------------------

    const conceitoCorrida =
        avaliar(
            "corrida",
            valorCorrida,
            tabela,
            idade
        );


    const conceitoFlexao =
        avaliar(
            "flexao",
            valorFlexao,
            tabela,
            idade
        );


    const conceitoAbdominal =
        avaliar(
            "abdominal",
            valorAbdominal,
            tabela,
            idade
        );


    const conceitoBarra =
        avaliar(
            "barra",
            valorBarra,
            tabela,
            idade
        );


    // --------------------------------------------------------
    // Mostrar resultado
    // --------------------------------------------------------

    resultadoFinal.innerHTML = `

        <div class="resumo-militar">

            <h3>
                ${militarSelecionado.nomeCompleto}
            </h3>

            <p>
                <strong>Nome de guerra:</strong>
                ${militarSelecionado.nomeGuerra}
            </p>

            <p>
                <strong>Posto/Graduação:</strong>
                ${militarSelecionado.posto}
            </p>

            <p>
                <strong>Idade:</strong>
                ${idade} anos
            </p>

            <p>
                <strong>Data da avaliação:</strong>
                ${formatarData(dataAvaliacao.value)}
            </p>

        </div>


        <div class="tabela-resultado">

            <div class="resultado-item">

                <div>
                    <strong>Corrida – 12 min</strong>

                    <span>
                        ${valorCorrida} metros
                    </span>
                </div>

                <strong
                    class="${classeConceito(conceitoCorrida)}"
                >
                    ${conceitoCorrida}
                </strong>

            </div>


            <div class="resultado-item">

                <div>
                    <strong>Flexão</strong>

                    <span>
                        ${valorFlexao} repetições
                    </span>
                </div>

                <strong
                    class="${classeConceito(conceitoFlexao)}"
                >
                    ${conceitoFlexao}
                </strong>

            </div>


            <div class="resultado-item">

                <div>
                    <strong>Abdominal</strong>

                    <span>
                        ${valorAbdominal} repetições
                    </span>
                </div>

                <strong
                    class="${classeConceito(conceitoAbdominal)}"
                >
                    ${conceitoAbdominal}
                </strong>

            </div>


            <div class="resultado-item">

                <div>
                    <strong>Barra fixa</strong>

                    <span>
                        ${valorBarra} repetições
                    </span>
                </div>

                <strong
                    class="${classeConceito(conceitoBarra)}"
                >
                    ${conceitoBarra}
                </strong>

            </div>

        </div>

    `;

});


// ============================================================
// 19. MENSAGEM DE INICIALIZAÇÃO
// ============================================================

console.log(
    "Sistema TAF carregado com sucesso."
);

console.log(
    `Militares cadastrados: ${militares.length}`
);

// ============================================================
// SALVAR TAF
// ============================================================

salvarTAF.addEventListener("click", function () {

    // Verifica se existe militar selecionado
    if (!militarSelecionado) {

        alert("Primeiro selecione um militar.");

        return;
    }


    // Verifica se os campos foram preenchidos
    if (
        !dataAvaliacao.value ||
        !sexo.value ||
        !linha.value ||
        corrida.value === "" ||
        flexao.value === "" ||
        abdominal.value === "" ||
        barra.value === ""
    ) {

        alert(
            "Preencha todos os dados da avaliação antes de salvar."
        );

        return;
    }


    // Calcula a idade
    const idade = idadeNaData(
        militarSelecionado.nascimento,
        dataAvaliacao.value
    );


    // Monta o registro
    const registro = {

        id: Date.now(),

        dataSalvamento: new Date().toISOString(),

        militar: {

            nomeCompleto:
                militarSelecionado.nomeCompleto,

            nomeGuerra:
                militarSelecionado.nomeGuerra,

            posto:
                militarSelecionado.posto,

            om:
                militarSelecionado.om,

            nascimento:
                militarSelecionado.nascimento

        },

        avaliacao: {

            data:
                dataAvaliacao.value,

            idade:
                idade,

            sexo:
                sexo.value,

            linha:
                linha.value

        },

        resultados: {

            corrida:
                Number(corrida.value),

            flexao:
                Number(flexao.value),

            abdominal:
                Number(abdominal.value),

            barra:
                Number(barra.value)

        }

    };


    // Recupera histórico existente
    const historico =
        JSON.parse(
            localStorage.getItem("historicoTAF")
        ) || [];


    // Adiciona o novo TAF
    historico.push(registro);


    // Salva novamente no navegador
    localStorage.setItem(
        "historicoTAF",
        JSON.stringify(historico)
    );


    alert(
        "TAF salvo com sucesso!"
    );


    console.log(
        "TAF salvo:",
        registro
    );

});