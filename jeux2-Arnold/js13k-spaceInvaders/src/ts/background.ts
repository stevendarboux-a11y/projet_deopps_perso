/**
 * Initialise le canvas de fond et gère le redimensionnement.
 */
export function init() {
  const $canvas = document.querySelector('#background') as HTMLCanvasElement;
  const ctx = $canvas.getContext('2d');

  window.addEventListener('resize', resize);
  resize();

  /**
   * Dessine le fond étoilé sur le canvas.
   */
  function drawBackground() {
    const imageData = new ImageData($canvas.width, $canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const val = Math.random() < 0.001 ? 255 : 0;
      imageData.data[i] = val;
      imageData.data[i + 1] = val;
      imageData.data[i + 2] = val;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  /**
   * Redimensionne le canvas à la taille de la fenêtre.
   */
  function resize() {
    $canvas.width = window.innerWidth;
    $canvas.height = window.innerHeight;

    drawBackground();
  }
}
