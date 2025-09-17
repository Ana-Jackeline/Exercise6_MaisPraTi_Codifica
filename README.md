# Loja – React UI (4 Versões de Estilização)

Este projeto apresenta uma tela de e-commerce implementada em **React**, com **Navbar fixa**, **grid responsivo de produtos**, **cards interativos**, **dark mode** e **acessibilidade**.  
Ele foi desenvolvido em quatro versões, cada uma utilizando uma técnica diferente de estilização.

---

## 📂 Estrutura geral

```
root/
│── 01-css-global/
│── 02-css-modules/
│── 03-tailwind/
│── 04-styled-components/
```

Cada pasta contém uma versão completa, incluindo:

- `App.jsx`  
- `index.jsx`  
- `components/` (Navbar, ProductCard, Button, Skeleton)  
- `data.js`  

---

## ⚡ Funcionalidades comuns

- **Navbar fixa**: logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.  
- **Grid responsivo de produtos**:
  - ≤480px: 1 coluna  
  - 481–768px: 2 colunas  
  - 769–1024px: 3 colunas  
  - ≥1025px: 4 colunas  
- **Cards de produto**:
  - Imagem 1:1 (placeholder)  
  - Título truncado em 2 linhas com ellipsis  
  - Preço, rating (★) e tag (“Novo”/“Promo”)  
  - Botões com variantes `solid`, `outline`, `ghost`  
- **Estados e interações**:
  - Hover (elevação/sombra)  
  - Focus visível (focus ring)  
  - Disabled  
  - Loading com skeleton (simulando atraso)  
- **Dark mode** persistente  
- **Acessibilidade**: navegação por teclado, `aria-*`, contraste ≥ 4.5:1  
- **Animações**: transições de 150–250ms (transform/opacity)

---

## 🛠 Tecnologias utilizadas por versão

| Versão | Técnica | Observações |
|--------|--------|-------------|
| 01 | CSS Global | Todos os estilos em `styles.css` global |
| 02 | CSS Modules | Componentes estilizados com arquivos `.module.css` |
| 03 | Tailwind CSS | Classes utilitárias, dark mode via `class`, grid responsivo com utilitários |
| 04 | styled-components | CSS-in-JS, ThemeProvider para dark mode, props para variantes |

---

## 🚀 Como rodar cada versão

1. Entre na pasta da versão desejada, por exemplo:

```bash
cd 03-tailwind
```

2. Instale dependências:

```bash
npm install
```

- **Tailwind:** `npm install tailwindcss @tailwindcss/vite`
- **Styled-components:** `npm install styled-components`

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador `http://localhost:5173` (ou porta indicada pelo Vite)

