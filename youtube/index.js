let API_KEY = "AIzaSyCN1ojc7T_Fn5q_997EA_c_5BIqWDc9r6c";

//let URL = "https://youtube.googleapis.com/youtube/v3/search?q=rrr&key=[YOUR_API_KEY]"

let constainer = document.getElementById('container');

let getData = async () => {

    try{

        let query = document.getElementById('query').value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=50`);
        
        let { items } = await res.json();
       console.log(items);
          
         let array_of_video = items;
         appendVideo(array_of_video); 

    } catch(err) {
        console.log(err);
       }
};

let appendVideo = (data) =>{

    constainer.innerHTML = null;

    data.forEach( ({ snippet:{ title }, id:{ videoId } }) => {

        let div = document.createElement('div');
         
        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allow = "fullscreen";

        let name = document.createElement('h5');
        name.innerText = title;
        
        div.append(iframe, name);

        constainer.append(div);

        // let data = {
        //     snippet:sinppet,
        //     videoId : videoId
        // };
        
        // div.onclick = () =>{
        //     localStorage.setItem("clickedVideo",JSON.stringify(data))
        // }
    });

};