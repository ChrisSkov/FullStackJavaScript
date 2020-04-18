const gameArea = {
    type: "Polygon",
    coordinates: [
      [
        [12.34640121459961, 55.6192242744589],
        [12.337474822998047, 55.608317515634745],
        [12.352409362792969, 55.59949293997027],
        [12.363996505737305, 55.60531156446196],
        [12.36760139465332, 55.6172855168366],
        [12.34640121459961, 55.6192242744589]
      ]
    ]
  };
  const players = [
    {
      type: "Feature",
      properties: { name: "p.1: inside" },
      geometry: {
        type: "Point",
        coordinates: [12.349576950073242, 55.61495888113106]
      }
    },
    {
      type: "Feature",
      properties: { name: "p.2: inside" },
      geometry: {
        type: "Point",
        coordinates: [12.350606918334961, 55.60962648687995]
      }
    },
    {
      type: "Feature",
      properties: { name: "p.3: outside" },
      geometry: {
        type: "Point",
        coordinates: [12.352924346923828, 55.62600917113651]
      }
    },
    {
      type: "Feature",
      properties: { name: "p.4: outside" },
      geometry: {
        type: "Point",
        coordinates: [12.344598770141602, 55.59721374348806]
      }
    }
  ];
  
  module.exports = { gameArea, players };