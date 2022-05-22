import {Component} from '@angular/core';
import {CepService} from '../shared/services/cep.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputCep = '';

  resultadoCep: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };

  constructor(
    private cepService: CepService,
    public toastController: ToastController
  ) {
  }

  async localizarCep(): Promise<void> {
    try {
      this.resultadoCep = await this.cepService.getCep(this.inputCep).toPromise();
    } catch (e) {
      await this.mostrarErro();
      this.resultadoCep = null;
    }
  }

  async mostrarErro(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Ops, parece que este cep não existe.',
      color: 'danger',
      duration: 2000
    });
    await toast.present();
  }
}
