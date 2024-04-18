import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import "./Prod.scss";

const Prod = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <div>
        <div className="links_prod">
          <button type="button" data-testid="to-back" className="btn_links">
            {" "}
            <a href="/">
              {" "}
              <i class="fa-solid fa-chevron-left"></i> Orqaga
            </a>
          </button>
          <ol
            data-testid="breadcrumbs"
            data-cy="categories-breadcrumbs"
            className="links_ol"
          >
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a href="/" className="links_a">
                Bosh sahifa{" "}
              </a>
            </li>
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a href="/oz/transport/" className="links_a">
                Transport{" "}
              </a>
            </li>
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a href="/oz/transport/legkovye-avtomobili/" className="links_a">
                Yengil avtomashinalar{" "}
              </a>
            </li>
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a
                href="/oz/transport/legkovye-avtomobili/drugie/"
                className="links_a"
              >
                Boshqalar{" "}
              </a>
            </li>
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a
                href="/oz/transport/legkovye-avtomobili/drugie/toshkent-oblast/"
                className="links_a"
              >
                Boshqalar - Toshkent viloyati{" "}
              </a>
            </li>
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a
                href="/oz/transport/legkovye-avtomobili/drugie/tashkent/"
                className="links_a"
              >
                Boshqalar - Toshkent{" "}
              </a>
            </li>
            <li data-testid="breadcrumb-item" className="links_li">
              {" "}
              <a
                href="/oz/transport/legkovye-avtomobili/drugie/tashkent/?search%5Bdistrict_id%5D=22"
                className="links_a"
              >
                Boshqalar - Yashnobod tumani{" "}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Prod;
