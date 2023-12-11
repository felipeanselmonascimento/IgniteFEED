motores do react 

map tem retorno o foreach nao
//
react nao vai ficar observando variaveis para quando mudar, mostra em tela
estado sao variaveis q eu quero q o componente monitore
useEstate sempre retorna um array com duas posicoes 

const [variavel, funcao] = useState([])
funcao para alterar o valor da variavel de comentarios, para o react nao precisar ficar monitorando
passado para dentro da funcao qual o valor do novo estado da variavel, nao so o valor q quero inserir eu tenho q passar o novo valor
estado fica scoped no componente criado

programacao imperativa
passo a passo

programacao declarativa
quais as condicoes para eu ter o resultado final

a key é uma propriedade so pro react
por que unica ? 
nao podemos usar o indice do array como key

3 momentos em q um componente e renderizado novamente
muda estado componente renderiza novamente
quando a propriedade altera
quando um componente pai renderiza novmanete

comunicacao entre componentes e feita atraves de propriedades
no caso foi passado uma funcao para o componente filho de dentro do componente pai
