// ============================================================
// FIREBASE - BANCO DE DADOS CENTRAL
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
    get,
    update,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

let db = null;
let firebaseAtivo = false;

try {
    if (firebaseConfig?.apiKey && !firebaseConfig.apiKey.startsWith("COLOQUE_")) {
        const app = initializeApp(firebaseConfig);
        db = getDatabase(app);
        firebaseAtivo = true;
        window.db = db;
        window.ref = ref;
        window.set = set;
        console.log("Firebase conectado. Banco de dados central ativo.");
    } else {
        console.warn("Firebase ainda não configurado. O sistema usará o modo local.");
    }
} catch (erro) {
    console.error("Falha ao iniciar Firebase:", erro);
}

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
// 2. ELEMENTOS DA INTERFACE
// ============================================================
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

let ultimoResultadoTAF = null;


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
// 7. FAIXAS ETÁRIAS / ÍNDICES DO PDF OFICIAL
// ============================================================

// As faixas abaixo foram transcritas do PDF Novos_Indices_TAF.pdf.
// O PDF possui algumas faixas específicas por exercício (por exemplo,
// abdominal masculino bélico usa 38-39) e regras especiais de
// suficiência / não realização. Por isso a faixa é localizada por evento.

const TABELAS = {
    "belico-M": {
        corrida: {
            "18-21":[2600,2800,3150,3200], "22-25":[2700,2850,3100,3250],
            "26-29":[2600,2750,3000,3150], "30-33":[2550,2650,2900,3100],
            "34-37":[2450,2550,2800,2950], "38-41":[2350,2450,2700,2850],
            "42-45":[2250,2400,2600,2750], "46-49":[2150,2300,2500,2650],
            "50-53":{tipo:"suficiencia",min:1900}, "54-57":{tipo:"suficiencia",min:1800},
            "58-61":{tipo:"suficiencia",min:1600}, "62-65":{tipo:"suficiencia",min:1400}
        },
        flexao: {
            "18-21":[22,25,34,39], "22-25":[24,27,36,41], "26-29":[22,25,34,39],
            "30-33":[21,24,31,37], "34-37":[18,21,28,34], "38-41":[17,20,27,32],
            "42-45":[15,18,24,29], "46-49":[12,15,21,26],
            "50-53":{tipo:"suficiencia",min:11}, "54-57":{tipo:"suficiencia",min:9},
            "58-61":{tipo:"suficiencia",min:8}, "62-65":{tipo:"suficiencia",min:6}
        },
        abdominal: {
            "18-21":[34,44,63,73], "22-25":[41,51,68,78], "26-29":[37,48,65,75],
            "30-33":[33,42,60,69], "34-37":[30,39,56,65], "38-41":[28,37,54,63],
            "42-45":[26,35,52,61], "46-49":[24,33,50,59],
            "50-53":{tipo:"suficiencia",min:23}, "54-57":{tipo:"suficiencia",min:21},
            "58-61":{tipo:"suficiencia",min:19}, "62-65":{tipo:"suficiencia",min:17}
        },
        barra: {
            "18-21":[5,7,10,12], "22-25":[6,8,11,13], "26-29":[5,7,10,12],
            "30-33":[5,6,9,11], "34-37":[4,5,7,9], "38-39":[3,4,5,6],
            "40-45":{tipo:"suficiencia",min:2}, "46-49":{tipo:"suficiencia",min:1},
            "50-53":{tipo:"nao-realiza"}, "54-57":{tipo:"nao-realiza"},
            "58-61":{tipo:"nao-realiza"}, "62-65":{tipo:"nao-realiza"}
        }
    },

    "belico-F": {
        corrida: {
            "18-21":[2100,2200,2400,2600], "22-25":[2150,2250,2450,2650],
            "26-29":[2100,2200,2400,2600], "30-33":[2050,2150,2350,2550],
            "34-37":[2000,2100,2300,2500], "38-41":[1900,2000,2250,2450],
            "42-45":[1850,1950,2200,2400], "46-49":[1750,1850,2050,2250],
            "50-53":{tipo:"suficiencia",min:1900}, "54-57":{tipo:"suficiencia",min:1800},
            "58-61":{tipo:"suficiencia",min:1600}, "62-65":{tipo:"suficiencia",min:1400}
        },
        flexao: {
            "18-21":[11,12,17,25], "22-25":[12,13,19,27], "26-29":[11,12,17,25],
            "30-33":[10,11,16,24], "34-37":[9,10,13,21], "38-41":[8,9,12,20],
            "42-45":[6,8,11,18], "46-49":[6,7,10,14],
            "50-53":{tipo:"suficiencia",min:11}, "54-57":{tipo:"suficiencia",min:9},
            "58-61":{tipo:"suficiencia",min:8}, "62-65":{tipo:"suficiencia",min:6}
        },
        abdominal: {
            "18-21":[30,39,55,64], "22-25":[32,41,57,66], "26-29":[31,40,56,65],
            "30-33":[29,38,54,63], "34-37":[27,36,52,61], "38-41":[25,34,50,59],
            "42-45":[23,32,48,57], "46-49":[21,30,46,55],
            "50-53":{tipo:"suficiencia",min:20}, "54-57":{tipo:"suficiencia",min:18},
            "58-61":{tipo:"suficiencia",min:16}, "62-65":{tipo:"suficiencia",min:14}
        },
        barra: {
            "18-21":[0,1,3,5], "22-25":[0,1,3,5], "26-29":[0,1,2,5],
            "30-33":[0,1,2,5], "34-37":[0,1,2,4], "38-39":[0,1,2,3],
            "40-45":{tipo:"suficiencia",min:45,unidade:"segundos"},
            "46-49":{tipo:"suficiencia",min:30,unidade:"segundos"},
            "50-53":{tipo:"nao-realiza"}, "54-57":{tipo:"nao-realiza"},
            "58-61":{tipo:"nao-realiza"}, "62-65":{tipo:"nao-realiza"}
        }
    },

    "tecnologico-M": {
        corrida: {
            "18-21":[2100,2200,2450,2600], "22-25":[2150,2250,2450,2650],
            "26-29":[2100,2200,2400,2600], "30-33":[2050,2150,2350,2550],
            "34-37":[2000,2100,2300,2500], "38-41":[1900,2000,2200,2400],
            "42-45":[1850,1950,2150,2300], "46-49":[1750,1850,2050,2200],
            "50-53":{tipo:"suficiencia",min:1600}, "54-57":{tipo:"suficiencia",min:1500},
            "58-61":{tipo:"suficiencia",min:1300}, "62-65":{tipo:"suficiencia",min:1100}
        },
        flexao: {
            "18-21":[10,11,16,20], "22-25":[11,12,18,22], "26-29":[10,11,16,20],
            "30-33":[9,10,15,19], "34-37":[8,9,14,18], "38-41":[7,8,13,17],
            "42-45":[6,7,12,16], "46-49":[5,6,10,14],
            "50-53":{tipo:"suficiencia",min:5}, "54-57":{tipo:"suficiencia",min:4},
            "58-61":{tipo:"suficiencia",min:3}, "62-65":{tipo:"suficiencia",min:2}
        },
        abdominal: {
            "18-21":[34,44,63,73], "22-25":[41,51,68,78], "26-29":[37,48,65,75],
            "30-33":[33,42,60,69], "34-37":[30,39,56,65], "38-41":[28,37,54,63],
            "42-45":[26,35,52,61], "46-49":[24,33,50,59],
            "50-53":{tipo:"suficiencia",min:23}, "54-57":{tipo:"suficiencia",min:21},
            "58-61":{tipo:"suficiencia",min:19}, "62-65":{tipo:"suficiencia",min:17}
        },
        barra: {
            "18-21":{tipo:"nao-realiza"}, "22-25":{tipo:"nao-realiza"}, "26-29":{tipo:"nao-realiza"},
            "30-33":{tipo:"nao-realiza"}, "34-37":{tipo:"nao-realiza"}, "38-41":{tipo:"nao-realiza"},
            "42-45":{tipo:"nao-realiza"}, "46-49":{tipo:"nao-realiza"},
            "50-53":{tipo:"nao-realiza"}, "54-57":{tipo:"nao-realiza"},
            "58-61":{tipo:"nao-realiza"}, "62-65":{tipo:"nao-realiza"}
        }
    },

    "tecnologico-F": {
        corrida: {
            "18-21":[2600,2700,2900,3000], "22-25":[2700,2800,2950,3050],
            "26-29":[2600,2700,2850,2950], "30-33":[2550,2650,2800,2900],
            "34-37":[2450,2550,2650,2750], "38-41":[2350,2450,2550,2650],
            "42-45":[2250,2350,2500,2600], "46-49":[2150,2300,2400,2500],
            "50-53":{tipo:"suficiencia",min:1900}, "54-57":{tipo:"suficiencia",min:1800},
            "58-61":{tipo:"suficiencia",min:1600}, "62-65":{tipo:"suficiencia",min:1400}
        },
        flexao: {
            "18-21":[10,11,14,16], "22-25":[11,12,15,17], "26-29":[10,11,14,16],
            "30-33":[9,10,13,15], "34-37":[8,9,12,14], "38-41":[7,8,11,13],
            "42-45":[6,7,10,12], "46-49":[5,6,9,11],
            "50-53":{tipo:"suficiencia",min:5}, "54-57":{tipo:"suficiencia",min:4},
            "58-61":{tipo:"suficiencia",min:3}, "62-65":{tipo:"suficiencia",min:2}
        },
        abdominal: {
            "18-21":[30,39,55,64], "22-25":[32,41,57,66], "26-29":[31,40,56,65],
            "30-33":[29,38,54,63], "34-37":[27,36,52,61], "38-41":[25,34,50,59],
            "42-45":[23,32,48,57], "46-49":[21,30,46,55],
            "50-53":{tipo:"suficiencia",min:19}, "54-57":{tipo:"suficiencia",min:17},
            "58-61":{tipo:"suficiencia",min:15}, "62-65":{tipo:"suficiencia",min:13}
        },
        barra: {
            "18-21":{tipo:"nao-realiza"}, "22-25":{tipo:"nao-realiza"}, "26-29":{tipo:"nao-realiza"},
            "30-33":{tipo:"nao-realiza"}, "34-37":{tipo:"nao-realiza"}, "38-41":{tipo:"nao-realiza"},
            "42-45":{tipo:"nao-realiza"}, "46-49":{tipo:"nao-realiza"},
            "50-53":{tipo:"nao-realiza"}, "54-57":{tipo:"nao-realiza"},
            "58-61":{tipo:"nao-realiza"}, "62-65":{tipo:"nao-realiza"}
        }
    }
};

