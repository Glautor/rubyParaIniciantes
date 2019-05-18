import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intermediate',
  templateUrl: 'intermediate.html',
})
export class IntermediatePage {
  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { title: 'Criando e Instânciando uma classe', expanded: false, lines: [
        {type: 'comment', text: '# Criando uma classe vazia'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'end'},
        {type: 'comment', text: '# Criando um objeto pertencente a classe Pessoa'},
        {type: 'code', text: 'pessoa = Pessoa.new'},
        {type: 'code', text: 'puts pessoa.class'},
        {type: 'comment', text: '# => Pessoa'},
      ]},      
      { title: 'Definição de métodos', expanded: false, lines: [
        {type: 'comment', text: '# "def" é uma palavra chave do Ruby para a definição (criação) de métodos'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'comment', text: '# Criando o método andar para a classe Pessoa', level: 1},
        {type: 'code', text: 'def andar', level: 1},
        {type: 'code', text: 'puts "Andando"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'pessoa1 = Pessoa.new'},
        {type: 'code', text: 'pessoa1.andar'},
        {type: 'comment', text: '# => "Andando"'},
        {type: 'comment', text: '# Tambem é possivel criar um método apenas para determinado objeto'},
        {type: 'code', text: 'pessoa2 = Pessoa.new'},
        {type: 'code', text: 'def pessoa2.correr'},
        {type: 'code', text: 'puts "Correndo"', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'pessoa2.correr'},
        {type: 'comment', text: '# => "Correndo"'},
        {type: 'code', text: 'pessoa1.correr'},
        {type: 'comment', text: '# => undefined method "correr"'},
      ]},
      { title: 'Atributos de Classe', expanded: false, lines: [
        {type: 'comment', text: '# Atributos são sempre privados e começam com @'},
        {type: 'comment', text: '# Não há como alterá-los de fora da classe, apenas os métodos de um objeto podem alterar os seus atributos '},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'def muda_nome(novo_nome)', level: 1},
        {type: 'code', text: '@nome = novo_nome', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'def diz_nome', level: 1},
        {type: 'code', text: '"meu nome é #{@nome}"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'pessoa = Pessoa.new'},
        {type: 'code', text: 'pessoa.muda_nome "Joao"'},
        {type: 'code', text: 'puts pessoa.diz_nome'},
        {type: 'comment', text: '# => "meu nome é Joao"'},
      ]},
      { title: 'Entendendo o self', expanded: false, lines: [
        {type: 'comment', text: '# O "self" é uma palavra reservado usada para referenciar o contexto da propria classe.'},
        {type: 'comment', text: '# Quando não especificado o contexto na chamada de um método, o interpretador entende que será o self'},
        {type: 'code', text: 'def falar'},
        {type: 'code', text: 'puts "Falando"', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'def ouvir', level: 1},
        {type: 'code', text: 'puts "Ouvindo"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'def falar', level: 1},
        {type: 'code', text: 'puts "Falando sobre ruby"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'def conversar', level: 1},
        {type: 'code', text: 'ouvir', level: 2},
        {type: 'comment', text: '# Deixa explicito o uso do método falar de dentro da classe', level: 2},
        {type: 'code', text: 'self.falar', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'comment', text: '# Criando um objeto pertencente a classe Pessoa'},
        {type: 'code', text: 'pessoa = Pessoa.new'},
        {type: 'code', text: 'pessoa.conversar'},
        {type: 'comment', text: '# => "Ouvindo"'},
        {type: 'comment', text: '# => "Falando sobre ruby"'},
      ]}, 
      { title: 'Método construtor', expanded: false, lines: [
        {type: 'comment', text: '# Métodos contrutores são executados no momento que se cria uma instância da classe.'},
        {type: 'comment', text: '# Para criar um construtor, usa-se a palavra reservada "initialize"'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'def initialize', level: 1},
        {type: 'code', text: 'puts "Criando nova Pessoa"', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'Pessoa.new'},
        {type: 'comment', text: '# => "Criando nova Pessoa"'},
      ]}, 
      { title: 'Syntax Sugar: Facilitando a sintaxe', expanded: false, lines: [
        {type: 'comment', text: '# Tudo no ruby é objeto, seja um Inteiro, uma String ou um Hash.'},
        {type: 'comment', text: '# E todas as operações, seja ela uma soma ou uma atribuição, são métodos desses objetos.'},
        {type: 'code', text: 'puts 1.+(5)'},
        {type: 'comment', text: '# => 6'},
        {type: 'comment', text: '# O código acima funciona pois o numero "1" é um objeto que possui um método chamado "+" que executa a operação de soma'},
        {type: 'comment', text: '# Porém o mesmo trecho de código pode ser (re)escrito da forma:'},
        {type: 'code', text: 'puts 1 + 5'},
        {type: 'comment', text: '# => 6'},
        {type: 'comment', text: '# Isso ocorre pois o ruby aceita algumas exceções na sintaxe para que o código fique mais legível.'},
        {type: 'comment', text: '# O nome dessa técnica é sintax sugar e o Ruby a aplica em todos os métodos operadores matemáticos'},
      ]}, 
      { title: 'Entendendo o attr_accessor', expanded: false, lines: [
        {type: 'comment', text: '# Em ruby, atributos de classe são sempre privados. '},
        {type: 'comment', text: '# Sempre que se necessita usar um atributo é necessário criar métodos para acessar (getters) e modificar (setters) este atributo'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'def nome', level: 1},
        {type: 'code', text: '@nome', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'def nome=(valor)', level: 1},
        {type: 'code', text: '@nome = valor', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'pessoa = Pessoa.new'},
        {type: 'code', text: 'pessoa.nome=("Joao")'},
        {type: 'comment', text: '# Obs: devido ao Syntax Sugar, o código acima poderia ser (re)escrito para:'},
        {type: 'comment', text: '# pessoa.nome = "Joao"'},
        {type: 'code', text: 'puts possoa.nome'},
        {type: 'comment', text: '# => "Joao"'},
        {type: 'comment', text: '# Para evitar escrever os métodos acessores e modificadores para cada atributo da classe, usa-se o attr_accessor que faz isso para você.'},
        {type: 'comment', text: '# O mesmo código da classe Pessoa acima poderia ser (re)escrito para'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'attr_accessor :nome', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'pessoa = Pessoa.new'},
        {type: 'code', text: 'pessoa.nome = "Joao"'},
        {type: 'code', text: 'puts possoa.nome'},
        {type: 'comment', text: '# => "Joao"'},
      ]}, 
      { title: 'Herança  de Classes', expanded: false, lines: [
        {type: 'comment', text: '# Para criar uma classe que herda de outra, basta usar o operador << '},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'attr_accessor :nome', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'class Funcionario << Pessoa'},
        {type: 'code', text: 'attr_accessor :salario', level: 1},
        {type: 'code', text: 'def initialize', level: 1},
        {type: 'code', text: '@nome = "Joao"', level: 2},
        {type: 'code', text: '@salario = 1200', level: 2},
        {type: 'code', text: 'end', level: 1},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'funcionario = Funcionario.new'},
        {type: 'code', text: 'puts funcionario.nome'},
        {type: 'comment', text: '# => "Joao"'},
        {type: 'code', text: 'puts funcionario.salario'},
        {type: 'comment', text: '# => 1200'},
      ]},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntermediatePage');
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
