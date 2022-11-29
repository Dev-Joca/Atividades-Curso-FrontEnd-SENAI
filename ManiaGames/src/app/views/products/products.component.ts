import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderizarProdutos()
  }

  renderizarProdutos() {
    let secaoProdutos:any = document.getElementById("secao_produtos")

    let listaProdutos = [
        {
            nome: "Xbox One",
            imagem: "/assets/img/xboxone.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Playstation 4",
            imagem: "/assets/img/ps4.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Notebook Gamer Start",
            imagem: "/assets/img/notebookstart.jpg",
            descricao: "Descrição",
            preco: 3500.00
        },
        {
            nome: "Xbox One",
            imagem: "/assets/img/xboxone.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Playstation 4",
            imagem: "/assets/img/ps4.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Notebook Gamer Start",
            imagem: "/assets/img/notebookstart.jpg",
            descricao: "Descrição",
            preco: 3500.00
        },
        {
            nome: "Xbox One",
            imagem: "/assets/img/xboxone.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Playstation 4",
            imagem: "/assets/img/ps4.jpg",
            descricao: "Descrição",
            preco: 2500.00
        }
    ]

    // Template Strings (usa crase como separador ``)
    let template = ""

    for (let index = 0; index < listaProdutos.length; index++) {
        template = template + `
        <div class="produtos card">
            <a href="#"><img class="imagemprod" src="${ listaProdutos[index].imagem }"></a>
            <h4>${ listaProdutos[index].nome }</h4>
            <p>${ listaProdutos[index].descricao }</p>
            <p>R$${ listaProdutos[index].preco }</p>
            <a href="#">
            <h3 class="button">Comprar</h3>
            </a>
        </div>
        `
    }

    secaoProdutos.innerHTML = template
  }

}

