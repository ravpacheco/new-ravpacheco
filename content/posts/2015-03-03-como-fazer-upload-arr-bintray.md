---
title: "Como fazer upload de um pacote aar para o Bintray"
layout: post
date: 2015-03-03 22:48
author: ravpacheco
lang: pt
ref: aar-bintray
image: /assets/images/markdown.jpg
headerImage: false
tag:
- android
- bintray
- aar package
blog: true
description: Passo a passo para disponibilizar um pacote aar no Bintray. 
externalLink: true
category: blog
---

# Introdução

## O que é?

Bintray é um repositório para distribuição de pacotes, semelhante ao nuget.org.  Ele suporta nativamente pacotes maven, rpm, deb 
e qualquer outro pacote genérico.

O bintray é onde o repositório Jcenter é hospedado, JCenter é um dos repositórios maven mais popular usado pela comunidade. 
Nele você irá encontrar uma gama muito grande de pacotes.

## Como funciona

Bintray é gratuito para projetos Open Source, ou seja você pode criar seu própio repositório e subir seus pacotes 
sem custos (para projetos de código aberto). E opcionalmente também é possível incluir seu pacotes no JCenter.

# Fazendo upload de um pacote aar

## O que é?

O formato de pacote aar é como são distribuiídos bibilioltecas Android, ele permite além de código compartilhar resouces para Android
dentro do pacote. Mais informações para esse tipo de pacote podem ser encontradas [aqui](http://tools.android.com/tech-docs/new-build-system/aar-format)

## Instalando o plugin bintray no gradle

A maneira mais fácil de fazer upload de um pacote aar para o bintray é usar o [plugin bintray para gradle](https://github.com/bintray/gradle-bintray-plugin).

Para instalar o plugin basta adicionar as seguinte linha ao seu build.gradle:

```groovy
plugins {
    id "com.jfrog.bintray" version "1.0"
}
```
## Configurando as propriedades do pacote

Após instalar o plugin é necessário apenas definir a configuração do pacote. Você pode definir o grupo e a versão do artifato 
maven declarando respectivamente as váriaveis (no escopo global) ```group``` e ```version``` no seu arquivo ```build.gradle``` do modulo que deseja fazer
upload e o Id do artifato é sempre o nome do modúlo. Exemplo:

```groovy

apply plugin: 'com.android.library'

group = 'net.take'
version = '1.0.1'

android {
...
}
...

```

As configurações do pacote devem ser definidas da seguinte forma:

```groovy
bintray {
    user = project.BINTRAY_USER
    key = project.BINTRAY_PASSWORD

    configurations = ['archives'] 
    pkg {
        repo = 'maven'
        name = 'nome-do-pacote-no-bintray'
        licenses = ['Apache-2.0']
    }
}
```

Onde project.BINTRAY_USER e project.BINTRAY_PASSWORD são propriedades definidas dentro do arquivo ```gradle.properties``` do 
seu projeto. Não é necessário que essas variavéis sejam definidas em outro arquivo, mas é recomendavel que seja para que elas
não sejam expostas junto com o código o fonte.

A seguir um exemplo de um arquivo  ```gradle.properties```:
```
BINTRAY_USER=<your-user>
BINTRAY_PASSWORD=<your-password>
```

Onde o ```BINTRAY_PASSWORD``` é API-KEY do bintray que pode ser visualizada acessando [seu perfil](https://bintray.com/profile/edit)
e logo em seguida clicar na link API Key.

A propriedade ```repo``` é referente a qual repositório da sua no bintray você deseja fazer upload para o pacote, 'maven'
é o repositório padrão para pacotes maven que toda conta bintray possui.

A propriedade ```name``` é referente ao nome que o pacote terá no bintray, vale lembrar que esse nome não é relacionado
com o artifactId do maven (que é definido pelo nome do seu módulo) 

A propriedade ```licenses``` é um campo obrigatório para projetos Open Source em que você pode colocar uma ou mais licença
que o projeto possui.

## Fazendo upload

Após configurado o projeto, para fazer upload agora é necessário apenas executar a task ```bintrayUpload```.

## Publicando os arquivos

Depois que o upload é feito com sucesso é preciso aprovar a publicação. Para isso é apenas necessário acessar o site do 
bintray, e encontrar o pacote que você fez upload. Assim que clicar no pacote, vai aparecer que existem items pendentes para
publicação. Clique e publish, e pronto.

# Instalando um pacote aar

## Adicionando seu repositório ao script gradle

Adicione a url do seu repositório ao arquivo ```build.gradle``` do seu projeto como no exemplo.
Para descobrir qual a url do seu repositório, basta acessar o site do bintray e clicar no repositório desejado

```
allprojects {
    repositories {
        jcenter()
        maven { url "http://dl.bintray.com/takenet/maven" }
    }
}
```

## Adicionando sua depedências

Adicione o seu pacote como depedência:

    ```compile 'group:artifactId:version'```
    
Lembrando que ```group``` e ```version``` são as váriaveis que você definiu no seu script e artifactId é o nome do seu módulo.
