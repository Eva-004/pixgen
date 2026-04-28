
 export const getData = async()=>{
  const res = await fetch('https://pixgen-woad.vercel.app/data.json');
    const photos = await res.json();
    return photos;
 }