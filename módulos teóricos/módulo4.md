# Módulo 4 - Funções

## Objetivo

Apresentar funções em linguagem C, mostrando como dividir o programa em partes menores, reaproveitar código e organizar melhor a lógica.

## Conteúdos

- O que são funções
- Criação e chamada de funções
- Parâmetros
- Retorno de valores
- Funções sem retorno
- Escopo de variáveis

## Exemplo

```c
#include <stdio.h>

int somar(int a, int b) {
  return a + b;
}

int main() {
  printf("Resultado: %d", somar(4, 6));

  return 0;
}
```

## Exercício sugerido

Crie uma função que receba dois números inteiros e retorne o maior deles.
