/* popup info start */
//;(function() {
var closestAttr = function(item, attr) {
    var node = item;
    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }
      node = node.parentElement;
    }
    return null;  };

async function getHtmBS(e) {
	var target = e.target;
	const container_main=document.querySelector("#container_main");
	const container_blog=document.querySelector("#container_blog");
	const hero_sidebar=document.querySelector(".hero-sidebar");
	var blogAttr = closestAttr(target, 'data-blog');
	if (blogAttr === "nav_bar") {container_blog.style.display = 'none';
		container_main.removeAttribute("style");
		hero_sidebar.removeAttribute("style");
		container_main.parentNode.classList.remove("col-xl-8");
		container_main.parentNode.classList.add("col-xl-6");
		return}
  response = await fetch("/static/blog_single.html")
  container_blog.innerHTML=await response.text(); //then(res => (res.json()))
		container_blog.style.display = 'block';
		container_main.style.display = 'none';
		hero_sidebar.style.display = 'none';
		container_main.parentNode.classList.remove("col-xl-6");
		container_main.parentNode.classList.add("col-xl-8");

  window.scroll({top: 0});
}

//})();
/* form end */