document.querySelectorAll('a[href^="tel:"]').forEach(a=>{
  a.addEventListener('click',()=>console.log('Calling Rashid Tea Stall'));
});
