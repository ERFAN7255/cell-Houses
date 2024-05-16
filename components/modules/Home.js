import Link from "next/link";
import React from "react";

function Home({ title, id, price, meterage, roomCount, img }) {
  return (
    <>
      <div class="card">
        <img src={img} alt="House 6" class="card__img" />
        <h5 class="card__title">{title}</h5>
        {/* <svg class="card__like">
          <use xlink:href="img/sprite.svg#icon-heart-full"></use>
        </svg> */}
        <div class="card__details">
          <svg class="card__icon">
            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
          </svg>
          <p class="card__text">مالدیو</p>

          {/* <svg class="card__icon">
            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
          </svg> */}
          <p class="card__text">{roomCount} اتاق</p>

          {/* <svg class="card__icon">
            <use xlink:href="img/sprite.svg#icon-expand"></use>
          </svg> */}
          <p class="card__text">{meterage} متر مربع</p>

          {/* <svg class="card__icon">
            <use xlink:href="img/sprite.svg#icon-key"></use>
          </svg> */}
          <p class="card__text">{price.toLocaleString()} میلیون تومان</p>
        </div>

        <Link href={`/homes/${id}`} class="btn btn-brown btn-card">
          مشاهده ملک
        </Link>
      </div>
    </>
  );
}

export default Home;
