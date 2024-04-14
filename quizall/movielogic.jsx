export const calculateMostCommonActorAndGenre = (answers) => {
  const actorCounts = {};
  const genreCounts = {};

  // Tally the counts for each actor and genre from the answers
  answers.forEach(answer => {
    actorCounts[answer.actor] = (actorCounts[answer.actor] || 0) + 1;
    genreCounts[answer.genre] = (genreCounts[answer.genre] || 0) + 1;
  });

  // Find the actor and genre with the highest count
  let mostCommonActor = null;
  let maxActorCount = 0;
  for (const actor in actorCounts) {
    if (actorCounts[actor] > maxActorCount) {
      mostCommonActor = actor;
      maxActorCount = actorCounts[actor];
    }
  }

  let mostCommonGenre = null;
  let maxGenreCount = 0;
  for (const genre in genreCounts) {
    if (genreCounts[genre] > maxGenreCount) {
      mostCommonGenre = genre;
      maxGenreCount = genreCounts[genre];
    }
  }

  return { mostCommonActor, mostCommonGenre };
};

