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
        {type: 'comment', text: '# Variáveis Locais'},
        {type: 'code', text: 'nome = "Luíza"'},
        {type: 'comment', text: '# Variáveis Global'},
        {type: 'code', text: '$versao = 1.5'},
        {type: 'comment', text: '# Variáveis de Instância'},
        {type: 'code', text: '@idade = 19'},
        {type: 'comment', text: '# Variáveis de Classe'},
        {type: 'code', text: '@@cont = 28'}
      ]},
      { title: 'Tipagem', expanded: false, lines: [
        {type: 'comment', text: '# Apesar de ruby ser uma linguagem altamente tipada, ela abstrai muito isso do usuário, sendo assim, não é necessário declarar tipo nas variáveis para poder usá-las'},
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
        {type: 'comment', text: '# Em Ruby, temos a liberdade de definir parâmetros sem parênteses, então podemos criar o método com ou sem parênteses'},
        {type: 'code', text: 'def novo_metodo param'},
        {type: 'code', text: 'end'}
      ]},
      { title: 'Loops', expanded: false, lines: [
        {type: 'comment', text: '# for com um range de 1 a 10, a cada iteração, a variável i recebe o valor do próximo número da sequência'},
        {type: 'code', text: 'for i in 1..10'},
        {type: 'code', text: 'puts i', level: 1},
        {type: 'code', text: 'end'},
        {type: 'comment', text: '# Obs.: o range de 1..10 equivale de 1 até 10, enquanto o range 1...10 equivale a 1 até 9'},
        {type: 'comment', text: '# while recebe um condicional para determinar sua parada tal como em outras linguagens, mas em ruby não precisamos colocar esse condicional entre parênteses'},
        {type: 'code', text: 'i = 0 '},
        {type: 'code', text: 'while i < 3 do '},
        {type: 'code', text: 'i = i + 1 ', level: 1},
        {type: 'code', text: 'end'}
      ]},
      { title: 'Arrays', expanded: false, lines: [
        {type: 'code', text: 'array = [1,3,5,6]'},
        {type: 'comment', text: '# os elementos do vetor podem ser acessados pelo index da seguinte maneira'},
        {type: 'code', text: 'array[2]'}
      ]},
        { title: 'Iterações', expanded: false, lines: [
        {type: 'comment', text: '# Para poder trabalhar com iterações em cada elemento de um array, ruby nos permite o usar o método each ou map, que recebe um elemento do array a cada iteração'},
        {type: 'code', text: 'array = [1,3,5,6]'},
        {type: 'code', text: 'array.each do |ele|'},
        {type: 'code', text: 'puts ele', level: 1},
        {type: 'code', text: 'end'},
        {type: 'comment', text: '# Obs.: a diferença entre o map e o each está no fato de que o each apenas permite amanipulação dos elementos do vetor, enquanto o map permite a alteração desses elementos por meio de cada iteração'},
      ]},
      { title: 'Operadores', expanded: false, lines: [
        {type: 'comment', text: '# soma dois objetos'},
        {type: 'code', text: '3 + 2'},
        {type: 'comment', text: '# subtrai dois objetos'},
        {type: 'code', text: '3 - 2'},
        {type: 'comment', text: '# multiplica dois objetos'},
        {type: 'code', text: '3 * 2'},
        {type: 'comment', text: '# retorna o valor inteiro da divisão de dois objetos'},
        {type: 'code', text: '3 / 2'},
        {type: 'comment', text: '# retorna o resto da divisão dois objetos'},
        {type: 'code', text: '3 % 2'},
        {type: 'comment', text: '# eleva um elemento ao outro'},
        {type: 'code', text: '3 ** 2'},
        {type: 'comment', text: '# simbologia usada para comparar a igualdade entre dois elementos'},
        {type: 'code', text: '3 == 2'},
        {type: 'comment', text: '# simbologia usada para comparar a desigualdade entre dois elementos'},
        {type: 'code', text: '3 != 2'},
        {type: 'comment', text: '# simbologia usada para comparar a se um elemento é maior do que outro'},
        {type: 'code', text: '3 > 2'},
        {type: 'comment', text: '# simbologia usada para comparar a se um elemento é menor do que outro'},
        {type: 'code', text: '3 < 2'},
        {type: 'comment', text: '# simbologia usada para comparar a se um elemento é maior ou igual a outro'},
        {type: 'code', text: '3 >= 2'},
        {type: 'comment', text: '# simbologia usada para comparar a se um elemento é menor ou igual a outro'},
        {type: 'code', text: '3 <= 2'},
        {type: 'comment', text: '# simbologia usada para adicionar novos condicionais, equivalente a um AND'},
        {type: 'code', text: 'if(var > 2 && var < 5'},
        {type: 'comment', text: '# simbologia usada para adicionar novos condicionais, equivalente a um OR'},
        {type: 'code', text: 'if(var > 2 || var < 5'},
        {type: 'comment', text: '# simbologia utilizada para determinar negação em ruby'},
        {type: 'code', text: '!(3 == 2)'},
        {type: 'comment', text: '# atribui valores'},
        {type: 'code', text: 'var = 3'},
        {type: 'comment', text: '# atribui à variável o valor da soma da variável e do elemento passado'},
        {type: 'code', text: 'var += 2'},
        {type: 'comment', text: '# atribui à variável o valor da subtração da variável pelo elemento passado'},
        {type: 'code', text: 'var -= 2'},
        {type: 'comment', text: '# atribui à variável o valor da multiplicação da variável e do elemento passado'},
        {type: 'code', text: 'var *= 2'},
        {type: 'comment', text: '# atribui à variável o valor da divisão da variável e do elemento passado'},
        {type: 'code', text: 'var /= 2'},
        {type: 'comment', text: '# atribui à variável o valor da elevação da variável pelo elemento passado'},
        {type: 'code', text: 'var **= 2'},
        {type: 'comment', text: '# atribui um valor a uma variável somente se ela estiver nula'},
        {type: 'code', text: 'var ||= 2'},
      ]},
      { title: 'Condicionais', expanded: false, lines: [
        {type: 'comment', text: '# o if em ruby funciona da mesma forma que em outras linguagens'},
        {type: 'code', text: 'if condicional'},
        {type: 'code', text: 'elsif condicional2'},
        {type: 'code', text: 'end'},
        {type: 'comment', text: '# outro condicional que temos em ruby é o case expression, que funciona da seguinte forma'},
        {type: 'code', text: 'case num'},
        {type: 'code', text: 'when 1..10', level: 1},
        {type: 'code', text: '"Número entre 1 e 10"', level: 2},
        {type: 'code', text: 'when 11..10', level: 1},
        {type: 'code', text: '"Número entre 11 e 10"', level: 2},
        {type: 'code', text: 'else', level: 1},
        {type: 'code', text: '"Número não encontrado"', level: 2},
        {type: 'code', text: 'end'}
      ]}
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

  get_level(level = null){
    if (level == null) return new Array(0);
    else return new Array(Number(level));
  }

  get_index(index){
    let i = String(index)
    return (i.length == 1 ? '0' + i : i);
  }

}
