var test = {};
test.en = {
  	gnav : function() {
  		var tag = [];
  		tag.push('<nav id="gnav">');
  		tag.push('<ul class="cf nav-global content-inner">');
  		tag.push('<li class="nav-global-e-top" data-gnav="top">' + this.localNaviTop() + '</li>');
      		tag.push('</ul>');
		tag.push('</nav>');
		return tag.join('');
    },
  	localNaviTop : function() {
  		var tag = [];
  		tag.push('<h2 class="snav-top btn-toggle"><a href="/en/index.html">TOP</a></h2>');
  		tag.push('<h3 class="view-pc"><a href="/en/index.html">TOP</a></h3>');
  		return tag.join('');
	  },
};
  
