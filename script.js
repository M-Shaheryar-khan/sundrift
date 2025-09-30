
    /// CSXSO 2025 by harvard Uni
    /// The Phsycology Class yale Uni
    ///Digital Marketing certification course hubspot Academy
  function divElemSet(){
let img = [
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp",
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp",
      
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp",
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp",
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp"];


    let elem_list = document.querySelectorAll('.elem');
    let img_poster = document.querySelector('.elemImg');

    /////// Set Custom Attributes to elem Div ///////        
    elem_list.forEach((elem,i)=>{
      elem.setAttribute('dataImage',img[i]);     
    });
    
    
    /////////////// Set Image on Hover to //////////    
    elem_list.forEach((e)=>{
      var data = e.getAttribute('dataImage');
      e.addEventListener('mouseenter',()=>{
        img_poster.style.display="block";
        img_poster.style.backgroundImage = `url(${data})`;
      })
      e.addEventListener("mouseleave",()=>{
        img_poster.style.display='none'
      })
    })
  }
    function loader(){
      let loaderr = document.getElementById("loader");
      setTimeout(()=>{
        loaderr.style.top='-100%';
        
      },4000)}
      loader();
      divElemSet();