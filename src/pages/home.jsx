import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function Home() {
  const [searchParam, setsearchParam] = useSearchParams();
  const typeFilter = searchParam.get("userName");

  const [DATA, setDATA] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Blog").then((req) =>
      req.json().then((res) => setDATA(res))
    );
  }, []);
  const filteredDATA = typeFilter
    ? DATA.filter((char) => char.userName.toLowerCase() === typeFilter)
    : DATA;

  function SPstring(key, value) {
    const sp = new URLSearchParams(searchParam);
    !value ? sp.delete(key) : sp.set(key, value);
    return `?${sp.toString()}`;
  }
  function handleSP(key, value) {
    setsearchParam((prevParam) => {
      !value ? prevParam.delete(key) : prevParam.set(key, value);
      return prevParam;
    });
  }
  return (
    <>
      <section className="mx-24">
        <h2>
          This is <strong>Home page</strong> of this react App with routing
        </h2>
        <h1>Here are some Data : </h1>
        <div className="flex flex-col">
          <span>filter data </span>
          <div className="flex justify-evenly items-center">
            <div>
              {/* method one using vanilla javascript */}
              <Link
                className="text-white mx-2"
                to={SPstring("userName", "casey murray")}
              >
                casey murray
              </Link>
              <Link
                className="text-white mx-2"
                to={SPstring("userName", "josephine ankunding")}
              >
                josephine ankunding
              </Link>
              {typeFilter ? <Link className="text-white mx-2" to={SPstring("userName", null)}>
                Clear
              </Link> : null}
            </div>
            {/* MEthod two using react-router_6 guidlines */}
            {/* 
            CONS: 
            1- We cant make multiple filters using this method
            */}
            <div className="flex flex-col">
              <div>
                <button
                  onClick={() => {
                    setsearchParam({ userName: "casey murray" });
                  }}
                >
                  Casey Murray
                </button>
                <button
                  onClick={() => {
                    setsearchParam({ userName: "josephine ankunding" });
                  }}
                >
                  josephine Ankunding
                </button>
                {typeFilter ? <button
                  onClick={() => {
                    setsearchParam({});
                  }}
                >
                  clear 
                </button> : null}
              </div>
              
              {/* 
              **  This is another way or we can say third way to filter data bu using both vanilla JS and react router element */}
              <div>
                <button
                  onClick={() => {
                    handleSP("userName", "casey murray");
                  }}
                >
                  Casey Murray
                </button>
                <button
                  onClick={() => {
                    handleSP("userName", "josephine Ankunding");
                  }}
                >
                  josephine Ankunding
                </button>
                {typeFilter ?  <button
                  onClick={() => {
                    handleSP("userName", null);
                  }}
                >
                  clear
                </button> : null}
              </div>
            </div>
          </div>
        </div>
        {filteredDATA.map((e) => {
          return (
            <>
              <article key={e.id}>
                <span>{e.id}.</span>
                <h2>this is name : {e.userName}</h2>
                <span>This is title from DATA_CODE : {e.title}</span>
                <Link to={"/" + e.id}>{e.link}</Link>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
}
