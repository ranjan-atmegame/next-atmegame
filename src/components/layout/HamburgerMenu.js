"use client"
import { useEffect, useState } from "react";
import Icon from "../ui/images/Icon";
import Sidebar from "./Sidebar";

export default function HamburgerMenu({
    icon,
    styles,
    title,
    width = 36,
    height = 24,
    userInfo
}) {

    const [showMenu, setShowMenu] = useState(false);
    const [addOverlay, setAddOverlay] = useState(false);
    const [auth, setAuth] = useState(userInfo);


    useEffect(() => {
        setAuth(userInfo);
    }, [userInfo]);

    function openMenu(e) {
        e.preventDefault();
        setShowMenu(true);
        document.body.classList.add('overflowHidden');
        setTimeout(() => {
            setAddOverlay(true);
        }, 600);
    }

    function closeMenu() {
        setShowMenu(false);
        setAddOverlay(false);
        document.body.classList.remove('overflowHidden');
    }

    return (
        <>
            <div className={styles.menuIcon} onClick={(e) => openMenu(e)}>
                <Icon
                    src={icon}
                    title={title}
                    width={width}
                    height={height}
                    priority={true}
                />
            </div>

            {Object.keys(auth).length > 0 && (
                <Sidebar
                    auth={auth}
                    setAuth={setAuth}
                    styles={styles}
                    closeSidebar={closeMenu}
                    sidebarClass={showMenu ? styles.show : "hide"}
                    overlayCls={addOverlay ? styles.leftMenuOverlay : ""}
                />
            )}


        </>
    )
}