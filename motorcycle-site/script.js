(function(){
  var q='', cat='All';
  var grid=document.getElementById('grid'), count=document.getElementById('count'), empty=document.getElementById('empty');
  var input=document.getElementById('q'), tabs=document.querySelectorAll('.tab');
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function render(){
    var list=REVIEWS.filter(function(r){
      return (cat==='All'||r.cat===cat)&&(!q||(r.name+' '+r.cat).toLowerCase().indexOf(q)>-1);
    });
    grid.innerHTML=list.map(function(r){
      var photo=r.photo?'<img src="'+esc(r.photo)+'" alt="'+esc(r.name)+'">':'[PHOTO: '+esc(r.name)+']';
      var link=r.done?'<a class="more" href="reviews/'+esc(r.slug)+'.html">Read review</a>':'<span class="more soon">Review coming soon</span>';
      return '<article class="card"><div class="photo">'+photo+'</div><div class="card-body"><div class="card-top"><strong>'+esc(r.name)+'</strong><span class="score">'+esc(r.rating)+' / 10</span></div><div class="meta">'+esc(r.cat)+' · NPR '+esc(r.price)+'</div><p>'+esc(r.verdict)+'</p>'+link+'</div></article>';
    }).join('');
    count.textContent=list.length+(list.length===1?' bike':' bikes');
    empty.hidden=list.length>0;
  }
  input.addEventListener('input',function(){q=input.value.trim().toLowerCase();render();});
  document.getElementById('search-form').addEventListener('submit',function(e){e.preventDefault();});
  tabs.forEach(function(t){t.addEventListener('click',function(){
    cat=t.dataset.cat;tabs.forEach(function(x){x.setAttribute('aria-pressed',x===t?'true':'false');});render();
  });});
  render();
})();
