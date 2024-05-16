import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import Home from "@/components/modules/Home";

function Index() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.homes]);
  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  return (
    <div class="home-section" id="houses">
      <div class="home-filter-search">
        <div class="home-filter">
          <select name="" id="">
            <option value="" selected>
              انتخاب کنید
            </option>
            <option value="">بر اساس قیمت</option>
            <option value="">بر اساس تعداد اتاق</option>
            <option value="">بر اساس ادرس</option>
            <option value="">بر اساس اندازه</option>
          </select>
        </div>
        <div class="home-search">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div class="homes">
        {homes.length === 0 ? (
          <h1>دوره یافت نشد</h1>
        ) : (
          <>
            {homes.map((home) => (
              <Home key={home.id} {...home} />
            ))}
          </>
        )}
      </div>
      <ul class="pagination__list">
        <li class="pagination__item">
          <a href="#" class="">
            {" "}
          </a>
        </li>
        <li class="pagination__item">
          <a href="#" class="">
            2
          </a>
        </li>
        <li class="pagination__item active">
          <a href="#" class="">
            1
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Index;
