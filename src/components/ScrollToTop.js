import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant", // Optional if you want to skip the scrolling animation
            });
        } else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView();
                }
              }, 0);
        }
    }, [pathname, hash, key]);
}