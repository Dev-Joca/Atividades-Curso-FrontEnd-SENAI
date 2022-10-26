function showMenu(){
    let menu = document.getElementById('menuLista');
    if (window.getComputedStyle(menu).display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
};
function login(){
    alert('Logado com sucesso!');
}