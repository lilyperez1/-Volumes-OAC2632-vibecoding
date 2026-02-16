document.addEventListener('click', function(e){
  if(e.target.matches('.gallery-item')){
    const src = e.target.src;
    const lb = document.getElementById('lightbox');
    lb.innerHTML = '<img src="'+src+'" alt="enlarged">';
    lb.classList.remove('hidden');
  }
  if(e.target.id==='lightbox'){
    e.target.classList.add('hidden');
    e.target.innerHTML='';
  }
});
