# Módulo 2 - Fundamentos da Linguagem C 
* Estrutura de um programa C
* Variáveis e tipos de dados (int, float, double, long, char)
* Estrada e saída de dados (scanf, printf)
* Operadores aritméticos, lógicos e relacionais
* Condicionais (if, else, switch-case)
* Laços para repetição (for, while, do-while)



# **Módulo 2 - Fundamentos da Linguagem C**  

Bem-vindo ao **Módulo 2**. Nós, os programuxos, estamos felizes por estar engajado em conhecer mais! Aqui, você aprenderá os conceitos fundamentais para começar a programar, desde a estrutura básica de um programa até estruturas de controle como condicionais e laços de repetição.  

Vamos começar!  

---  

## **1. Estrutura de um Programa C**  

Todo programa em C segue uma estrutura fixa que o compilador reconhece para transformar o código em algo executável. Essa estrutura começa com a inclusão de bibliotecas por meio da diretiva #include, que traz funcionalidades prontas, como leitura de dados, impressão na tela ou cálculos matemáticos. Por exemplo, ao incluir #include <stdio.h>, você habilita o uso das funções printf e scanf. Sem essa inclusão, o compilador não reconheceria essas funções, gerando erro. As bibliotecas tornam o código mais prático e evitam que o programador precise reescrever funcionalidades comuns.

Depois das bibliotecas, todo programa precisa da função main(), que é o ponto de partida da execução. Tudo o que estiver dentro dela será executado pelo computador, linha por linha. Essa função geralmente retorna um valor inteiro ao sistema operacional, indicando se o programa terminou com sucesso (return 0;).

Dentro da função main, vem o corpo do programa, onde ficam as instruções: declarações de variáveis, comandos de entrada e saída, decisões, repetições e demais operações. Essa organização permite que o código seja claro, funcional e fácil de manter.

