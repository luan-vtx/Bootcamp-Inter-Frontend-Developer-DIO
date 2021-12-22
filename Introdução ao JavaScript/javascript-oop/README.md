# Orientação a Objetos

Este repositório contém a atividade prática do Curso "Orientação a Objetos", que faz parte do Basecamp de Javascript que estudei pela Digital Innovation One.

### Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

 1. Crie a classe **ContaBancaria**, que possui os parâmetros _agencia, numero e tipo_;
 2. Dentro de **ContaBancaria**, construa o _getter_ e o _setter_ de saldo;
 3. Dentro de **ContaBancaria**, crie os métodos _sacar_ e _depositar_;
 4. Crie uma classe-filha chamada **ContaCorrente** que herda todos esses parâmetros e ainda possua o parâmetro _cartaoCredito_;
 5. Ainda em **ContaCorrente**, construa o getter e o setter de _cartaoCredito_;
 6. Ainda em **ContaCorrente**, faça com que o tipo seja _'conta corrente'_ por padrão;
 7. Crie uma classe-filha chamada **ContaPoupanca** que herda todos os parâmetros de ContaBancaria;
 8. Crie uma classe-filha chamada **ContaUniversitaria** que herda todos os parâmetros de ContaBancaria;
 9. Faça com que o método saque de **ContaUniversitaria** apenas seja capaz de sacar valores menores que 500 reais.