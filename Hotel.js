let mult;
let garcom = 10.5;

let nome_hotel = prompt("Qual o nome do Hotel");
alert(`O nome do hotel é ${nome_hotel}`);
let nome = prompt("Qual é o seu nome?") || "Desconhecido";
alert(`Bem vindo ao ${nome_hotel}, ${nome}. É um imenso prazer ter você por aqui!`);

function senha() {
    let senha = 2678;
    if (senha == prompt("Qual é a senha?")) {
        inicio();
    } else {
        alert("Senha incorreta!");
        senha();
    }
}

function inicio() {
    let escolha = parseInt(prompt("Escolha uma opção: \n 1) Reserva \n 2) Cadastro \n 3) Hóspedes \n 4) Evento \n 5) Buffet \n 6) Auditório \n 7) Horário \n 8) Combustível \n 9) Ar condicionado"));

    switch (escolha) {
        case 1:
            diaria();
            break;
        case 2:
            cadastro();
            break;
        case 3:
            escolher();
            break;
        case 4:
            evento();
            break;
        case 5:
            buffet();
            break;
        case 6:
            auditorio();
            break;
        case 7:
            horas();
            break;
        case 8:
            gasolina();
            break;
        case 9:
            ar_condicionado()
            break;
        default:
            alert("Essa opção não existe!!");
            inicio();
            break;
    }
}

function diaria() {
    let valor_diaria = parseFloat(prompt("Qual o valor da diaria"));
    let quant_dias = parseInt(prompt("Quantos dias de hospedagem?"));

    if (isNaN(valor_diaria, quant_dias) && valor_diaria, quant_dias <= 0 && quant_dias > 30 && valor_diaria, quant_dias === "") {
        alert("Valor inválido!!");
        diaria();
    } else {
        mult = valor_diaria * quant_dias;
        alert(`O valor de ${quant_dias} dias de hospedagem é de R$${mult}`);
    }

    let nome_hospede = prompt("Qual é o nome do hóspede?");
    let confirma = prompt(`${nome}, você confirma a hospedagem para ${nome_hospede} por ${quant_dias} dias? \n S/N`);

    switch (confirma) {
        case "S":
            alert(`${nome}, reserva efetuada para ${nome_hospede}. O valor total é de R$${mult}`);
            inicio();
            break;
        case "N":
            alert(`${nome}, reserva não efetuada!`);
            inicio();
            break;
        default:
            alert("Essa opção não existe!");
            diaria();
            break;
    }
}

function cadastro() {
    let diaria_padrao = parseFloat(prompt("Qual o valor padrão da diária?"));
    let hospedes = [];
    let gratuidade = 0;
    let meia = 0;
    let soma = 0;

    while (true) {
        let cadastro_hospedes = prompt("Qual é o nome do hóspede?");
        switch (cadastro_hospedes) {
            case "PARE":
                let valor_total = (diaria_padrao * soma) + (diaria_padrao / 2 * meia);
                alert(`${nome}, o valor total das hospedagens é: R$${valor_total}, ${gratuidade} gratuidade(s), ${meia} meia(s)`);
                inicio();
                break;
        }
        let idade = parseInt(prompt("Qual é a idade do hóspede?"));

        if (idade <= 6) {
            gratuidade++;
            alert(`${cadastro_hospedes} cadastrada(o) com sucesso. ${cadastro_hospedes} possui gratiuidade`);
        } else if (idade >= 60) {
            meia++;
            alert(`${cadastro_hospedes} cadastrada(o) com sucesso. ${cadastro_hospedes} paga meia`);
        } else {
            soma++;
            alert(`${cadastro_hospedes} cadastrada(o) com sucesso.`);
        }
    }
}

function escolher() {
    let pesquisar = parseInt(prompt("Selecione uma opção: \n 1) Cadastrar \n 2) Pesquisar \n 3) Listar \n 4) Sair"));

    switch (pesquisar) {
        case 1:
            cadastrar();
            break;
        case 2:
            pesquisas();
            break;
        case 3:
            listar();
            break;
        case 4:
            sair();
            break;
        default:
            alert("Essa opção não existe!");
            escolher();
            break;
    }
}

let name_host = [];

