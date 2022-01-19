const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?apikey=8db15b8ddd57ce424cfbd8ed525bd7f8';
        let containerHeroes = document.querySelector('#contenedorHeroes');
        let contentHtml = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                let templateHero;
                console.log(json, 'RES.JSON');
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    
                const dateString = new Date(hero.modified);
                const dateDia=dateString.getDate()+"-"+(dateString.getMonth()+1)+"-"+dateString.getFullYear();
              
                    contentHtml += `
                <div class="row-sm-3">                  
                    <div class="card" style="width: 18rem;">
                        <img   src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${hero.name}</h5>
                         <p> ${dateDia}</p>
                         <p> ${hero.description}</p>
                         <a href="${urlHero}"  class="btn btn-primary">Actualizar</a>
                     </div>
                    </div>
                </div>
                    `
                }
                containerHeroes.innerHTML = contentHtml;
            })

    }

}
marvel.render();