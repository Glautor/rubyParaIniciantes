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
      { title: 'Declaração de Variaveis', expanded: false, lines: [
        {type: 'comment', text: '# Variáveis Locais'},
        {type: 'code', text: 'nome = "Luíza"'},
        {type: 'comment', text: '# Variáveis Global'},
        {type: 'code', text: '$versao = 1.5'},
        {type: 'comment', text: '# Variáveis de Instância'},
        {type: 'code', text: '@idade = 19'},
        {type: 'comment', text: '# Variáveis de Classe'},
        {type: 'code', text: '@@cont = 28'},
      ]},       
    ];
    console.log(this.items);
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
