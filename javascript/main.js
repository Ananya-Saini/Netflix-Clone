const apikey = "5c0ad92cba8735c827e3df85b4f2e194"
const apiEndpoint = "https://api.themoviedb.org/3"
const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/movie/550?api_key=${apikey}`
}

function init(){

}

window.addEventListener('load', function(){
    init();
})