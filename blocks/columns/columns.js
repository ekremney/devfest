const EMBEDDED_GMAPS = 'https://maps.google.com/maps?q=Uniq%20Istanbul&t=m&z=13&ie=UTF8&output=embed';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  if (block.classList.contains('maps-left')) {
    const maps = document.createElement('iframe');
    maps.src = EMBEDDED_GMAPS;
    maps.loading = 'lazy';
    maps.height = '100%';
    maps.width = '100%';
    const container = block.querySelector(':scope > div > div');
    container.append(maps);
  }
}
