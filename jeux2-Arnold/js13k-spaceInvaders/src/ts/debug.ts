const $debug = document.querySelector('#debug');

/**
 * Affiche les données de debug dans l'élément #debug.
 * @param data - Les données à afficher
 */
export function log(...data: any[]) {
  $debug.textContent = data.join('\n');
}