function encontrarFaixa(tabelaEvento, idade) {
    for (const faixa of Object.keys(tabelaEvento || {})) {
        const [inicio, fim] = faixa.split("-").map(Number);
        if (idade >= inicio && idade <= fim) return faixa;
    }
    return null;
}

function conceitoRegular(valor, limites) {
    if (valor >= limites[3]) return "E";
    if (valor >= limites[2]) return "MB";
    if (valor >= limites[1]) return "B";
    if (valor >= limites[0]) return "R";
    return "I";
}

function avaliar(evento, valor, tabela, idade) {
    const tabelaEvento = tabela?.[evento];
    if (!tabelaEvento) return "NÃO REALIZA";

    const faixa = encontrarFaixa(tabelaEvento, idade);
    if (!faixa) return "FORA DA FAIXA";

    const regra = tabelaEvento[faixa];
    if (!regra) return "NÃO REALIZA";

    if (regra.tipo === "nao-realiza") return "NÃO REALIZA";

    if (regra.tipo === "suficiencia") {
        return valor >= regra.min ? "SUFICIÊNCIA" : "I";
    }

    return conceitoRegular(valor, regra);
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

    ultimoResultadoTAF = {
        corrida: conceitoCorrida,
        flexao: conceitoFlexao,
        abdominal: conceitoAbdominal,
        barra: conceitoBarra
    };

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
// FIREBASE - FUNÇÕES DO BANCO CENTRAL
// ============================================================

async function sincronizarMilitaresComBanco() {
    if (!firebaseAtivo || !db) return;

    const tarefas = militares.map((militar, indice) => {
        const militarBanco = {
            id: indice + 1,
            nomeCompleto: militar.nomeCompleto,
            nomeGuerra: militar.nomeGuerra,
            nascimento: militar.nascimento,
            posto: militar.posto,
            om: militar.om
        };
        return set(ref(db, `militares/${indice + 1}`), militarBanco);
    });

    await Promise.all(tarefas);
    console.log(`${militares.length} militares sincronizados com o Firebase.`);
}

async function salvarAvaliacaoNoFirebase() {
    if (!firebaseAtivo || !db) return null;
    if (!militarSelecionado || !ultimoResultadoTAF) return null;

    const registro = {
        militar: {
            nomeCompleto: militarSelecionado.nomeCompleto,
            nomeGuerra: militarSelecionado.nomeGuerra,
            posto: militarSelecionado.posto,
            om: militarSelecionado.om,
            nascimento: militarSelecionado.nascimento
        },
        avaliacao: {
            data: dataAvaliacao.value,
            idade: idadeNaData(militarSelecionado.nascimento, dataAvaliacao.value),
            sexo: sexo.value,
            linha: linha.value
        },
        resultados: {
            corrida: Number(corrida.value),
            flexao: Number(flexao.value),
            abdominal: Number(abdominal.value),
            barra: Number(barra.value)
        },
        conceitos: { ...ultimoResultadoTAF },
        dataRegistro: new Date().toISOString()
    };

    const novaAvaliacao = push(ref(db, "avaliacoes"));
    await set(novaAvaliacao, registro);
    console.log("Avaliação gravada no Firebase:", novaAvaliacao.key);
    return novaAvaliacao.key;
}

// ============================================================
// SALVAR TAF
// ============================================================

salvarTAF.addEventListener("click", async function () {

    if (!militarSelecionado) {
        alert("Primeiro selecione um militar.");
        return;
    }

    if (!ultimoResultadoTAF) {
        alert("Primeiro clique em 'Calcular TAF'.");
        return;
    }

    if (
        !dataAvaliacao.value ||
        !sexo.value ||
        !linha.value ||
        corrida.value === "" ||
        flexao.value === "" ||
        abdominal.value === "" ||
        barra.value === ""
    ) {
        alert("Preencha todos os dados da avaliação antes de salvar.");
        return;
    }

    const idade = idadeNaData(
        militarSelecionado.nascimento,
        dataAvaliacao.value
    );

    const registro = {
        id: Date.now(),
        dataSalvamento: new Date().toISOString(),
        militar: {
            nomeCompleto: militarSelecionado.nomeCompleto,
            nomeGuerra: militarSelecionado.nomeGuerra,
            posto: militarSelecionado.posto,
            om: militarSelecionado.om,
            nascimento: militarSelecionado.nascimento
        },
        avaliacao: {
            data: dataAvaliacao.value,
            idade,
            sexo: sexo.value,
            linha: linha.value
        },
        resultados: {
            corrida: Number(corrida.value),
            flexao: Number(flexao.value),
            abdominal: Number(abdominal.value),
            barra: Number(barra.value)
        },
        conceitos: { ...ultimoResultadoTAF }
    };

    // Mantém cópia local para funcionamento offline.
    const historico = JSON.parse(localStorage.getItem("historicoTAF")) || [];
    historico.push(registro);
    localStorage.setItem("historicoTAF", JSON.stringify(historico));

    try {
        if (firebaseAtivo) {
            await salvarAvaliacaoNoFirebase();
            alert("TAF salvo no banco de dados com sucesso!");
            carregarHistoricoFirebase();
        } else {
            alert("TAF salvo localmente. Configure o Firebase para salvar no banco central.");
        }
    } catch (erro) {
        console.error("Erro ao salvar no Firebase:", erro);
        alert("Não foi possível salvar no banco. O TAF ficou salvo localmente neste navegador.");
    }

    renderizarHistorico();
});


// ============================================================
// 20. HISTÓRICO DE TAF
// ============================================================

const filtroHistorico = document.getElementById("filtroHistorico");
const limparFiltro = document.getElementById("limparFiltro");
const atualizarHistorico = document.getElementById("atualizarHistorico");
const listaHistorico = document.getElementById("listaHistorico");
const historicoResumo = document.getElementById("historicoResumo");

function obterHistorico() {
    try {
        return JSON.parse(localStorage.getItem("historicoTAF")) || [];
    } catch (erro) {
        console.error("Erro ao ler histórico:", erro);
        return [];
    }
}

function escaparHTML(texto) {
    return String(texto ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function conceitoRegistro(registro, campo) {
    return registro.conceitos?.[campo] || "—";
}

function renderizarHistoricoLista(historico) {
    const termo = normalizar(filtroHistorico?.value || "");

    historico.sort((a, b) => {
        const da = new Date(a.avaliacao?.data || a.dataSalvamento || a.dataRegistro || 0).getTime();
        const db = new Date(b.avaliacao?.data || b.dataSalvamento || b.dataRegistro || 0).getTime();
        return db - da;
    });

    const filtrados = historico.filter(registro => {
        const nome = normalizar(registro.militar?.nomeCompleto || registro.nomeCompleto || "");
        const guerra = normalizar(registro.militar?.nomeGuerra || registro.nomeGuerra || "");
        return !termo || nome.includes(termo) || guerra.includes(termo);
    });

    historicoResumo.textContent = `${filtrados.length} avaliação(ões) encontrada(s)`;

    if (!filtrados.length) {
        listaHistorico.innerHTML = `
            <div class="historico-vazio">
                <strong>Nenhum TAF encontrado.</strong>
                <span>Os registros aparecerão aqui quando forem salvos.</span>
            </div>
        `;
        return;
    }

    listaHistorico.innerHTML = filtrados.map(registro => {
        const militar = registro.militar || registro;
        const avaliacao = registro.avaliacao || {};
        const resultados = registro.resultados || {};
        const data = avaliacao.data ? formatarData(avaliacao.data) : "—";

        return `
            <article class="historico-item">
                <div class="historico-item-topo">
                    <div>
                        <h3>${escaparHTML(militar.nomeCompleto || "Militar")}</h3>
                        <p>${escaparHTML(militar.nomeGuerra || "")} · ${escaparHTML(militar.posto || "")}</p>
                    </div>
                    <span class="historico-data">${escaparHTML(data)}</span>
                </div>
                <div class="historico-detalhes">
                    <div><small>Corrida</small><strong>${escaparHTML(resultados.corrida)} m</strong><b>${escaparHTML(conceitoRegistro(registro,"corrida"))}</b></div>
                    <div><small>Flexão</small><strong>${escaparHTML(resultados.flexao)}</strong><b>${escaparHTML(conceitoRegistro(registro,"flexao"))}</b></div>
                    <div><small>Abdominal</small><strong>${escaparHTML(resultados.abdominal)}</strong><b>${escaparHTML(conceitoRegistro(registro,"abdominal"))}</b></div>
                    <div><small>Barra</small><strong>${escaparHTML(resultados.barra)}</strong><b>${escaparHTML(conceitoRegistro(registro,"barra"))}</b></div>
                </div>
                <div class="historico-meta">
                    <span>${escaparHTML(avaliacao.idade)} anos</span>
                    <span>${escaparHTML(avaliacao.sexo || "")}</span>
                    <span>${escaparHTML(avaliacao.linha || "")}</span>
                    ${registro._firebaseId ? `<button type="button" class="botao-excluir" data-firebase-id="${escaparHTML(registro._firebaseId)}">Excluir</button>` : `<button type="button" class="botao-excluir" data-id="${escaparHTML(registro.id)}">Excluir</button>`}
                </div>
            </article>
        `;
    }).join("");

    listaHistorico.querySelectorAll(".botao-excluir").forEach(botao => {
        botao.addEventListener("click", async () => {
            if (!confirm("Excluir este TAF do histórico?")) return;

            if (botao.dataset.firebaseId && firebaseAtivo) {
                try {
                    await remove(ref(db, `avaliacoes/${botao.dataset.firebaseId}`));
                    alert("TAF excluído do banco de dados.");
                    carregarHistoricoFirebase();
                } catch (erro) {
                    console.error(erro);
                    alert("Não foi possível excluir o TAF do banco.");
                }
            } else {
                const id = Number(botao.dataset.id);
                const atualizado = obterHistorico().filter(item => Number(item.id) !== id);
                localStorage.setItem("historicoTAF", JSON.stringify(atualizado));
                renderizarHistoricoLista(atualizado);
            }
        });
    });
}

function renderizarHistorico() {
    renderizarHistoricoLista(obterHistorico());
}

function carregarHistoricoFirebase() {
    if (!firebaseAtivo || !db) {
        renderizarHistorico();
        return;
    }

    onValue(ref(db, "avaliacoes"), (snapshot) => {
        const dados = snapshot.val() || {};
        const historico = Object.entries(dados).map(([id, registro]) => ({
            ...registro,
            _firebaseId: id
        }));

        // Mantém o cache local alinhado ao banco para consulta offline.
        localStorage.setItem("historicoTAF", JSON.stringify(historico));
        renderizarHistoricoLista(historico);
    }, (erro) => {
        console.error("Erro ao carregar histórico do Firebase:", erro);
        renderizarHistorico();
    });
}


// ============================================================
// ATUALIZAR CONCEITOS DOS TAFs JÁ SALVOS
// Recalcula os conceitos usando a tabela oficial atual e grava
// novamente no Firebase. Também atualiza a cópia do localStorage.
// ============================================================

async function atualizarConceitosHistoricos() {
    if (!firebaseAtivo || !db) {
        const historicoLocal = obterHistorico();
        let atualizadosLocal = 0;

        const novoHistorico = historicoLocal.map(registro => {
            const avaliacao = registro.avaliacao || {};
            const resultados = registro.resultados || {};
            const nascimento = registro.militar?.nascimento;

            if (!avaliacao.sexo || !avaliacao.linha || !avaliacao.data || !nascimento) {
                return registro;
            }

            const idade = idadeNaData(nascimento, avaliacao.data);
            const tabela = TABELAS[`${avaliacao.linha}-${avaliacao.sexo}`];

            if (!tabela) return registro;

            const conceitos = {
                corrida: avaliar("corrida", Number(resultados.corrida), tabela, idade),
                flexao: avaliar("flexao", Number(resultados.flexao), tabela, idade),
                abdominal: avaliar("abdominal", Number(resultados.abdominal), tabela, idade),
                barra: avaliar("barra", Number(resultados.barra), tabela, idade)
            };

            if (
                registro.conceitos?.corrida !== conceitos.corrida ||
                registro.conceitos?.flexao !== conceitos.flexao ||
                registro.conceitos?.abdominal !== conceitos.abdominal ||
                registro.conceitos?.barra !== conceitos.barra ||
                Number(avaliacao.idade) !== Number(idade)
            ) {
                atualizadosLocal++;
            }

            return {
                ...registro,
                avaliacao: { ...avaliacao, idade },
                conceitos
            };
        });

        localStorage.setItem("historicoTAF", JSON.stringify(novoHistorico));
        renderizarHistoricoLista(novoHistorico);
        alert(`${atualizadosLocal} avaliação(ões) atualizada(s) localmente.`);
        return;
    }

    try {
        const snapshot = await get(ref(db, "avaliacoes"));
        const dados = snapshot.val() || {};
        const updates = {};
        const historicoAtualizado = [];
        let alterados = 0;
        let analisados = 0;

        for (const [id, registroOriginal] of Object.entries(dados)) {
            const registro = { ...registroOriginal };
            const avaliacao = registro.avaliacao || {};
            const resultados = registro.resultados || {};
            const nascimento = registro.militar?.nascimento;

            if (!avaliacao.sexo || !avaliacao.linha || !avaliacao.data || !nascimento) {
                historicoAtualizado.push({ ...registro, _firebaseId: id });
                continue;
            }

            const idade = idadeNaData(nascimento, avaliacao.data);
            const tabela = TABELAS[`${avaliacao.linha}-${avaliacao.sexo}`];

            if (!tabela) {
                historicoAtualizado.push({ ...registro, _firebaseId: id });
                continue;
            }

            analisados++;

            const conceitos = {
                corrida: avaliar("corrida", Number(resultados.corrida), tabela, idade),
                flexao: avaliar("flexao", Number(resultados.flexao), tabela, idade),
                abdominal: avaliar("abdominal", Number(resultados.abdominal), tabela, idade),
                barra: avaliar("barra", Number(resultados.barra), tabela, idade)
            };

            const conceitosAntigos = registro.conceitos || {};
            const mudouConceito =
                conceitosAntigos.corrida !== conceitos.corrida ||
                conceitosAntigos.flexao !== conceitos.flexao ||
                conceitosAntigos.abdominal !== conceitos.abdominal ||
                conceitosAntigos.barra !== conceitos.barra;

            const mudouIdade = Number(avaliacao.idade) !== Number(idade);

            if (mudouConceito || mudouIdade) {
                updates[`avaliacoes/${id}/conceitos`] = conceitos;
                updates[`avaliacoes/${id}/avaliacao/idade`] = idade;
                alterados++;
            }

            historicoAtualizado.push({
                ...registro,
                avaliacao: { ...avaliacao, idade },
                conceitos,
                _firebaseId: id
            });
        }

        if (Object.keys(updates).length) {
            await update(ref(db), updates);
        }

        localStorage.setItem("historicoTAF", JSON.stringify(historicoAtualizado));
        renderizarHistoricoLista(historicoAtualizado);

        alert(
            `Atualização concluída.\n\n` +
            `Avaliações analisadas: ${analisados}\n` +
            `Avaliações alteradas: ${alterados}`
        );

        console.log("Atualização dos históricos concluída:", {
            analisados,
            alterados
        });

    } catch (erro) {
        console.error("Erro ao atualizar conceitos dos históricos:", erro);
        alert("Não foi possível atualizar os TAFs salvos. Veja o console para detalhes.");
    }
}

if (filtroHistorico) filtroHistorico.addEventListener("input", renderizarHistorico);
if (limparFiltro) limparFiltro.addEventListener("click", () => {
    filtroHistorico.value = "";
    renderizarHistorico();
});
if (atualizarHistorico) atualizarHistorico.addEventListener("click", async () => {
    await atualizarConceitosHistoricos();
});

// Inicialização do banco e do histórico.
(async function iniciarBanco() {
    if (firebaseAtivo) {
        try {
            await sincronizarMilitaresComBanco();
            carregarHistoricoFirebase();
        } catch (erro) {
            console.error("Erro ao sincronizar banco:", erro);
            renderizarHistorico();
        }
    } else {
        renderizarHistorico();
    }
})();


// Permite executar a rotina manualmente pelo console, se necessário.
window.atualizarConceitosHistoricos = atualizarConceitosHistoricos;
