function checking() {
    let nacionalidade = prompt("Digite seu pais natal ").toUpperCase() //= adicione o prompt aqui

    if(nacionalidade === "BRASIL" ){
        console.log("Nacionalidade brasileira");
    }else if(nacionalidade === "ARGENTINA"){
        console.log("Nacionalidade argentina");
    }else if(nacionalidade === "URUGUAI"){
        console.log("Nacionalidade uruguaia");
    }else if(nacionalidade === "CHILE"){
        console.log("Nacionalidade chilena");
    }else if(nacionalidade === "COLOMBIA"){
        console.log("Nacionalidade colombiana");
    }else {
        console.log("Nacionalidade NAO ENCONTRADA");
    }
};

checking();

