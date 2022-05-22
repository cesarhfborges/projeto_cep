# Projeto de busca por CEP
Neste projeto utilizaremos um webservice para devolver o endereço completo basedo no cep informado.
WebService que utilizaremos: [VIA CEP](https://viacep.com.br) (Gratuito e aberto)

### Requisitos
- [Android Studio](https://developer.android.com/studio?hl=pt&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45bdRYvcgFm9i1oHXRGLrZXKFqow2Wm7gs3trbhq4p6d0hwFZVWl958aApG_EALw_wcB&gclsrc=aw.ds)
- [Node](https://nodejs.org/dist/v14.15.0/node-v14.15.0-x64.msi)
- [Ionic CLI](https://ionicframework.com/docs/)

### Iniciando um projeto com IONIC
Primeiro passo é instalar o framework responsável por gerar nossa aplicação híbrida.
```
npm install -g @ionic/cli
```

Agora basta executar o seguinte comando para iniciar uma nova aplicação em IONIC e aguardar o gerador terminar de criar nosso projeto e sua estrutura.
```
ionic start projeto_cep blank
```

agora vamos entrar dentro da nossa aplicação usando o cmd.
```
cd projeto_cep
```

Quando finalizado vamos apenas iniciar a execução do projeto, visto que logo que a aplicação estiver disponível o navegador já fará a abertura do nosso projeto.
```
ionic serve --open
```


### Gerando componentes da aplicação
- Modulo
```
ng generate module shared
```

- pagina
```
ionic generate page login
```

- componente
```
ionic generate component lista
```

### Adicionando Android
Vamos agora adicionar ao projeto o suporte a android, este comando é executado apenas uma vez para ativar esse recurso.
```
ionic capacitor add android
```

### Deploy (Colocando nosso aplicativo no dispositivo)

```
ionic capacitor open android
```