function cadastrar() {
    let name_hospedes = prompt("Qual o nome do hóspede?");

    if (name_hospedes > 15) {
        alert("Máximo de cadastros atingido");
        escolher();
    } else {
        alert(`Hóspede ${name_hospedes} foi cadastrada(o) com sucesso!`);
        name_host.push(name_hospedes);
        escolher();
    }
}

function pesquisas() {
    let nome_pesquisa = prompt("Qual o nome do hóspede?");

    if (name_host.includes(nome_pesquisa)) {
        alert(`Hóspede ${nome_pesquisa} foi encontrado`);
        escolher();
    } else {
        alert("Hóspede não encontrado");
        escolher();
    }
}

function listar() {
    alert(`Hóspedes cadastrados(as):\n${name_host.join('\n')}`);
    inicio();
}

function sair() {
    alert(`Muito obrigado e até logo, ${nome}.`);
    inicio();
}

function evento() {
    let duracao = parseFloat(prompt("Qual a duração do evento em horas?"));
    let garcons = parseInt(prompt("Quantos garçons serão necessários?"));
    let total_cash = duracao * (garcom * garcons);
    alert(`Custo total: R$${total_cash}`);
    let gostaria = prompt("Gostaria de efetuar a reserva? S/N");
    switch (gostaria) {
        case "S":
            alert("Reserva efetuada com sucesso");
            inicio();
            break;
        case "N":
            alert("Reserva não efetuada");
            inicio();
            break;
        default:
            alert("Essa opção não existe!");
            evento();
            break;
    }
}

function buffet() {
    let convidados_eventos = parseInt(prompt("Qual o número de convidados para o evento?"));
    let cafe = 2;
    let agua = 5;
    let salgado = 7;

    if (convidados_eventos > 350) {
        alert("Quantidade de convidados superior à capacidade máxima.");
        buffet();
    } else {
        let calc_cafe = cafe * convidados_eventos / 10;
        let calc_agua = agua * convidados_eventos / 10;
        let calc_salgado = salgado * convidados_eventos;
        let total_calc = (calc_cafe * 0.8) + (calc_agua * 0.4) + (calc_salgado * 0.34);

        alert(`O evento precisará de ${calc_cafe} litros de café, ${calc_agua} litros de água, ${calc_salgado} salgados. O custo total do evento será de R$${total_calc}`);
    }
    let efetuar_reserva = prompt("Gostaria de efetuar a reserva? S/N");

    switch (efetuar_reserva) {
        case "S":
            alert(`${nome}, reserva efetuada com sucesso.`);
            inicio();
            break;
        case "N":
            alert(`${nome}, reserva não efetuada.`);
            inicio();
            break;
        default:
            alert("Essa opção não existe");
            buffet();
            break;
    }
}

function auditorio() {
    let convites = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if (convites <= 0 && convites > 350) {
        alert("Quantidade de convidados superior à capacidade máxima");
        auditorio();
    } else if (convites > 0 && convites <= 150) {
        alert("Use o auditório Laranja.");
        reserva();
    } else if (convites > 150 && convites <= 220) {
        let calc_auditorio = 70 - (220 - convites);
        alert(`Use o auditório Laranja (inclua mais ${calc_auditorio} cadeiras)`);
        reserva();
    } else {
        alert("Use o auditório Colorado");
        reserva();
    }
}

function reserva() {
    let realizar = prompt("Gostaria de efetuar a reserva? S/N");

    switch (realizar) {
        case "S":
            alert(`${nome}, reserva efetuada com sucesso.`);
            inicio();
            break;
        case "N":
            alert(`${nome}, reserva não efetuada.`);
            inicio();
            break;
        default:
            alert("Essa opção não existe");
            reserva();
            break;
    }
}

function horas() {
    let semana = prompt("Qual o dia do seu evento?");

    switch (semana) {
        case "domingo":
            domingo();
            break;
        case "segunda":
            segunda();
        case "terça":
            terca();
            break;
        case "quarta":
            quarta();
            break;
        case "quinta":
            quinta();
            break;
        case "sexta":
            sexta();
            break;
        case "sabado":
            sabado();
            break;
        default:
            alert("Essa opção não existe!");
            horas();
            break;
    }
}

