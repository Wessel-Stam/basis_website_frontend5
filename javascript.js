
    const searchfrom = document.querySelector('.search');
    const input = document.querySelector('.input');
    const newslist = document.querySelector('.news-List');
    const apikey = "ac493473d18b4ad6b090e3914d8c689c";
    const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-21&sortBy=publishedAt&apiKey="+apikey;
    console.log(newslist);

    function retrieve(){
        /*
        e.preventdefault()
        
        let topic = input.value;

        let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`

        fetch(url).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            data.articles.foreach(article =>{
                let li = document.createelement('li');
                let a = document.createelement('a');
                a.setattribute('href', article.url);
                a.setattribute('target','_blank');
                a.textcontent = article.title;
                li.appendchild(a);
                newslist.appendchild(li);
        })

        
    })
    */
    function convertToJason(response){
        return response.json(); //zet het om van rauwe data naar json
    }

    function processData(data){
        //document.querySelector("#container").innerHTML = data.articles;  //laat zien wat je hebt ontvangen
        for(var i = 0; i < data.articles.length; i++){
  
            document.querySelector("#container").innerHTML +='<p class="author">'+ data.articles[i].author+"</p>";  //laat zien wat je hebt ontvangen

            document.querySelector("#container").innerHTML +='<p class="title">'+ data.articles[i].title+"</p>";

            document.querySelector("#container").innerHTML +='<p class="description">'+ data.articles[i].description+"</p>";

            document.querySelector("#container").innerHTML +='<p class="url">'+ data.articles[i].url+"</p>";

            document.querySelector("#container").innerHTML +="<img class='urlToImage' src='"+ data.articles[i].urlToImage+"'>";
            console.log("<img class='urlToImage' src='"+ data.articles[i].urlToImage+"'>");

            document.querySelector("#container").innerHTML +='<p class="publishedAt">'+ data.articles[i].publishedAt+"</p>";

            document.querySelector("#container").innerHTML +='<p class="content">'+ data.articles[i].content+"</p>";
        }
    }

    fetch(url) //haal de data op
    .then(convertToJason) 
    .then(processData) 
    .catch(function(err) {console.log('Fetch Error :-S', err)});
}