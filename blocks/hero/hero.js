export default function decorate(block) {
  const pictureContainer = block.querySelector('picture').parentElement;
  const overlay = document.createElement('div');
  overlay.classList.add('background-overlay');
  pictureContainer.append(overlay);
}