- **Bibliotecas (#include)**: As bibliotecas em C são arquivos que contêm funções e definições prontas para serem utilizadas no programa. Elas são incluídas no início do código com a diretiva `#include`, permitindo o uso de recursos já existentes, como entrada e saída de dados, operações matemáticas, manipulação de memória, entre outros. Por exemplo, a biblioteca `stdio.h` fornece as funções `printf` e `scanf`, usadas para exibir e ler dados no terminal. Quando você escreve `#include <stdio.h>`, o compilador insere o conteúdo dessa biblioteca no seu código, tornando essas funções disponíveis. Isso evita que o programador precise reescrever códigos complexos do zero, além de garantir maior eficiência e organização. Existem bibliotecas que já vêm com o compilador (como `stdlib.h`, `math.h`, `string.h`) e também é possível criar bibliotecas personalizadas para reaproveitar código em diferentes programas.
- **Função principal (main)**: Onde o programa começa a ser executado.  
- **Corpo do programa**: Instruções que serão executadas.  

### **Exemplo de um programa simples:**  

```c
#include <stdio.h> // Biblioteca para entrada e saída de dados

int main() {
    int idade; // Declara uma variável do tipo inteiro

    // Exibe uma mensagem para o usuário
    printf("Digite a sua idade: ");

    // Lê um valor digitado pelo usuário e armazena na variável idade
    scanf("%d", &idade);

    // Estrutura condicional para verificar a idade
    if (idade >= 18) {
        printf("Você é maior de idade.\n");
    } else {
        printf("Você é menor de idade.\n");
    }

    return 0; // Indica que o programa terminou corretamente
}
```

### O que esse código faz:
- Inclui a biblioteca `stdio.h` para usar `printf` e `scanf`.
- Define a função `main()`, ponto de partida da execução.
- Declara uma variável do tipo `int` chamada `idade`.
- Usa `printf` para mostrar uma mensagem ao usuário.
- Usa `scanf` para ler a idade digitada.
- Usa uma estrutura condicional `if-else` para verificar se a pessoa é maior ou menor de idade.
- Finaliza com `return 0;`, indicando execução bem-sucedida.

---  

## **2. Variáveis e Tipos de Dados**  

No C, variáveis são espaços reservados na memória do computador para armazenar valores que podem ser usados e modificados durante a execução do programa. Cada variável precisa ser declarada com um tipo específico, o que define o tipo de dado que ela pode armazenar (como números inteiros, decimais ou caracteres) e também a quantidade de memória que será ocupada. Usar o tipo de dado correto é importante para garantir que os valores sejam armazenados de forma eficiente e que o programa funcione corretamente. Por exemplo, int armazena inteiros e geralmente usa 4 bytes, enquanto float armazena números com ponto decimal com menos precisão que o double, que ocupa mais memória. Também existem tipos como char, usado para armazenar letras ou símbolos, e variações como long e short, que ampliam ou reduzem o intervalo dos valores possíveis. Escolher o tipo certo evita desperdício de memória e problemas de desempenho.
 

### **Tipos de Dados Básicos:**  

| Tipo           | Uso                            | Tamanho (Bytes)  | Exemplo de Valor          |
|----------------|--------------------------------|------------------|--------------------------|
| `char`         | Armazena um caractere          | 1 byte           | `'A'`, `'z'`, `'0'`      |
| `int`          | Números inteiros               | 4 bytes          | `-100`, `0`, `2024`      |
| `short`        | Inteiro menor                  | 2 bytes          | `-32768`, `250`          |
| `long`         | Inteiro maior                  | 4 ou 8 bytes     | `100000`, `-99999999`    |
| `float`        | Número real com menos precisão | 4 bytes          | `3.14f`, `-0.5f`         |
| `double`       | Número real com mais precisão  | 8 bytes          | `3.14159265`, `-2.5`     |
| `long double`  | Real com precisão estendida    | 12–16+ bytes     | `3.141592653589793L`     |

### **Exemplo de Declaração de Variáveis:**  

```c
#include <stdio.h>

int main() {
    int idade = 25;
    float salario = 2500.50;
    char genero = 'M';
    double pi = 3.1415926535;

    printf("Idade: %d\n", idade);
    printf("Salário: %.2f\n", salario);
    printf("Gênero: %c\n", genero);
    printf("Valor de PI: %.5lf\n", pi);

    return 0;
}
```  

### **Observações:**  
- `%d` → usado para `int`.  
- `%f` → usado para `float`.  
- `%lf` → usado para `double`.  
- `%c` → usado para `char`.  

---  

## **3. Entrada e Saída de Dados (scanf e printf)**  

A linguagem C utiliza as funções scanf e printf, da biblioteca stdio.h, para entrada e saída de dados, respectivamente. A função scanf permite que o programa receba informações do usuário, enquanto printf serve para exibir mensagens e resultados na tela. Ambas usam especificadores de formato, como %d para inteiros e %f para floats, que indicam o tipo de dado sendo lido ou impresso.

### **Saída de Dados (`printf`)**  
Já vimos que `printf` exibe mensagens na tela.  

```c
printf("Mensagem %d, %f, %c", variavel1, variavel2, variavel3);
```  

### **Entrada de Dados (`scanf`)**  
Lê dados digitados pelo usuário.  

```c
#include <stdio.h>

int main() {
    int idade;
    printf("Digite sua idade: ");
    scanf("%d", &idade);  // Lê um número inteiro
    printf("Você tem %d anos.\n", idade);
    return 0;
}
```  

**Atenção:**  
- Sempre use `&` antes do nome da variável em `scanf` (exceto para strings).  

---  

## **4. Operadores**  

Operadores em C são símbolos utilizados para realizar operações sobre variáveis e valores. Eles são fundamentais para qualquer cálculo, comparação ou lógica dentro de um programa. Existem diferentes categorias de operadores, como os **aritméticos** (como `+`, `-`, `*`, `/`, `%`) que realizam operações matemáticas; os **relacionais** (como `==`, `!=`, `<`, `>`) que comparam valores; e os **lógicos** (como `&&`, `||`, `!`) que permitem construir expressões booleanas. O uso correto dos operadores permite tomar decisões, repetir ações e manipular dados de forma eficiente no código.

### **Operadores Aritméticos**  
| Operador | Descrição       | Exemplo |
|----------|-----------------|---------|
| `+`      | Soma            | `a + b` |
| `-`      | Subtração       | `a - b` |
| `*`      | Multiplicação   | `a * b` |
| `/`      | Divisão         | `a / b` |
| `%`      | Resto da divisão| `a % b` |

### **Operadores Relacionais (Comparação)**  
| Operador | Descrição           | Exemplo |
|----------|---------------------|---------|
| `==`     | Igual               | `a == b`|
| `!=`     | Diferente           | `a != b`|
| `>`      | Maior que           | `a > b` |
| `<`      | Menor que           | `a < b` |
| `>=`     | Maior ou igual      | `a >= b`|
| `<=`     | Menor ou igual      | `a <= b`|

### **Operadores Lógicos**  
| Operador | Descrição           | Exemplo                |
|----------|---------------------|------------------------|
| `&&`     | E (AND)             | `(a > 0) && (b < 10)`  |
| `||`     | OU (OR)             | `(a == 0) || (b == 0)` |
| `!`      | NÃO (NOT)           | `!(a == b)`            |

---  

## **5. Condicionais (if, else, switch-case)**  

As estruturas condicionais em C permitem que o programa tome decisões com base em determinadas condições. A instrução `if` é usada para executar um bloco de código se uma condição for verdadeira, e o `else` permite definir um caminho alternativo caso a condição não seja satisfeita. Já o `switch-case` é uma forma prática de avaliar uma variável contra vários valores possíveis, executando o bloco correspondente ao valor encontrado. Essas estruturas são essenciais para tornar o programa dinâmico, reagindo de formas diferentes conforme os dados recebidos ou as situações que ocorrem durante a execução.

Vamos para os exemplos:

### **if-else (Se-Senão)**  

```c
#include <stdio.h>

int main() {
    int idade;
    printf("Digite sua idade: ");
    scanf("%d", &idade);

    if (idade >= 18) {
        printf("Você é maior de idade.\n");
    } else {
        printf("Você é menor de idade.\n");
    }

    return 0;
}
```  

### **switch-case (Escolha-Caso)**  

```c
#include <stdio.h>

int main() {
    char opcao;
    printf("Escolha (A/B/C): ");
    scanf(" %c", &opcao);

    switch (opcao) {
        case 'A':
            printf("Opção A selecionada.\n");
            break;
        case 'B':
            printf("Opção B selecionada.\n");
            break;
        case 'C':
            printf("Opção C selecionada.\n");
            break;
        default:
            printf("Opção inválida.\n");
    }

    return 0;
}
```  

---  

## **6. Laços de Repetição (for, while, do-while)**

Os laços de repetição em C são utilizados para executar um bloco de código várias vezes, enquanto uma determinada condição for verdadeira. O laço `for` é ideal quando se sabe exatamente quantas vezes algo deve se repetir, pois reúne em uma única linha a inicialização, a condição e o incremento. O `while` repete o bloco enquanto a condição for verdadeira, sendo mais usado quando não se sabe ao certo quantas repetições serão necessárias. Já o `do-while` garante que o bloco será executado pelo menos uma vez, pois a verificação da condição acontece somente após a primeira execução. Esses laços tornam o código mais eficiente e organizado ao lidar com tarefas repetitivas.

Vamos para os exemplos:

### **for (Para)**  

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("Número: %d\n", i);
    }
    return 0;
}
```  

### **while (Enquanto)**  

```c
#include <stdio.h>

int main() {
    int contador = 1;
    while (contador <= 5) {
        printf("Número: %d\n", contador);
        contador++;
    }
    return 0;
}
```  

### **do-while (Faça-Enquanto)**  

```c
#include <stdio.h>

int main() {
    int contador = 1;
    do {
        printf("Número: %d\n", contador);
        contador++;
    } while (contador <= 5);
    return 0;
}
```  

---  

## **Conclusão**  

Neste módulo, você aprendeu:  
✅ A estrutura básica de um programa em C.  
✅ Como declarar variáveis e seus tipos.  
✅ Como ler e imprimir dados (`scanf` e `printf`).  
✅ Operadores aritméticos, relacionais e lógicos.  
✅ Estruturas condicionais (`if-else`, `switch-case`).  
✅ Laços de repetição (`for`, `while`, `do-while`).  

Bons estudos!