const luke = async (people) => {
  let response = await fetch(`https://swapi.dev/api/people/${people}`);
  let data = await response.json()
  return data
}
(async () => {
  let skywalker = await luke(1)
  console.log(luke)
})();

