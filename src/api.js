export async function GetData() {
  const res = await fetch("http://localhost:3000/Blog");
  const Data = await res.json();
  return Data;
}
