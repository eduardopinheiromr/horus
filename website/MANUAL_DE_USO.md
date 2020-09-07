# SVG

Para inserir SVGs otimizados por sprites, basta utilizar o snippet "svg" no HTML.

Caso você não tenha este snippet, basta usar o comando Ctrl + Shift + P, digitar "snippet", clicar em "Preferences: Configure User Snippets" > "New Global Snippets File" > Inserir o nome do snippet(você escolhe, recomendo que coloque "sprites") e colar o código abaixo.

```
{
  "Insert symbol to html": {
    "scope": "html",
    "prefix": "svg",
    "body": [
      "<svg class='$1'>",
      "  <use xlink:href='./img/sprite.svg#$2'></use>",
      "</svg>"
    ],
    "description": "Insert a complete tag of svg symbol reference"
  }

}
```
