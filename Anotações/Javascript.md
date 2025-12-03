# ✅ O que é JavaScript?

**JavaScript** é uma linguagem de programação **leve**, **interpretada** e **orientada a objetos**, usada principalmente para criar **páginas web dinâmicas e interativas**.

Com ela, você pode:

* Manipular elementos HTML
* Responder a eventos do usuário
* Validar formulários
* Criar animações
* Trabalhar com dados
* Criar sistemas completos no front-end e no back-end

👉 Geralmente, o JavaScript é usado **junto com o HTML e o CSS**.

---

# ✅ Formas de usar o JavaScript no HTML

### 1️⃣ Dentro do próprio arquivo HTML (tag `<script>`)

```html
<script>
  // Seu código JavaScript aqui
</script>
```

### 2️⃣ Em um arquivo externo `.js`

```html
<script src="caminho/para/seu/arquivo.js"></script>
```

✅ **Boa prática:** sempre colocar o `<script>` **no final do `<body>`**, para evitar travar o carregamento da página.

---

# ✅ Tipos de saída (exibir informações)

### 1️⃣ `innerHTML` (mais usada)

```js
document.getElementById("id_do_elemento").innerHTML = "Texto a ser exibido";
```

### 2️⃣ `document.write()` (apenas para testes)

```js
document.write("Texto a ser exibido");
```

### 3️⃣ `alert()` (caixa de diálogo)

```js
alert("Texto a ser exibido");
```

### 4️⃣ `console.log()` (para testes no console)

```js
console.log("Texto a ser exibido");
```

---

# ✅ Declaração de Variáveis

No JavaScript usamos:

### 🔸 `var` (antigo – evite usar)

```js
var nome = "Richardt";
```

* Escopo global ou de função
* Pode ser sobrescrito
* Pode causar bugs em projetos grandes

---

### 🔹 `let` (o mais usado)

```js
let idade = 20;
```

✅ Pode ser alterado
✅ Respeita escopo de bloco `{}`

---

### 🔒 `const` (valor constante)

```js
const pi = 3.14;
```

✅ Não pode ser reatribuído
✅ Respeita escopo de bloco

📌 **Correção importante:**

> ❌ `let` NÃO é constante
> ✅ Quem é constante é o `const`

---

# ✅ Regras de nomes de variáveis

✅ Correto:

```js
let nomeCompleto = "João Silva";
let nome_completo = "João Silva";
```

❌ Errado:

```js
let nome-completo = "João"; // inválido por causa do hífen
let let = 10; // não pode usar palavras reservadas
```

⚠️ JavaScript é **case sensitive**:

```js
let nome = "João";
let Nome = "Maria";
// São variáveis diferentes!
```

---

# ✅ Concatenação de Strings

```js
let nome = "Richardt";
let sobrenome = "Justke";

let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // "Richardt Justke"
```

---

# ✅ Trabalhando com números

```js
let idade = 15;
let soma = idade + 5;
console.log(soma); // 20
```

Misturando texto com número:

```js
let pessoa = nomeCompleto + " " + soma;
console.log(pessoa); // "Richardt Justke 20"
```

---

# ✅ Quebra de linhas no código

✅ JavaScript ignora espaços e quebras de linha:

```js
let x = 10;
let y = 20;
```

✅ Pode quebrar expressões:

```js
let soma = 10 +
           20 +
           30;
```

---

# ✅ Funções (correção de escrita)

❌ Você escreveu:

```js
funtion minhaFuncao()
```

✅ O correto é:

```js
function minhaFuncao() {
  let x = 10;
  let y = 20;
  return x + y;
}
```

---

# ✅ Tipos de dados

* **Number** → números
* **String** → texto
* **Boolean** → true ou false

Diferença entre número e texto:

```js
console.log("10" + 5); // "105" (concatenação)
console.log(10 + 5);   // 15 (soma)
```

---

# ✅ Operadores Aritméticos

```js
let a = 10;
let b = 3;

a + b  // 13
a - b  // 7
a * b  // 30
a / b  // 3.33
a % b  // 1
```

---

# ✅ Operadores de Atribuição

```js
let x = 10;

x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
x %= 4; // 2
```

---

# ✅ Operadores de Comparação

```js
let a = 10;
let b = "10";

a == b   // true
a === b  // false
a != b   // false
a !== b  // true
a > 5    // true
a < 15   // true
a >= 10  // true
a <= 5   // false
```

---

# ✅ Operadores Lógicos

```js
let x = 10;
let y = 5;

x > 5 && y < 10   // true
x > 15 || y < 10 // true
!(x > 5)         // false
```

---

# ✅ Comentários

```js
// Comentário de uma linha

/*
Comentário
de múltiplas linhas
*/
```

---


