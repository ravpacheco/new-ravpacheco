---
title: "D-OPTIMAS 📝"
layout: post
author: ravpacheco
lang: pt
ref: doptimas-project
img: indigo/indigo.png
tag: projects
projects: true
summary: "Introdução ao D-OPTIMAS <i>Distributed multi agent system</i>, um software para resolução de problemas de otimização de diferentes classes que desenvolvi durante meu mestrado."
category: project
---

> D-OPTIMAS - Distributed OPTimization Multi Agent System

Vários problemas em otimização são denominados NP-difíceis devido a dificuldade para solucioná-los de maneira ótima, através de programação matemática, em um tempo razoável. 

Apesar disso, nos últimos anos, vários trabalhos tem apresentado mecanismos capazes de produzir soluções rápidas, e aceitáveis, para estes problemas. Um destes mecanismos é conhecido como sistemas multi agentes, ou MAS - Multi-Agent System. 

Durante meu trabalho de mestrado, desenvolvi o D-OPTIMAS - Distributed Optimization Multi-agent System, um sistema multi agentes, distribuído e flexível para resolução de problemas de otimização de diferentes classes. O D-OPTIMAS usa o modelo de atores, um modelo de programação concorrente e assíncrono, que possibilita a execução de uma grande quantidade de agentes através de processos distribuídos. Neste sistema, cada agente é encapsulado por um ator e executa uma meta-heurística específica, de forma reativa e isolada, interagindo com os demais exclusivamente por troca de mensagens, ou seja, toda informação trocada entre os agentes segue um protocolo de comunicação assíncrono definido.

Ao longo do trabalho, foram realizadas simulações, utilizando o D-OPTIMAS, para resolução de problemas de diferentes classes, como a minimização das funções EggHolder e XinSheYang - usualmente utilizadas como benchmarck de algoritmos de otimização contínua, e o problema de otimização combinatória PPN - Problema da Partição de Números. Os resultados obtidos mostram que o D-OPTIMAS é capaz de produzir soluções iguais, ou muito próximas, dos ótimos globais destes problemas.

Além disso, o modelo de atores se mostrou uma poderosa ferramenta para construção de sistemas multi agentes escaláveis, possibilitando a criação de uma quantidade de agentes duas ordens de grandeza superior aquela produzidas por sistemas anteriores, baseados em concorrência por compartilhamento de estado em memória.

[Clique aqui](https://goo.gl/KPcsZO) para ver minha dissertação completa sobre o D-OPTIMAS.

> Note: *All work was written in Portuguese.*