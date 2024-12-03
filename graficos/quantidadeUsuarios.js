import { getCSS,tickConfig } from "./common.js"
async function quantidadesUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    
    const nomeDasRedes = Object.keys(dados)
    const quantidadesUsuarios = Object.values(dados)

 
    const data = [
        {
            x : nomeDasRedes,
            y : quantidadesUsuarios,
            type: 'bar',
            marker:{
                color: ['blue', 'red', 'green', 'white', 'purple', 'yellow', 'black', 'pink']
            }
        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: "Redes Sociais do mundo",
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30,
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: "Redes Sociais",
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}
quantidadesUsuarios()
