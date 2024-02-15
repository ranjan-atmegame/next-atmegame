import { useEffect, useState, useRef } from "react";
import { getSubCategory } from "../../../api/category";
import Item from "./Item";
import styles from "./subcategory.module.css";
import commonStyle from "@/components/layout/common.module.css";
import { SUB_MORE_CATEGORY } from "@/utils/Constants";
import useDevice from "@/hooks/useDevice";
import Link from "next/link";

const sharedStyles = { ...styles, ...commonStyle };

export default function SubCategories({
  closeSubCatCB,
  toggleClass,
  parentRef,
}) {
  const [subcat, setSubCat] = useState([]);
  const subCatRef = useRef(null);
  const [mobile] = useDevice();

  useEffect(() => {
    subCategory();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        subCatRef.current &&
        !subCatRef.current.contains(event.target) &&
        parentRef.current &&
        !parentRef.current.contains(event.target)
      ) {
        setTimeout(() => {
          if (typeof closeSubCatCB === "function") {
            closeSubCatCB(event);
          }
        }, 10);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [subCatRef]);

  async function subCategory() {
    const response = await getSubCategory();
    if (response.status !== "success") {
      setSubCat([]);
    }
    let data = [...response.result, SUB_MORE_CATEGORY];
    setSubCat(data);
  }

  return (
    <>
      <section
        className={`${sharedStyles.categories} ${sharedStyles[toggleClass]}`}
        ref={subCatRef}
      >
        <div className={sharedStyles.close} onClick={closeSubCatCB}></div>

        {subcat && Array.isArray(subcat) && subcat.length > 0 && (
          <ul>
            {subcat.map((item, i) => (
              <Item
                key={item.slug + i}
                name={item.slug}
                category={item}
                CloseSubCatCB={closeSubCatCB}
              />
            ))}
          </ul>
        )}
      </section>
      {mobile && subcat && Array.isArray(subcat) && subcat.length > 0 && (
        <Link href="/sitemap" className={styles.moreCategoriesBtn}>
          More Categories
        </Link>
      )}
    </>
  );
}
