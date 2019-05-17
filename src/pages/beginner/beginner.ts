import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-beginner',
  templateUrl: 'beginner.html',
})
export class BeginnerPage {
  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { title: 'Input e Output', expanded: false, lines: [
        {type: 'comment', text: '# Imprime o conteúdo e pula uma linha'},
        {type: 'code', text: 'puts "Olá Mundo!"'},
        {type: 'comment', text: '# Imprime o conteúdo, mas não pula uma linha'},
        {type: 'code', text: 'print "Olá Mundo!"'},
        {type: 'comment', text: '# Chama o método inspect do elemento'},
        {type: 'code', text: 'p "Olá Mundo!"'},
        {type: 'comment', text: '# Atribui a variável "nome" aquilo que o usuário digitou, independente do tipo da variável'},
        {type: 'code', text: 'nome = gets'},
        {type: 'comment', text: '# Printa a informação que o usuário inseriu'},
        {type: 'code', text: 'puts nome'}
      ]},
      { title: 'Comentários', expanded: false, lines: [
        {type: 'comment', text: '# Existem dois tipos de comentário em Ruby'},
        {type: 'comment', text: '# -> Comentário de linha'},
        {type: 'comment', text: "=begin"},
        {type: 'comment', text: "-> Comentário de bloco"},
        {type: 'comment', text: "=end"},
        {type: 'comment', text: "# Obs.: esse tipo de comentário é pouco usado, a própria documentação do ruby utiliza apenas comentários com #"}
      ]},
      { title: 'Declaração de Variaveis', expanded: false, lines: [
        {type: 'comment', text: '# Variáveis Locais Variáveis Locais Variáveis Locais Variáveis Locais'},
        {type: 'code', text: 'nome = "Luíza"'},
        {type: 'comment', text: '# Variáveis Global'},
        {type: 'code', text: '$versao = 1.5'},
        {type: 'comment', text: '# Variáveis de Instância'},
        {type: 'code', text: '@idade = 19'},
        {type: 'comment', text: '# Variáveis de Classe'},
        {type: 'code', text: '@@cont = 28'}
      ]},
      { title: 'Tipagem', expanded: false, lines: [
        {type: 'comment', text: '# Apesar de ruby ser uma linguagem altamente tipada, ela abstrai muito isso do usuário, sendo assim, não é necessário declarar variáveis para poder usá-las'},
        {type: 'code', text: 'idade = 12'},
        {type: 'code', text: 'nome = "Adriana"'},
        {type: 'comment', text: '# por meio do método .class podemos saber a qual classe nossa variável pertence'},
        {type: 'code', text: 'puts idade.class'},
        {type: 'comment', text: '=> Integer'},
        {type: 'code', text: 'puts nome.class'},
        {type: 'comment', text: '=> String'}
      ]},
      { title: 'Tags Ruby', expanded: false, lines: [
        {type: 'comment', text: '# aqui declaramos a variável'},
        {type: 'code', text: '<% @nome = "Glauton" %>'},
        {type: 'comment', text: '# aqui apresentamos a variável ao usuário'},
        {type: 'code', text: '<%= @nome %>'},
        {type: 'comment', text: '# Obs.: para fins didáticos declaramos a variável na view, mas isso não é considerado boa prática, normalmente essa declaração é feita no controller e acessada na view.'}
     ]},
     { title: 'Métodos', expanded: false, lines: [
       {type: 'code', text: 'def novo_metodo'},
       {type: 'comment', text: '# código ruby'},
       {type: 'code', text: 'end'},
       {type: 'comment', text: '# Quando seu método não possui conteúdo é possível declará-lo dessa forma'},
       {type: 'code', text: 'def novo_metodo; end'},
       {type: 'comment', text: '# Em Ruby, temos a liberdade de definir parâmetros sem parênteses, então podemos criar o método com ou sem parênteses também'},
       {type: 'code', text: 'def novo_metodo param'},
       {type: 'code', text: 'end'}
    ]},
    { title: 'Loops', expanded: false, lines: [
      {type: 'comment', text: '# for com um range de 1 a 10, a cada iteração, a variável i recebe o valor do próximo número da sequência'},
      {type: 'code', text: 'for i in 1..10'},
      {type: 'code', text: 'puts i'},
      {type: 'code', text: 'end'},
      {type: 'comment', text: '# Obs.: o range de 1..10 equivale de 1 até 10, enquanto o range 1...10 equivale a 1 até 9'},
      {type: 'comment', text: '# while recebe um condicional para determinar sua parada tal como em outras linguagens, mas em ruby não precisamos colocar esse condicional entre parênteses'},
      {type: 'code', text: 'i = 0 '},
      {type: 'code', text: 'while i < 3 do '},
      {type: 'code', text: 'i = i + 1 '},
      {type: 'code', text: 'end'}
   ]},
   { title: 'Arrays', expanded: false, lines: [
     {type: 'code', text: 'array = [1,3,5,6]'},
     {type: 'comment', text: '# os elementos do vetor podem ser acessados pelo index da seguinte maneira'},
     {type: 'code', text: 'array[2]'}
  ]},
   { title: 'Iterações', expanded: false, lines: [
     {type: 'comment', text: '# Para poder trabalhar com iterações em cada elemento de um array o ruby nos permite o usar o método each ou map, que recebe um elemento do array a cada iteração'},
     {type: 'code', text: 'array = [1,3,5,6]'},
     {type: 'code', text: 'array.each do |ele|'},
     {type: 'code', text: 'puts ele'},
     {type: 'code', text: 'end'},
     {type: 'comment', text: '# Obs.: a diferença entre o map e o each está no fato de que o each apenas permite a apresentação dos elementos do vetor, enquanto o map permite a atualização de cada elemento do vetor por meio das iterações'},
  ]},
   { title: 'Operadores', expanded: false, lines: [
     {type: 'code', text: '+'},
     {type: 'code', text: '-'},
     {type: 'code', text: '*'},
     {type: 'code', text: '/'},
     {type: 'code', text: '%'},
     {type: 'code', text: '**'},
     {type: 'code', text: '=='},
     {type: 'code', text: '!='},
     {type: 'code', text: '>'},
     {type: 'code', text: '<'},
     {type: 'code', text: '>='},
     {type: 'code', text: '<='},
     {type: 'code', text: '&&'},
     {type: 'code', text: '||'},
     {type: 'code', text: '!'},
     {type: 'code', text: '='},
     {type: 'code', text: '+='},
     {type: 'code', text: '-='},
     {type: 'code', text: '*='},
     {type: 'code', text: '/='},
     {type: 'code', text: '**='},
     {type: 'code', text: '||='},
  ]},
  { title: 'Condicionais', expanded: false, lines: [
    {type: 'comment', text: '# o if em ruby funciona da mesma forma que em outras linguagens'},
    {type: 'code', text: 'if condicional'},
    {type: 'code', text: 'elsif condicional2'}
 ]},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeginnerPage');
  }

  expandItem(item){
    this.items.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
  }

}
