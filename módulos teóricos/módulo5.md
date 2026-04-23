# Módulo 5 - Ponteiros

## Objetivo

Apresentar ponteiros em linguagem C, explicando endereços de memória, operadores `&` e `*`, acesso ao valor apontado e passagem por referência.

## Conteúdos

- Endereço de memória
- Declaração de ponteiros
- Operadores `&` e `*`
- Acesso ao valor apontado
- Alteração de variáveis por ponteiros
- Ponteiros em funções

## Exemplo

```c
#include <stdio.h>

int main() {
  int numero = 10;
  int *ponteiro = &numero;

  printf("Valor: %d\n", numero);
  printf("Endereco: %p\n", &numero);
  printf("Valor pelo ponteiro: %d\n", *ponteiro);

  return 0;
}
```

## Exercício sugerido

Crie uma função que receba dois ponteiros inteiros e troque os valores das variáveis apontadas.