function domingo() {
    let horas_domingo = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_domingo >= 7 && horas_domingo <= 15) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Domingo às ${horas_domingo}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function segunda() {
    let horas_segunda = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_segunda >= 7 && horas_segunda <= 23) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Segunda às ${horas_segunda}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function terca() {
    let horas_terca = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_terca >= 7 && horas_terca <= 23) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Terça às ${horas_terca}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function quarta() {
    let horas_quarta = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_quarta >= 7 && horas_quarta <= 23) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Quarta às ${horas_quarta}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function quinta() {
    let horas_quinta = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_quinta >= 7 && horas_quinta <= 23) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Quinta às ${horas_quinta}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function sexta() {
    let horas_sexta = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_sexta >= 7 && horas_sexta <= 23) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Sexta às ${horas_sexta}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function sabado() {
    let horas_sabado = parseInt(prompt("Qual é a hora do evento?"));

    if (horas_sabado >= 7 && horas_sabado <= 15) {
        let nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para Lojas ${nome_empresa}. Sábado às ${horas_sabado}hs.`);
        inicio();
    } else {
        alert("Restaurante indisponível");
        horas();
    }
}

function gasolina() {
    let wayneAlcool = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    let wayneGasolina = parseFloat(prompt("Qual o valor do gasolina no posto Wayne Oil?"));
    let starkAlcool = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    let starkGasolina = parseFloat(prompt("Qual o valor do gasolina no posto Stark Petrol?"));

    let precoAlcool = Math.min(wayneAlcool, starkAlcool);
    let precoGasolina = Math.min(wayneGasolina, starkGasolina);
    let razaoPreco = precoAlcool / precoGasolina;

    let combustivelMaisAtraente = "";
    if (razaoPreco <= 7) {
        combustivelMaisAtraente = "Álcool";
    } else {
        combustivelMaisAtraente = "Gasolina";
    }

    let postoMaisBarato;

    switch (combustivelMaisAtraente) {
        case 'Álcool':
            precoCombustivel = precoAlcool;
            if (wayneAlcool === precoCombustivel || wayneGasolina === precoCombustivel) {
                postoMaisBarato = 'Wayne Oil';
            } else {
                postoMaisBarato = 'Stark Petrol';
            }
            break;
        case 'Gasolina':
            precoCombustivel = precoGasolina;
            if (wayneGasolina === precoCombustivel || wayneAlcool === precoCombustivel) {
                postoMaisBarato = 'Wayne Oil';
            } else {
                postoMaisBarato = 'Stark Petrol';
            }
            break;
    }
    alert(`${nome}, é mais barato abastecer com ${combustivelMaisAtraente} no posto ${postoMaisBarato}`);
    inicio();
}

function ar_condicionado() {
    var stop = 1;
    var companies = [];

    while (stop) {
        var companie = prompt(`Qual o nome da empresa?`) || `Empresa ${companies.length + 1}`;
        var pricePerDevice = parseFloat(prompt("Qual o valor por aparelho?"));
        while (pricePerDevice < 0 || !pricePerDevice) {
            pricePerDevice = parseFloat(prompt("Ops! Digite um valor valido:"));
        }
        var device = parseInt(prompt("Qual a quantidade de aparelho?"));
        while (device < 0 || !device) {
            device = parseFloat(prompt("Ops! Digite um valor valido:"));
        }
        var discount = parseFloat(prompt("Qual a porcentagem de desconto?")) || 0;
        var minDeviceDiscount = parseInt(prompt("Qual o número de aparelhos para consegui o desconto?")) || 0;

        var budget = device >= minDeviceDiscount ? (pricePerDevice * device) * ((100 - discount) / 100) : pricePerDevice * device;

        companies.push({ companie, budget });
        alert(`O serviço da ${companie} custará ${budget.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);
        if (prompt(`Deseja informar novos dados, ${nome}? (S/N)`).toLocaleLowerCase() == "n") {
            stop = 0;
        }
    }
    const melhorOrcamento = companies.reduce((a, b) => {
        return a.budget < b.budget ? a : b;
    });

    alert(`O orçamento de menor valor é o: ${melhorOrcamento.companie} por ${melhorOrcamento.budget.toLocaleString("pt-br", { styles: "currency", currency: "BRL" })}`);
    inicio();
}

senha();