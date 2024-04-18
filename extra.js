// Yaakov Meir Sabbah 2214290075

function gerarCalendario(ano) {
    const diasPorMes = [31, 28 + (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
        for (let j = 1; j <= diasPorMes[i]; j++) {
            console.log(`${j < 10 ? '0' + j : j}/${i + 1 < 10 ? '0' + (i + 1) : i + 1}/${ano}`);
        }
        console.log("\n");
    }
}

gerarCalendario(2024);
