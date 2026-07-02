window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  // Navbar burger toggle
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Initialize carousels with arrows
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);

  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', function(state) {
      console.log(state);
    });
  }

  // BibTeX copy button
  var copyBtn = document.getElementById('copy-bibtex');
  var bibtexCode = document.getElementById('bibtex-code');
  if (copyBtn && bibtexCode) {
    copyBtn.addEventListener('click', function() {
      var text = bibtexCode.textContent;
      navigator.clipboard.writeText(text).then(function() {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(function() {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      }).catch(function() {
        // Fallback
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          copyBtn.textContent = 'Copied!';
          copyBtn.classList.add('copied');
        } catch (e) {
          copyBtn.textContent = 'Failed';
        }
        setTimeout(function() {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
        document.body.removeChild(textarea);
      });
    });
  }
});
