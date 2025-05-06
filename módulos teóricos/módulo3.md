 # Módulo 3 - Praticando a Lógica 
> Objetivo: Consolidar a lógica de programação com exemplos e exercícios
* Bibliotecas
* Exercícios com variáveis (soma, média, área de figuras)
* Exercício com if/else (par ou ímpar, maior número)
* Exercícios com laços (tabuada, contagem, somas)
* Vetores (arrays) básicos

 #   Módulo 3 - Introdução à Programação em C

 ## Estrutura Sequencial
 * 1) Crie um programa que some dois números.
   
```c
   include <stdio.h>
   int main () {
    int x;
    int y;
    int soma;
    printf ("Digite o primeiro número: ");
    scanf ("%d", &x);
    printf ("Digite o segundo número: ");
    scanf ("%d", &y);
    soma = x + y;
    printf ("A soma dos números é: %d", soma);
    return 0;
}
```
* 2) Crie um programa que leia duas notas de um aluno e apresente a média.
```c
include <stdio.h>
int main () {
 int x;
 int y;
 int soma;
 float media;
 printf ("Digite um número: ");
 scanf ("%d", &x);
 printf ("Digite um segundo número: ");
 scanf ("%d", &y);
 soma = x + y;
 media = soma /2;
 printf ("A média dos números é: %.2f", media);
 return 0;
}
```
## Estrutura Condicional
* 3) Construa um programa que leia um número, verifique se o mesmo é par ou impar.
 ```c
include <stdio.h>
int main () {
 int numero;
 printf ("Digite um numero: ");
 scanf ("%d", &numero);
 if (numero %2 == 0) {
 printf ("Par");
}
else {
printf ("Impar");
}
return 0;

```
* 4) Construa um algoritmo que leia dois números, calcule e escreva a diferença do maior pelo menor.
```c
#include <stdio.h> 
int main () {
    int x;
    int y;
    int diferenca;
    printf("Digite um numero: ");
    scanf ("%d", &x);
    printf("Digite um numero: ");
    scanf ("%d", &y);
    if (x > y ) {
        diferenca = x - y ;
    }
    else {
        diferenca = y - x;
    }
    printf ("A diferenca dos numeros: %d", diferenca);
    return 0;
}
```

## Estrutura de Repetição
### While
5) Escrever um algoritmo que leia um número não determinado de valores e calcule
a média aritmética dos valores lidos, a quantidade de valores positivos,
a quantidade de valores negativos. Mostre os resultados. O número que encerrará a leitura será zero.
  
```c
# include <stdio.h>

int main () {
    int numeros;
    int numPositivo = 0;
    int numNegativo = 0;
    int contador = 0;
    int total = 0;
    float media; 

    printf ("Digite um numero e (0 para encerrar): \n");

    while (1) {
        scanf ("%d", &numeros);

        if (numeros == 0) {
            break; 
        }
        if (numeros > 0) {
            numPositivo ++;
        }
        else {
            numNegativo ++;
        }

        total += numeros;
        contador ++;
    }
    if (contador > 0) {
        media = (float) total / contador;
    }
    else {
        media = 0;
    }
    printf ("Quantidade de valores positivos: %d\n", numPositivo);
    printf ("Quantidade de valores negativos: %d\n", numNegativo);
    printf ("Quantidade da media dos valores digitados: %.2f\n", media);
    return 0;
}
```

6) Escrever um algoritmo que leia uma quantidade desconhecida de números e 
conte quantos deles estão nos seguintes intervalos: [0,25], [26,50], [51,75] e [76,100]. 
A entrada de dados deve terminar quando for lido um número negativo.

