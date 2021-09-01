function getData() {
  const items = [
    {
      id: "b12",
      title: "Winter",
      image: "https://www.pexels.com/photo/1438761/download/",
      preview:
        "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Nature",
    },
    {
      id: "b19",
      title: "Wolf",
      image: "https://www.pexels.com/photo/397857/download/",
      preview:
        "https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Animal",
    },
    {
      id: "b8",
      title: "Ford",
      image: "https://www.pexels.com/photo/638479/download/",
      preview:
        "https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b9",
      title: "Maserati",
      image: "https://www.pexels.com/photo/7335737/download/",
      preview:
        "https://images.pexels.com/photos/7335737/pexels-photo-7335737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b11",
      title: "Water fall",
      image: "https://www.pexels.com/photo/2387873/download/",
      preview:
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Nature",
    },
    {
      id: "b1",
      title: "BMW",
      image: "https://www.pexels.com/photo/170811/download/",
      preview:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b2",
      title: "TOTOTA",
      image: "https://www.pexels.com/photo/1149137/download/",
      preview:
        "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b3",
      title: "Alfa romeo",
      image: "https://www.pexels.com/photo/210019/download/",
      preview:
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b5",
      title: "Land rover",
      image: "https://www.pexels.com/photo/116675/download/",
      preview:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b6",
      title: "Audi",
      image: "https://www.pexels.com/photo/1149831/download/",
      preview:
        "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b13",
      title: "Mountain",
      image: "https://www.pexels.com/photo/691668/download/",
      preview:
        "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Nature",
    },
    {
      id: "b14",
      title: "Amazing Trees",
      image: "https://www.pexels.com/photo/131723/download/",
      preview:
        "https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Nature",
    },
    {
      id: "b15",
      title: "Dirt Road",
      image: "https://www.pexels.com/photo/163848/download/",
      preview:
        "https://images.pexels.com/photos/163848/road-mountains-sunset-path-163848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Nature",
    },
    {
      id: "b4",
      title: "Mercedes benz",
      image: "https://www.pexels.com/photo/112460/download/",
      preview:
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b7",
      title: "Mercedes benz",
      image: "https://www.pexels.com/photo/810357/download/",
      preview:
        "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Car",
    },
    {
      id: "b16",
      title: "Cloudy sky",
      image: "https://www.pexels.com/photo/2114014/download/",
      preview:
        "https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Sky",
    },
    {
      id: "b17",
      title: "Red sky",
      image: "https://www.pexels.com/photo/844297/download/",
      preview:
        "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Sky",
    },
    {
      id: "b18",
      title: "Blue sky",
      image: "https://www.pexels.com/photo/4737484/download/",
      preview:
        "https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Sky",
    },

    {
      id: "b20",
      title: "Curious Fox",
      image: "https://www.pexels.com/photo/6244506/download/",
      preview:
        "https://images.pexels.com/photos/6244506/pexels-photo-6244506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Animal",
    },
    {
      id: "b21",
      title: "Beautiful Macaw",
      image: "https://www.pexels.com/photo/2317904/download/",
      preview:
        "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      favorite: false,
      download: 0,
      category: "Animal",
    },
  ];
  return items;
}
export default getData;
