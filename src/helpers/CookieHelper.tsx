"use client"

function CookieHelper() {

    function getCookie(nome: string) {
        var todosOsCookies = document.cookie;
        var cookiesArray = todosOsCookies.split(';');
        var valorDoCookie = null;

        for (var i = 0; i < cookiesArray.length; i++) {
            var cookie = cookiesArray[i].trim();
            var partes = cookie.split('=');
            var nomeDoCookie = partes[0];

            if (nomeDoCookie === nome) {
            valorDoCookie = partes[1];
            break; // Encontrou o cookie, pode sair do loop
            }
        }

        return valorDoCookie;
    }

  return {
    getCookie
  }
}

export default CookieHelper;
