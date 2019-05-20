import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-advanced',
  templateUrl: 'advanced.html',
})
export class AdvancedPage {
  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { title: 'Blocks', expanded: false, lines: [
        {type: 'comment', text: '# Blocos são pequenas funções anônimas que podem ser passados dentro dos métodos'},
        {type: 'comment', text: '# Você provavelmente já viu um block e talvez até já tenha manipulado um, apenas não sabia o nome'},
        {type: 'comment', text: '# Como exemplo de block, temos o each, veja a seguir'},
        {type: 'code', text: 'array = ["Cozinha", "Quarto", "Sala"]'},
        {type: 'code', text: 'array.each { |ele| puts "Cômodo #{ele}" }'},
        {type: 'comment', text: '# Blocks de uma linha devem ser declarados entre chaves, mas caso o block seja mais complexo, é possível declará-lo com as notações def e end'},
        {type: 'code', text: 'array = ["Cozinha", "Quarto", "Sala"]'},
        {type: 'code', text: 'array.each do |ele|'},
        {type: 'code', text: 'puts "Cômodo #{ele}"', level: 1},
        {type: 'code', text: 'end'},
        {type: 'comment', text: '# O Yield é uma palavra chave em Ruby para realizar chamadas de blocks'},
        {type: 'comment', text: '# Quando o Yield é usado, o código dentro do block é rodado, realizando sua função, da mesma forma quando um método normal é chamado'},
        {type: 'code', text: 'def chamar_hello_world'},
        {type: 'code', text: 'yield', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'chamar_hello_world { puts "Hello World!" }'}
      ]},
      { title: 'Lambdas', expanded: false, lines: [
        {type: 'comment', text: '# Lambdas são bem parecidos com métodos, assim como os blocks'},
        {type: 'comment', text: '# Uma vantagem dos lambdas é que eles podem ser armazenados em variáveis, observe'},
        {type: 'code', text: 'chamar_lambda = lambda { puts "Novo Lambda" }'},
        {type: 'code', text: 'chamar_lambda.call'},
        {type: 'comment', text: '# É possível substituir o termo lambda pelo símbolo ->, observe'},
        {type: 'code', text: 'chamar_lambda = -> { puts "Novo Lambda" }'},
        {type: 'comment', text: '# Usando lambdas também podemos passar argumentos'},
        {type: 'code', text: 'argumento_lambda = lambda do |msg|'},
        {type: 'code', text: 'puts "#{msg}"', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'argumento_lambda.call "Aqui vem o Argumento"'}
      ]},
      { title: 'Modules', expanded: false, lines: [
        {type: 'comment', text: '# Modules são uma excelente forma de organizar seu códiugo ruby'},
        {type: 'comment', text: '# São semelhantes às classes no que se refere a acumulares métodos'},
        {type: 'comment', text: '# No entanto, diferente das classes, os modules não podem ser instanciados, ou seja, não é possível criar objetos a partir de um module'},
        {type: 'comment', text: '# Ao invés disso, eles devem ser chamados dentro de outras funções, permitindo que outras classes utilizem seus métodos'},
        {type: 'comment', text: '# Modules são muito importantes para o reuso de código e para o agrupamento de funções que possuam características fortemente semelhantes'},
        {type: 'comment', text: '# Vejamos um exemplo'},

        {type: 'code', text: 'module Soma'},
        {type: 'code', text: 'def soma_dois(num1, num2)', level: 1},
        {type: 'code', text: 'num1 + num2', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'class NovaClass'},
        {type: 'code', text: 'include Soma', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'nova_classe = NovaClasse.new'},
        {type: 'code', text: 'puts nova_classe.soma_dois(2,3)'},
        {type: 'comment', text: '=> 5'}
      ]},
      { title: 'Regex', expanded: false, lines: [
        {type: 'comment', text: '# Expressões Regulares em Ruby (Regex) ajudam você a encontrar padrões específicos dentro de strings com o objetivo de extrair dados para processamento'},
        {type: 'comment', text: '# São muito utilizadas para validações e para análise sintática (parsing)'},
        {type: 'comment', text: '# Vejamos um exemplo'},
        {type: 'comment', text: '=> Encontrar a palavra Sucesso'},
        {type: 'code', text: '"Você já viu a página Fundamentos do Sucesso?" =~ /Sucesso/'},
        {type: 'comment', text: '# Essa expressão irá retornar o index do aparecimento da palavra, ou nil, caso a palavra não seja encontrada'},
        {type: 'comment', text: '# Podemos encontrar caracteres ou intervalos presentes em Strings, entre outras possibilidades, veja um outro exemplo'},
        {type: 'code', text: 'def possui_vogal?(str)'},
        {type: 'code', text: 'str =~ /[aeiou]/', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'possui_vogal?("teste")'},
        {type: 'comment', text: '=> returns 1'},
        {type: 'code', text: 'possui_vogal?("ufc")'},
        {type: 'comment', text: '=> returns nil'}
      ]},
      { title: 'Time', expanded: false, lines: [
        {type: 'comment', text: '# Classe Ruby responsável por trabalhar com o tempo'},
        {type: 'comment', text: '# A seguir um exemplo de como pegar o timestamp do momento em qua a função foi chamada'},
        {type: 'code', text: 'Time.now'},
        {type: 'comment', text: '# Para formatar esse timestamp o ruby utiliza uma sintaxe muito simples, observe um exemplo'},
        {type: 'code', text: 'Time.now.strftime("%d/%m/%Y")'},
        {type: 'comment', text: '=> "20/05/2019"'},
        {type: 'comment', text: '# Os elementos passados como parâmetro no método strftime representam a formatação da data'},
        {type: 'comment', text: '# Uma string passando o elemento "%d" retorna o dia do Timestamp, enquanto o %m representa o mês e o %Y represente o ano com quatro caracteres'},
        {type: 'comment', text: '# Observe que essa notação funciona como uma Interpolação, pois podemos incluir caracteres entre os elementos da data, como fizemos no exemplo anterior, passando uma barra entre os elementos'}
      ]},
      { title: 'Public, Private e Protected', expanded: false, lines: [
        {type: 'comment', text: '# Esses três elementos integram o chamado controle de acesso, responsável por impedir ou permitir que os métodos criados em uma classe sejam chamados em outra'},
        {type: 'comment', text: '# Por padrão, todos os métodos chamados serão public, caso você não use as palavras chave private e protected'},
        {type: 'comment', text: '# Métodos público podem ser acessados quando a classe é instanciada'},
        {type: 'code', text: 'class NovaClasse'},
        {type: 'code', text: 'def possui_vogal?(str)', level: 1},
        {type: 'code', text: 'str =~ /[aeiou]/', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'classe = NovaClasse.new'},
        {type: 'code', text: 'classe.possui_vogal?("teste")'},
        {type: 'comment', text: '=> 1'},
        {type: 'comment', text: '# Métodos private são criados para uso interno, não podendo ser acessados fora da classe'},
        {type: 'code', text: 'class NovaClasse'},
        {type: 'code', text: 'def hello', level: 1},
        {type: 'code', text: 'chama_hello_world', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'private', level: 1},
        {type: 'code', text: 'def chama_hello_world', level: 1},
        {type: 'code', text: '"Hello World"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'classe = NovaClasse.new'},
        {type: 'code', text: 'classe.chama_hello_world'},
        {type: 'comment', text: '=> NoMethodError'},
        {type: 'code', text: 'classe.hello'},
        {type: 'comment', text: '=> "Hello World"'},
        {type: 'comment', text: '# Métodos protected são iguais ao private, no entanto, podem ser chamados com ou sem um receptor explícito, no entanto, esse receptor será sempre self ou um objeto dentro do self'},
        {type: 'code', text: 'class ClasseAntiga'},
        {type: 'code', text: 'def hello', level: 1},
        {type: 'code', text: 'chama_hello_world', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'protected', level: 1},
        {type: 'code', text: 'def chama_hello_world', level: 1},
        {type: 'code', text: '"Hello World"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'class NovaClasse < ClasseAntiga'},
        {type: 'code', text: 'def hello', level: 1},
        {type: 'code', text: 'chama_hello_world', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'classe = NovaClasse.new'},
        {type: 'code', text: 'classe.chama_hello_world'},
        {type: 'comment', text: '=> NoMethodError'},
        {type: 'code', text: 'classe.hello'},
        {type: 'comment', text: '=> "Hello World"'},
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

  get_level(level = null){
    if (level == null) return new Array(0);
    else return new Array(Number(level));
  }

  get_index(index){
    let i = String(index)
    return (i.length == 1 ? '0' + i : i);
  }

}