```c
#include <stdio.h>

int main() {
    int num;
    int inter1 = 0;
    int inter2 = 0;
    int inter3 = 0;
    int inter4 = 0;

    printf("Digite um numero (negativo para encerrar): ");
    scanf("%d", &num);

    while (num >= 0) {
        if (num >= 0 && num <= 25) {
            inter1 ++;
        } else if (num >= 26 && num <= 50) {
            inter2 ++;
        } else if (num >= 51 && num <= 75) {
            inter3 ++;
        } else if (num >= 76 && num <= 100) {
            inter4 ++;
        }

        printf("Digite um numero (negativo para encerrar): ");
        scanf("%d", &num);
    }

    printf("Intervalo [0,25]: %d\n", inter1);
    printf("Intervalo [26,50]: %d\n", inter2);
    printf("Intervalo [51,75]: %d\n", inter3);
    printf("Intervalo [76,100]: %d\n", inter4);

    return 0;
}
```
### Do While 

7) Construa um programa que leia vários números inteiros e mostre qual foi o menor valor fornecido. 
Para cada valor digitado, deve ser solicitado ao usuário que ele digite se ele deseja continuar entrando com valores.

``` c
#include <stdio.h>

int main() {
    int num;
    int menor;
    char continuar;
    
    printf("Digite um numero: ");
    scanf("%d", &num);
    menor = num; 

    do {       
        printf("Deseja continuar digitando? (s/n): ");
        scanf(" %c", &continuar); 

        if (continuar == 's' || continuar == 'S') {
            printf("Digite um numero: ");
            scanf("%d", &num);
            
            if (num < menor) { 
                menor = num; 
            }
        }
    } while (continuar == 's' || continuar == 'S'); 
   
    printf("O menor numero digitado foi: %d\n", menor);

    return 0;
}
```

8) Construa um programa que leia vários números inteiros e positivos, calculando ao final da sequência
a soma e a média desses números. A sequência termina quando o usuário entrar com um valor negativo.

```c
#include <stdio.h>

int main() {
    int num;
    int soma = 0, cont = 0;

    printf("Digite um numero positivo (ou um numero negativo para encerrar): ");
    scanf("%d", &num);

    do {
        soma += num;  
        cont++; 

        printf("Digite um numero positivo (ou um numero negativo para encerrar): ");
        scanf("%d", &num);  

    } while (num >= 0);  

    if (cont > 0) {
        printf("A soma dos numeros eh %d\n", soma);
        printf("A media dos numeros eh: %.2f\n", (float)soma / cont);
    } 
    return 0;
}
```
### For
9) Chico tem 1,50 metros e cresce 2 centímetros por ano, enquanto Zé tem 1,30 metros 
e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos
serão necessários para que Zé seja maior que Chico.

```c
#include <stdio.h>

int main() {
    float altura_chico = 1.50;  
    float altura_ze = 1.30;    
    int anos;

    for (anos = 0; altura_ze <= altura_chico; anos++) {
        altura_chico += 0.02;  
        altura_ze += 0.03;         }

    printf("Serao necessarios %d anos para que Ze seja maior que Chico.\n", anos);

    return 0;
}
```
10) Construa um programa que calcule N! (fatorial de N), sendo que o valor de N (inteiro) é fornecido pelo usuário. 
Sabe-se que: N! = 1 x 2 x 3 x 4 x .... x N
OBS: 0! = 1 (fatorial do número zero é igual a 1 por definição).
Além disso, não deve ser permitido que seja calculado o fatorial de número negativo.

```c
#include <stdio.h>

int main() {
    int N;
    double fatorial = 1;  

   
    printf("Digite um numero inteiro nao negativo para calcular o fatorial: ");
    scanf("%d", &N);

    
    if (N < 0) {
        printf("Nao eh possivel calcular o fatorial de um numero negativo.\n");
    } else {
       
        for (int i = 1; i <= N; i++) {
            fatorial *= i; 
        }

        if (N == 0) {
            fatorial = 1;
        }
       
        printf("O fatorial de %d eh: %.1f\n", N, fatorial);
    }

    return 0;
}

```
### Switch - Case

