import { useRouter } from "next/router";
import React from "react";

type Props = any;

const Search = (props: Props) => {
  const router = useRouter();
  const handleSearch = (e: any) => {
    e.preventDefault();
    router.replace(`?q=${props.search}`);
    if (!props.search) {
      return router.push("/products");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="bg-gray-300 border list-item px-5 rounded-md py-[8px] px-[7px] duration-1000 my-2"
      >
        <button>
          <i className="bi bi-search" />
        </button>
        <input
          value={props.search}
          onChange={(e) => props.onchange(e.target.value)}
          id="productSeach"
          placeholder="Tìm kiếm"
          className="border-none bg-transparent w-[250px] px-2 outline-none"
        />
      </form>
    </div>
  );
};

export default Search;
