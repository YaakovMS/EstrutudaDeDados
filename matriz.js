const matriz =[]

for (let linha = 0; linha <3; linha++){
    matriz[linha]=[]
    for (let coluna = 0; coluna<3; coluna++){
        matriz[linha][coluna]=[]
        for ( let profundidade = 0; profundidade < 3; profundidade++){
            matriz[linha][coluna][profundidade] = linha + coluna + profundidade
        }
    }
}console.table(matriz)