11) Criar um programa que leia o um número inteiro entre 1 e 7 e escreva o dia da semana correspondente. 
Caso o usuário digite um número fora desse intervalo, deverá aparecer uma mensagem informando 
que não existe dia da semana com esse número.
``` c
#include <stdio.h>
int main() {
    int dia;
 
    printf("Digite um numero entre 1 e 7 para saber o dia da semana: ");
    scanf("%d", &dia);

    switch (dia) {
        case 1:
            printf("Domingo\n");
            break;
        case 2:
            printf("Segunda-feira\n");
            break;
        case 3:
            printf("Terça-feira\n");
            break;
        case 4:
            printf("Quarta-feira\n");
            break;
        case 5:
            printf("Quinta-feira\n");
            break;
        case 6:
            printf("Sexta-feira\n");
            break;
        case 7:
            printf("Sabado\n");
            break;
        default:           
            printf("Nao existe dia da semana com esse numero.\n");
    }
    return 0;
}
```
12) Escreva um programa que receba dois números reais e um código de seleção do usuário.
Se o código digitado for 1, faça o programa adicionar os dois números previamente digitados
e mostrar o resultado; se o código de seleção for 2, os números devem ser multiplicados; 
se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo. 
Se nenhuma das opções acima for escolhida, mostrar "Código inválido".


```c
#include <stdio.h>

int main() {
    float num1;
    float num2;
    float resultado;
    int codigo;

    printf("Digite o primeiro numero real: ");
    scanf("%f", &num1);

    printf("Digite o segundo numero real: ");
    scanf("%f", &num2);
    
    printf("Digite o codigo de operacao (1: Adicao, 2: Multiplicacao, 3: Divisao): ");
    scanf("%d", &codigo);

    switch (codigo) {
        case 1:
            resultado = num1 + num2;
            printf("Resultado da adicao: %.2f\n", resultado);
            break;
        case 2:
            resultado = num1 * num2;
            printf("Resultado da multiplicacao: %.2f\n", resultado);
            break;
        case 3:
            if (num2 != 0) {
                resultado = num1 / num2;
                printf("Resultado da divisao: %.2f\n", resultado);
            } else {
                printf("Erro! Divisao por zero nao permitida.\n");
            }
            break;
        default:
            printf("Codigo invalido.\n");
            break;
    }
    return 0;
}
```

### Vetor
13) Gerar uma tabela para conversão de medidas dadas em milímetros e sua respectiva medida em polegadas. 
A tabela deve iniciar em 0 mm e terminar em 100mm, com variação de 2,5mm. 
Estes valores devem ser armazenados em uma matriz de uma dimensão. 1 mm = 0,0393701 pol.

```c
#include <stdio.h>
int main() {

    float mm;
    float polegadas;

    printf("Tabela de conversao de mm para polegadas:\n");
    printf("  mm       |   polegadas\n");
    printf("---------------------------\n");

    for (mm = 0; mm <= 100; mm += 2.5) {
        polegadas = mm * 0.0393701;  

        printf("  %.1f mm   |   %.6f pol\n", mm, polegadas);
    }

    return 0;
}
```

14) Faça um programa que carregue um vetor com dez números inteiros. Calcule e mostre os números maiores
que 10 e suas respectivas posições. Se não existir nenhum número nessa condição,
deverá ser mostrada uma mensagem informativa.

``` c
#include <stdio.h>

int main() {
    int vetor[10];  
    int encontrado = 0;  
  
    printf("Digite 10 numeros inteiros:\n");
    for (int i  = 0; i < 10; i++) {
        printf("Numero %d: ", i + 1);
        scanf("%d", &vetor[i]);
    }
    printf("\nNumeros maiores que 10 e suas respectivas posicoes:\n");
    for (int i = 0; i < 10; i++) {
        if (vetor[i] > 10) {
            printf("Numero: %d na posicao: %d\n", vetor[i], i);
            encontrado = 1;
        }
    }
    if (!encontrado) {
        printf("Nao existem numeros maiores que 10 no vetor.\n");
    }
    return 0;
}
```

### Referências

+ Exercícios da Mega Lista
  
* [Site dio](https://www.dio.me/articles/por-que-aprender-c)

* Livro de Como Programar em C - Deitel 

- [ Site Programiz](https://www-programiz-com.translate.goog/c-programming?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc)


