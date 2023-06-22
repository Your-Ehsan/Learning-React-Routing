/*
Question: Why api.js is necessary? 
Answer: Because of Happy path and Sad path. NOTE: we should always Ready for sad path. cuz (ERRORS Loves Programmers)
*/

export async function GetData() {
  const res = await fetch("http://localhost:3000/Blog");
  if (!res.ok) {
    throw {
      message: "Faild to fetch Data",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const Data = await res.json();
  return Data;
}
