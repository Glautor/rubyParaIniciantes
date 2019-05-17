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
      { title: 'Classes', expanded: false, lines: [
        {type: 'comment', text: '# Criação de classes'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'comment', text: '# Criando um método para a classe'},
        {type: 'code', text: 'def andar; end'},
        {type: 'code', text: 'end'},
      ]},
      { title: 'Atributos de Classe', expanded: false, lines: [
        {type: 'comment', text: '# Atributos são sempre privados e começam com @'},
        {type: 'comment', text: '# Não há como alterá-los de fora da classe'},
        {type: 'code', text: 'class Pessoa'},
        {type: 'code', text: 'def muda_nome(novo_nome)'},
        {type: 'code', text: '@nome = novo_nome'},
        {type: 'code', text: 'end'},
        {type: 'code', text: ''},
        {type: 'code', text: 'def diz_nome'},
        {type: 'code', text: '"meu nome é #{@nome}"'},
        {type: 'code', text: 'end'},
        {type: 'code', text: 'end'},
      ]}
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

  get_index(index){
    let i = String(index)
    return (i.length == 1 ? '0' + i : i);
  }
}
