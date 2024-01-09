chrome.tabs.query({}, function (tabs) {
    const numberOfTabs = tabs.length;
    const treeImage = document.getElementById('treeImage');
   // on fait une fonction qui vérifie le nombre d'onglets ouvert et envoie l'image d'arbre qui correspond.//
    if (numberOfTabs <= 3) {
      treeImage.src = 'image/tree_healthy.png';
    } else if (numberOfTabs <= 5) {
      treeImage.src = 'image/tree_losing_leaves.png';
    } else {
      treeImage.src = 'image/tree_dead.png';
    }
  });