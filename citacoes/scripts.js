const quotes = [
    {
        quote: "Seja como for o que penses, creio que é melhor dizê-lo com boas palavras.",
        autor: "William Shakespeare",
    },
    {
        quote: "Numa sociedade dominada pela produção capitalista, até o produtor não capitalista é dominado por concepções capitalistas.",
        autor: "Karl Marx",
    },
    {
        quote: "Existem apenas duas classes sociais, a dos que não comem e a dos que não dormem com medo da revolução dos que não comem.",
        autor: "Milton Santos",
    },
    {
        quote: "Somos o que repetidamente fazemos. A excelência, portanto, não é um efeito, mas um hábito",
        autor: "Aristoteles",
    },
    {
        quote: "Nunca espere demais, da sorte ou dos outros, no fim não há quem não decepcione você",
        autor: "Charles Bukowski",
    },
    {
        quote: "Eu não tenho apenas sonhos. Eu sou sonhável",
        autor: "Mia Couto",
    },
    {
        quote: "Viva, de modo que quando seus filhos pensem em justiça, carinho e integridade, eles pensam de você",
        autor: "H. Jackson Brown",
    },
    {
        quote: "Sempre fui sonhador, é isso que me mantém vivo",
        autor: "Mano Brown",
    },
    {
        quote: "Onde estiver, seja lá como for, tenha fé, porque até no lixão nasce flor",
        autor: "Racionais MC's",
    },
    {
        quote: "Aquela noite eu te ensinei coisas sobre amor, durante o dia eu só tinha vivido o ódio.",
        autor: "Djonga",
    }
    
]

const quoteBtn = document.querySelector("#quoteBtn")
const quoteText = document.querySelector(".text")
const quoteAutor = document.querySelector(".autor")

function getQuote(){
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAutor.textContent = quotes[index].autor;
}


quoteBtn.addEventListener("click", getQuote);