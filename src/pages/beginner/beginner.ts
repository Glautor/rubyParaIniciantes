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
      { title: 'Imprimir mensagem em Ruby', expanded: false, lines: [
        {type: 'comment', text: '# Imprime o conteúdo e pula uma linha'},
        {type: 'code', text: 'puts "Olá Mundo!""'},
        {type: 'comment', text: '# Imprime o conteúdo, mas não pula uma linha'},
        {type: 'code', text: 'print "Olá Mundo!"'},
        {type: 'comment', text: '# Chama o método inspect do elemento'},
        {type: 'code', text: 'p "Olá Mundo!"'}
      ]},
      { title: 'Comentários', expanded: false, lines: [
        {type: 'comment', text: '# Existem dois tipos de comentário em Ruby'},
        {type: 'comment', text: '# -> Comentário de linha'},
        {type: 'comment', text: "=begin"},
        {type: 'comment', text: "Comentário de bloco"},
        {type: 'comment', text: "segunda linha"},
        {type: 'comment', text: "terceira linha"},
        {type: 'comment', text: "esse tipo de comentário é pouco usado, a própria documentação do ruby utiliza apenas comentários com #"},
        {type: 'comment', text: '=end'}
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
        {type: 'comment', text: '# Apesar de ruby ser uma linguagem altamente tipada, ela abstrai muito isso do usuário, sendo assim, não é necessário declarar variáveis para poder usálas'},
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
       {type: 'code', text: 'def  novo_metodo'},
       {type: 'comment', text: '# código ruby'},
       {type: 'code', text: 'end'},
       {type: 'comment', text: '# Quando seu método não possui conteúdo é possível declará-lo dessa forma'},
       {type: 'code', text: 'def novo_metodo end;'}
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
