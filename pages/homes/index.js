import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import Home from "@/components/modules/Home";

function Index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([...db.homes]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        setHomes([...db.homes]);
        break;
      }
    }
  }, [sort]);

  const paginateHandler = (event, page) => {
    event.preventDefault();
    const endIndex = 3 * page;
    const startIndex = endIndex - 3;
    const paginatedHomes = db.homes.slice(startIndex, endIndex);
    setPage(page);
    setHomes(paginatedHomes);
  };

  return (
    <div class="home-section" id="houses">
      <div class="home-filter-search">
        <div class="home-filter">
          <select
            defaultValue={sort}
            onChange={(event) => setSort(event.target.value)}
            name=""
            id=""
          >
            <option value="-1" selected>
              انتخاب کنید
            </option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
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
          <h1>چیزی یافت نشد</h1>
        ) : (
          <>
            {homes.slice(0, 3).map((home) => (
              <Home key={home.id} {...home} />
            ))}
          </>
        )}
      </div>

      <ul class="pagination__list">
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, index) => (
            <li
              key={index + 1}
              class={`pagination__item ${
                index + 1 === page ? "pagination__item_Active" : ""
              }`}
              onClick={(event) => paginateHandler(event, index + 1)}
            >
              <a href="#" class="">
                {index + 1}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Index;
