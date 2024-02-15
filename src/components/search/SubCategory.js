import { useEffect, useState, useRef } from "react";
import { getSubCategory } from "../../api/category";
import { startCase } from "@/utils";
import Item from "./Item";
import { IMAGE_PATH_NEW } from "@/utils/Constants";
import styles from "../../components/category/main/category.module.css";
import { getItem } from "@/utils/LS";

let mouseDown = false;
let startX, scrollLeft;
export default function SubCategory({ hideSearchPopupCB, isMobile, categoryList }) {
  const [subCategory, setSubCategory] = useState([]);
  const parentRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      parentRef.current.addEventListener("mousedown", startDragging, false);
      parentRef.current.addEventListener("mouseup", stopDragging, false);
      parentRef.current.addEventListener("mouseleave", stopDragging, false);
      parentRef.current.addEventListener("mousemove", moveCategory);

      return () => {
        parentRef.current?.addEventListener("mousedown", startDragging, false);
        parentRef.current?.addEventListener("mouseup", stopDragging, false);
        parentRef.current?.addEventListener("mouseleave", stopDragging, false);
        parentRef.current?.addEventListener("mousemove", moveCategory);
      };
    }
  }, [isMobile]);

  async function getCategory() {
    const subCat = getItem("category");
    if (subCat && subCat.length > 0) {
      setSubCategory(subCat)
    } else {
      const response = await getSubCategory();
      if (response.status !== "success") {
        setSubCategory([]);
      }
      setSubCategory(response.result);
    }
  }



  useEffect(() => {
    if (categoryList && categoryList.length > 0) {
      setSubCategory(categoryList)
    } else {
      getCategory();
    }
  }, [categoryList])

  const moveCategory = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }

    const x = e.pageX - parentRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    parentRef.current.scrollLeft = scrollLeft - walk;
  };

  const startDragging = (e) => {
    e.preventDefault();
    mouseDown = true;
    startX = e.pageX - parentRef.current.offsetLeft;
    scrollLeft = parentRef.current.scrollLeft;
  };

  const stopDragging = (e) => {
    e.preventDefault();
    mouseDown = false;
  };

  return (
    <div
      className={`${styles.categories} ${styles.categSearch} ${styles.draggable}`}
      ref={parentRef}
    // style={{ overflowX: "hidden" }}
    >
      {subCategory && Array.isArray(subCategory) && subCategory.length > 0 && (
        <ul ref={categoryRef}>
          {subCategory.map((item) => {
            const title = `Online ${startCase(item.name)} Games List`;
            const src = item && item.name ? `${IMAGE_PATH_NEW}cat/${item.name.toLowerCase()}.png` : "/img/noGameImage"
            return (
              <Item
                key={item.name}
                name={item.name}
                hideSearchPopupCB={hideSearchPopupCB}
                slug={`/online-${item.slug}-games`}
                title={title}
                height={46}
                width={30}
                icon={src}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
