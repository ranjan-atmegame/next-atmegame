"use client";
import { useState, useRef, Fragment, useEffect } from "react";
import Item from "./Item";
import dynamic from "next/dynamic";
import Container from "./Container";
import useDevice from "@/hooks/useDevice";
import { setItem } from "@/utils/LS";

const SubCategories = dynamic(() => import("./SubCategories"), { ssr: false });

export default function Categories({ mainCategory }) {
  const [toggleSubCat, setToggleSubCat] = useState(false);
  const [mobile] = useDevice();

  const toggleSubCatgory = () => {
    setToggleSubCat((prev) => {
      return !prev;
    });
    mobile && document.body.classList.toggle("overflowHidden");
  };

  const closeSubCatgory = () => {
    setToggleSubCat(false);
    mobile && document.body.classList.remove("overflowHidden");
  };

  useEffect(() => {
    let category = mainCategory.slice(0, (mainCategory.length - 1));
    setItem("category", category);
  }, [mainCategory]);

  const subCatRef = useRef(null);

  return (
    <>
      <Container>
        {mainCategory.map((category, i) => {
          return (
            <Fragment key={category.slug + i}>
              <Item
                name={category.slug}
                key={category.slug + i}
                category={category}
                toggleSubCatCB={toggleSubCatgory}
                CloseSubCatCB={closeSubCatgory}
                ref={category.name == "more" ? subCatRef : null}
                priority={true}
              />
              {toggleSubCat && category && category.name == "more" ? (
                <>
                  <SubCategories
                    closeSubCatCB={closeSubCatgory}
                    toggleClass={toggleSubCat ? "show" : "hide"}
                    parentRef={subCatRef}
                    key={category.name}
                  />
                </>
              ) : null}
            </Fragment>
          );
        })}
      </Container>
    </>
  );
}
