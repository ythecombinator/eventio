import FontFaceObserver from 'fontfaceobserver';

const loadFonts = () => {
  if (process.browser) {
    const hindFontLink = document.createElement('link');
    hindFontLink.href = 'https://fonts.googleapis.com/css?family=Hind:300,400,500,700,900';
    hindFontLink.rel = 'stylesheet';

    const playfairDisplayFontLink = document.createElement('link');
    playfairDisplayFontLink.href =
      'https://fonts.googleapis.com/css?family=Playfair+Display:300,400,500,700,900';
    playfairDisplayFontLink.rel = 'stylesheet';

    document.head.appendChild(hindFontLink);
    document.head.appendChild(playfairDisplayFontLink);

    const hindFont = new FontFaceObserver('Hind');
    const playfairDisplayFont = new FontFaceObserver('Playfair Display');

    hindFont.load().then(() => {
      document.documentElement.classList.add('hind');
    });
    playfairDisplayFont.load().then(() => {
      document.documentElement.classList.add('playfair_display');
    });
  }
};

export {loadFonts};
