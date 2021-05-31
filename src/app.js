window.onload = function() {
  let pronoun = ["the", "da", "lil"]; //a
  let adj = ["cute", "ugly", "funny"]; //b
  let noun = ["cat", "coder", "gangsta"]; //c

  generateDomainName(pronoun, adj, noun);
};

function generateDomainName(pronoun, adj, noun) {
  let results = [];

  for (let a in pronoun) {
    for (let b in adj) {
      for (let c in noun) {
        results.push(pronoun[a] + adj[b] + noun[c] + ".com");
        console.log(results);
      }
    }
  }

  document.querySelector(".domains").innerHTML = results;
}
