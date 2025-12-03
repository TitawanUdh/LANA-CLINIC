import React from "react";
import { FaInstagram, FaLine, FaFacebookF, FaLocationArrow } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const links = [
  
  {
    num: 1,
    title: "Instagram",
    link: "https://www.instagram.com/lanaclinic.official?igsh=MTd3dTd5aHZneWt2Mg==",
    icon: <FaInstagram />,
  },
  {
    num: 2,
    title: "Line",
    link: "https://lin.ee/Vx8nGad",
    icon: <FaLine />,
  },
  {
    num: 3,
    title: "Facebook",
    link: "https://www.facebook.com/share/17YKbwnEzH/?mibextid=wwXIfr",
    icon: <FaFacebookF />,
  },
  {
    num: 4,
    title: "Location",
    link: "https://share.google/JUAwMn3wuhsxtUwV4",
    icon: <FaLocationPin/>,
  },
];

export default function Directions() {
  const open = (href) =>
    href && window.open(href, "_blank", "noopener,noreferrer");

  return (
    // เอา class ของ Bootstrap ที่บังคับ flex ออก ให้เรา control เองด้วย CSS
    <div className="link-list mt-4">
      {links.map((it) => {
        const disabled = !it.link;
        return (
          <div
            key={it.num}
            className={`link-card ${disabled ? "is-disabled" : ""}`}
            role="button"
            tabIndex={0}
            aria-disabled={disabled}
            onClick={() => !disabled && open(it.link)}
            onKeyDown={(e) => {
              if (!disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                open(it.link);
              }
            }}
          >
            <span className="chip">{it.num}</span>
            <div className="link-title">{it.title}</div>
            <span className="icon-wrap" aria-hidden="true">
              {it.icon}
            </span>
          </div>
        );
      })}
    </div>
  );
}
